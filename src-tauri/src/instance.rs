use std::{
    fs::{self, create_dir_all},
    vec,
};

use serde::{Deserialize, Serialize};
use tauri::Manager;

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Instance {
    name: String,
    id: String,
    icon: String,
}

impl PartialEq for Instance {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id
    }
}

pub fn write_instances(app_handle: &tauri::AppHandle, instances: &Vec<Instance>) -> String {
    let app_data_path = app_handle.path().app_data_dir().unwrap();

    if !app_data_path.exists() {
        let _ = create_dir_all(&app_data_path);
    }

    let path = app_data_path.join("instances.json");
    println!("write to: {}", path.to_str().unwrap());

    let json = serde_json::to_string_pretty(&instances).unwrap();
    println!("generated json: {}", json);

    let _ = fs::write(path, &json);

    json
}

pub fn fetch_instances(app_handle: &tauri::AppHandle) -> Vec<Instance> {
    let app_data_path = app_handle.path().app_data_dir().unwrap();
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

fn initialize_instances(app_handle: &tauri::AppHandle) -> String {
    let instances = vec![];
    write_instances(app_handle, &instances)
}

pub fn delete_instance(app_handle: &tauri::AppHandle, target_instance: &Instance) {
    let instances = fetch_instances(app_handle);
    let instance_iter = instances.iter().cloned();
    let instance_iter_filtered = instance_iter.filter(|instance| !(*instance).eq(target_instance));
    let processed_instnaces: Vec<_> = instance_iter_filtered.collect();
    write_instances(app_handle, &processed_instnaces);
}

pub fn delete_instance_by_id(app_handle: &tauri::AppHandle, target_id: &str) {
    let instances = fetch_instances(app_handle);
    let instance_iter = instances.iter().cloned();
    let instance_iter_filtered = instance_iter.filter(|instance| instance.id != target_id);
    let processed_instnaces: Vec<_> = instance_iter_filtered.collect();
    write_instances(app_handle, &processed_instnaces);
}

pub fn create_instance(app_handle: &tauri::AppHandle, instance: &Instance) {
    let original_instances = fetch_instances(app_handle);
    let extended_instances = [original_instances, vec![instance.clone()]].concat();
    write_instances(app_handle, &extended_instances);
}
