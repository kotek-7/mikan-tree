export interface Instance {
  name: string;
  id: string;
  iconPath: string;
}

export function isInstance(obj: unknown): obj is Instance {
  if (typeof obj !== "object" || obj === null) return false;

  const instance = obj as { [_ in keyof Instance]: unknown };

  if (typeof instance.name !== "string") return false;
  if (typeof instance.id !== "string") return false;
  if (typeof instance.iconPath !== "string") return false;

  return true;
}
