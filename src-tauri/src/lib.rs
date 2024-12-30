mod commands;
mod instance;

use crate::commands::open_page;
use crate::commands::rw_instance;
use crate::commands::test;

pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            test::get_app_data_path,
            test::get_struct,
            test::get_structs,
            open_page::open_docs,
            open_page::open_instance_mods_page,
            open_page::open_mods_page,
            rw_instance::fetch_instances,
            rw_instance::write_instances,
            rw_instance::delete_instance,
            rw_instance::delete_instance_by_id,
            rw_instance::create_instance,
            rw_instance::create_new_instance,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}