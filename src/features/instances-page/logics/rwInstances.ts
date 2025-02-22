import { invoke } from "@/utils/invoke";
import { isInstance } from "../types/instance";

export async function fetchInstances() {
  const instances = await invoke("fetch_instances");
  if (!(Array.isArray(instances) && instances.every(isInstance)))
    throw new TypeError(`Passed argument is not array of instance (arg: ${JSON.stringify(instances)})`);
  return instances;
}
export async function deleteInstance(id: string) {
  invoke("delete_instance_by_id", { targetId: id });
  console.log(`deleteInstance: deletedInstance! (id:${id})`)
}
