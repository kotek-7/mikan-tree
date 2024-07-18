// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![open_docs, open_mods_page, test])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
async fn open_docs(handle: tauri::AppHandle) {
    tauri::WindowBuilder::new(
        &handle,
        "external", /* the unique window label */
        tauri::WindowUrl::External("https://tauri.app/".parse().unwrap()),
    )
    .build()
    .unwrap();
}

#[tauri::command]
async fn open_mods_page(handle: tauri::AppHandle) {
    println!("open mods page");
    tauri::WindowBuilder::new(
        &handle,
        "local", /* the unique window label */
        tauri::WindowUrl::App("mods.html".into()),
    )
    .build()
    .unwrap();
}

#[tauri::command]
fn test() {
    println!("TEST!!");
}
