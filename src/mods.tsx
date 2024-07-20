import React from "react";
import ReactDOM from "react-dom/client";
import ModsPage from "@/features/mods-page/components/pages/ModsPage";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ModsPage />
  </React.StrictMode>
);
