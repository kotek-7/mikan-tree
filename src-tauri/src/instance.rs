use std::fs::{self, create_dir_all};

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Instance {
    name: String,
    icon: String,
}

pub fn serialize_and_write_instances(
    app_handle: tauri::AppHandle,
    instances: Vec<Instance>,
) -> String {
    let app_data_path = app_handle.path_resolver().app_data_dir().unwrap();

    if !app_data_path.exists() {
        let _ = create_dir_all(&app_data_path);
    }

    let path = app_data_path.join("instances.json");
    println!("write to: {}", path.to_str().unwrap());

    let json = serde_json::to_string(&instances).unwrap();
    println!("generated json: {}", json);

    let _ = fs::write(path, &json);

    json
}

pub fn fetch_and_deserialize_instances(
    app_handle: tauri::AppHandle,
) -> Vec<Instance> {
    let app_data_path = app_handle.path_resolver().app_data_dir().unwrap();
    let path = app_data_path.join("instances.json");
    println!("read: {}", path.to_str().unwrap());

    let json = fs::read_to_string(path);

    let json = match json {
        Ok(json) => json,
        Err(_) => initialize_instances(app_handle),
    };
    println!("found json: {}", json);

    let instances: Vec<Instance> = serde_json::from_str(&json).unwrap();
    println!("generated instances: {:?}", instances);

    instances
}

fn initialize_instances(app_handle: tauri::AppHandle) -> String {
    let instances = vec![];
    serialize_and_write_instances(app_handle, instances)
}
