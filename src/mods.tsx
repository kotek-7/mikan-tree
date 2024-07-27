import React from "react";
import ReactDOM from "react-dom/client";
import InstanceModsPage from "@/features/instance-mods-page/components/pages/InstanceModsPage";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <InstanceModsPage />
  </React.StrictMode>
);
