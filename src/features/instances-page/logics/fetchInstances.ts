import { invoke } from "@tauri-apps/api";
import { isInstance } from "../types/instance";

export async function fetchInstances() {
  const instances = await invoke("fetch_and_deserialize_instances");
  if (!(Array.isArray(instances) && instances.every(isInstance)))
    throw new TypeError("Passed argument is not array of instance");
  return instances;
}
