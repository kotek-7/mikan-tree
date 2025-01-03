use serde::{Deserialize, Serialize};
use tauri::{Manager, Runtime};

#[tauri::command]
pub async fn get_app_data_path(app_handle: tauri::AppHandle) -> String {
    let path_resolver = app_handle.path();

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


#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct TestStruct {
    struct_name: String,
}

#[tauri::command]
pub async fn get_struct<R: Runtime>(_app: tauri::AppHandle<R>,_windoww: tauri::Window<R>) -> TestStruct {
    TestStruct {
        struct_name: "test".to_string(),
    }
}


#[tauri::command]
pub async fn get_structs<R: Runtime>(_app: tauri::AppHandle<R>, _window: tauri::Window<R>) -> Vec<TestStruct> {
    vec![
        TestStruct {
            struct_name: "test1".to_string(),
        },
        TestStruct {
            struct_name: "test2".to_string(),
        },
    ]
}