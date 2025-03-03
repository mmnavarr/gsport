import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/index.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(<App />);
