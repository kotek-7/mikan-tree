// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod command;
mod instance;

use crate::command::open_page;
use crate::command::test;
use crate::command::serde_instance;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            test::get_app_data_path,
            open_page::open_docs,
            open_page::open_instance_mods_page,
            open_page::open_mods_page,
            serde_instance::fetch_and_deserialize_instances,
            serde_instance::serialize_and_write_instances,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// #[tauri::command]
// fn test() {
//     println!("TEST!!");
// }
