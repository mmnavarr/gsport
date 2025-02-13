import express, { type Express } from "express";
import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer as createViteServer, createLogger, type ServerOptions } from "vite";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import type { Server } from "node:http";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

type AppType = "ui-kit" | "web-app";

export async function setupVite(app: Express, server: Server, appType: AppType) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true,
  };

  const viteConfigPath = path.resolve(__dirname, "..", appType, "vite.config.ts");
  const viteConfig = (await import(viteConfigPath)).default;

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions as ServerOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const template = path.resolve(
        __dirname,
        "..",
        appType,
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let html = await fs.promises.readFile(template, "utf-8");
      html = html.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, html);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express, appType: AppType) {
  const distPath = path.resolve(__dirname, "..", "dist", appType);

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the ${appType} first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
