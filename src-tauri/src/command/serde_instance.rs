use crate::instance::Instance;

#[tauri::command]
pub fn serialize_and_write_instances(app_handle: tauri::AppHandle, instances: Vec<Instance>) -> String{
    crate::instance::serialize_and_write_instances(app_handle, instances)
}

#[tauri::command()]
pub fn fetch_and_deserialize_instances(app_handle: tauri::AppHandle) -> Vec<Instance> {
    crate::instance::fetch_and_deserialize_instances(app_handle)
}
