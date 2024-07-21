use std::fs;

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct Instance {
    name: String,
    icon: String,
}

pub fn serialize_and_write_instances(
    app_handle: tauri::AppHandle,
    instances: Vec<Instance>,
) -> Result<(), String> {
    let app_data_path = app_handle.path_resolver().app_data_dir();
    let app_data_path = match app_data_path {
        Some(path) => path,
        None => return Err("Failed to get path".to_string()),
    };
    let path = app_data_path.join("instances.json");

    let json = serde_json::to_string(&instances);
    let json = match json {
        Ok(json) => json,
        Err(e) => return Err(format!("Failed to serialize: {e}")),
    };

    fs::write(path, json).map_err(|e| format!("Failed to write file: {e}"))
}

pub fn fetch_and_deserialize_instances(
    app_handle: tauri::AppHandle,
) -> Result<Vec<Instance>, String> {
    let app_data_path = app_handle.path_resolver().app_data_dir();
    let app_data_path = match app_data_path {
        Some(path) => path,
        None => return Err("Failed to get appdata".to_string()),
    };
    let path = app_data_path.join("instances.json");

    let json = fs::read_to_string(path);
    let json = match json {
        Ok(json) => json,
        Err(e) => return Err(format!("Failed to read json: {e}")),
    };

    let instances: Result<Vec<Instance>, String> =
        serde_json::from_str(&json).map_err(|e| format!("Failed to deserialize json: {e}"));

    instances
}
