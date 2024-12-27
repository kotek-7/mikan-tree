import { InvokeArgs, InvokeOptions, invoke as tauriInvoke } from "@tauri-apps/api/core";

// Tauri invoke but returns an object with camelCase keys
export async function invoke<T>(cmd: string, args?: InvokeArgs, options?: InvokeOptions) {
  let snakeCaseArgs = toSnakeKeysObj(args)
  let snakeCaseValue = await tauriInvoke<T>(cmd, snakeCaseArgs, options);
  return toCamelKeysObj(snakeCaseValue);
}

// Helper function to convert snake_case keys to camelCase
function toCamelKeysObj(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((element) => toCamelKeysObj(element));
  } else if (obj !== null && typeof obj === "object") {
    const camelKeysObj = Object.fromEntries(
      Object.entries(obj).map(([snakeKey, value]) => {
        const lowerWords = snakeKey.split("_");
        const processedWords = lowerWords.map((word, i) => {
          if (i === 0) return word;
          if (word.length <= 1) return word.toUpperCase();
          return word.charAt(0).toUpperCase().concat(word.substring(1, word.length));
        });
        const camelKey = processedWords.join("");
        return [camelKey, toCamelKeysObj(value)];
      })
    );
    return camelKeysObj;
  }
  return obj;
}

// Helper function to convert camelCase keys to snake_case
function toSnakeKeysObj(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((element) => toSnakeKeysObj(element));
  } else if (obj !== null && typeof obj === "object") {
    const snakeKeysObj = Object.fromEntries(
      Object.entries(obj).map(([camelKey, value]) => {
        const camelChars = camelKey.split("");
        const snakeChars = camelChars.map((char, _) => {
          if (char.toUpperCase() === char) {
            return "_".concat(char.toLowerCase())
          } else {
            return char;
          }
        });
        const snakeKey = snakeChars.join("");
        return [snakeKey, toSnakeKeysObj(value)];
      })
    );
    return snakeKeysObj;
  }
  return obj;
}