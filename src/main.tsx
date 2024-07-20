import React from "react";
import ReactDOM from "react-dom/client";
import InstancesPage from "@/features/instances-page/components/pages/InstancesPage";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <InstancesPage />
  </React.StrictMode>
);
