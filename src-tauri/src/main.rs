// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod command;
mod instance;

use crate::command::open_page;
use crate::command::rw_instance;
use crate::command::test;

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            test::get_app_data_path,
            open_page::open_docs,
            open_page::open_instance_mods_page,
            open_page::open_mods_page,
            rw_instance::fetch_instances,
            rw_instance::write_instances,
            rw_instance::delete_instance,
            rw_instance::delete_instance_by_id,
            rw_instance::create_instance,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// #[tauri::command]
// fn test() {
//     println!("TEST!!");
// }
