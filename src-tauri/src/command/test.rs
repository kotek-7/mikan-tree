#[tauri::command]
pub async fn get_app_data_path(app_handle: tauri::AppHandle) -> String {
    let path_resolver = app_handle.path_resolver();

    let app_data_path = path_resolver.app_data_dir();
    let app_data_path = app_data_path.unwrap().to_str().unwrap().to_string();

    let app_config_path = path_resolver.app_config_dir();
    let app_config_path = app_config_path.unwrap().to_str().unwrap().to_string();

    let app_local_data_path = path_resolver.app_local_data_dir();
    let app_local_data_path = app_local_data_path.unwrap().to_str().unwrap().to_string();

    let app_cache_path = path_resolver.app_cache_dir();
    let app_cache_path = app_cache_path.unwrap().to_str().unwrap().to_string();

    let app_log_path = path_resolver.app_log_dir();
    let app_log_path = app_log_path.unwrap().to_str().unwrap().to_string();

    format!("app data path: {app_data_path}\napp config path: {app_config_path}\napp local data path: {app_local_data_path}\napp cache path: {app_cache_path}\napp log path: {app_log_path}")
}
