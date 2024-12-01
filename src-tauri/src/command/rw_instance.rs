use crate::instance::Instance;
use crate::instance;

#[tauri::command]
pub fn write_instances(app_handle: tauri::AppHandle, instances: Vec<Instance>) -> String {
    instance::write_instances(&app_handle, &instances)
}

#[tauri::command()]
pub fn fetch_instances(app_handle: tauri::AppHandle) -> Vec<Instance> {
    instance::fetch_instances(&app_handle)
}

#[tauri::command()]
pub fn delete_instance(app_handle: tauri::AppHandle, target_instance: Instance) {
    instance::delete_instance(&app_handle, &target_instance);
}

#[tauri::command()]
pub fn delete_instance_by_id(app_handle: tauri::AppHandle, target_id: &str) {
    instance::delete_instance_by_id(&app_handle, target_id);
}

#[tauri::command()]
pub fn create_instance(app_handle: tauri::AppHandle, instance: Instance) {
    instance::create_instance(&app_handle, &instance);
}
