import express from "express";
import { setupVite, serveStatic, log } from "./vite";
import { createServer } from "node:http";

async function startServer(appType: "ui-kit" | "web-app", port: number) {
  const app = express();
  const server = createServer(app);

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Add CORS headers for development
  if (process.env.NODE_ENV !== "production") {
    app.use((_, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
  }

  // Logging middleware
  app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse: Record<string, unknown> | undefined = undefined;

    const originalResJson = res.json;
    res.json = (bodyJson, ...args) => {
      capturedJsonResponse = bodyJson;
      return originalResJson.apply(res, [bodyJson, ...args]);
    };

    res.on("finish", () => {
      const duration = Date.now() - start;
      if (path.startsWith("/api")) {
        let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
        if (capturedJsonResponse) {
          logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
        }

        if (logLine.length > 80) {
          logLine = `${logLine.slice(0, 79)}…`;
        }

        log(logLine);
      }
    });

    next();
  });

  try {
    if (process.env.NODE_ENV === "production") {
      serveStatic(app, appType);
    } else {
      await setupVite(app, server, appType);
    }

    return new Promise((resolve, reject) => {
      server.listen(port, () => {
        log(`${appType} server started on http://localhost:${port}`);
        resolve(server);
      }).on('error', (error: NodeJS.ErrnoException) => {
        if (error.code === 'EADDRINUSE') {
          log(`Port ${port} is already in use. Please try another port or stop the existing process.`);
        } else {
          log(`Failed to start ${appType} server: ${error.message}`);
        }
        reject(error);
      });
    });
  } catch (error) {
    log(`Error setting up ${appType} server: ${error}`);
    throw error;
  }
}

// Start both servers
Promise.all([
  startServer("ui-kit", 5173),
  startServer("web-app", 3000),
]).catch((error) => {
  console.error("Failed to start servers:", error);
  process.exit(1);
});
