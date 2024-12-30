#[tauri::command]
pub async fn open_docs(handle: tauri::AppHandle) {
    tauri::WebviewWindowBuilder::new(
        &handle,
        "external", /* the unique window label */
        tauri::WebviewUrl::External("https://tauri.app/".parse().unwrap()),
    )
    .build()
    .unwrap();
}

#[tauri::command]
pub async fn open_instance_mods_page(handle: tauri::AppHandle) {
    println!("open instance mods page");
    tauri::WebviewWindowBuilder::new(
        &handle,
        "instance-mods", /* the unique window label */
        tauri::WebviewUrl::App("instance-mods.html".into()),
    )
    .build()
    .unwrap();
}

#[tauri::command]
pub async fn open_mods_page(handle: tauri::AppHandle) {
    println!("open mods page");
    tauri::WebviewWindowBuilder::new(
        &handle,
        "mods", /* the unique window label */
        tauri::WebviewUrl::App("mods.html".into()),
    )
    .build()
    .unwrap();
}
