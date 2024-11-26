use crate::instance::Instance;

#[tauri::command]
pub fn write_instances(app_handle: tauri::AppHandle, instances: Vec<Instance>) -> String{
    crate::instance::write_instances(&app_handle, &instances)
}

#[tauri::command()]
pub fn fetch_instances(app_handle: tauri::AppHandle) -> Vec<Instance> {
    crate::instance::fetch_instances(&app_handle)
}
