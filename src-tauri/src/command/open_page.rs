#[tauri::command]
pub async fn open_docs(handle: tauri::AppHandle) {
    tauri::WindowBuilder::new(
        &handle,
        "external", /* the unique window label */
        tauri::WindowUrl::External("https://tauri.app/".parse().unwrap()),
    )
    .build()
    .unwrap();
}

#[tauri::command]
pub async fn open_instance_mods_page(handle: tauri::AppHandle) {
    println!("open instance mods page");
    tauri::WindowBuilder::new(
        &handle,
        "instance-mods", /* the unique window label */
        tauri::WindowUrl::App("instance-mods.html".into()),
    )
    .build()
    .unwrap();
}

#[tauri::command]
pub async fn open_mods_page(handle: tauri::AppHandle) {
    println!("open mods page");
    tauri::WindowBuilder::new(
        &handle,
        "mods", /* the unique window label */
        tauri::WindowUrl::App("mods.html".into()),
    )
    .build()
    .unwrap();
}

