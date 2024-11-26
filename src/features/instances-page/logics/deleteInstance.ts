import { invoke } from "@tauri-apps/api";

export async function deleteInstance(id: string) {
  invoke("delete_instance_by_id", { targetId: id });
  console.log(`deleteInstance: deletedInstance! (id:${id})`)
}
