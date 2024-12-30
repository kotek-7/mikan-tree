use crate::instance;
use crate::instance::Instance;

#[tauri::command()]
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

#[tauri::command(rename_all = "snake_case")]
pub fn delete_instance_by_id(app_handle: tauri::AppHandle, target_id: &str) {
    instance::delete_instance_by_id(&app_handle, target_id);
}

#[tauri::command()]
pub fn create_instance(app_handle: tauri::AppHandle, instance: Instance) {
    instance::create_instance(&app_handle, &instance);
}

#[tauri::command()]
pub fn create_new_instance(app_handle: tauri::AppHandle, name: &str, icon: &str) {
    instance::create_new_instance(&app_handle, name, icon);
}
