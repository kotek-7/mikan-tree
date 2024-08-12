export interface Image {
  readonly path: string
}

export const Image = {
  from(path: string): Image {
    return {
      path: path
    }
  }
}

export function isImage(obj: unknown): obj is Image {
  if (typeof obj !== "object" || obj === null) return false;

  const image = obj as { [_ in keyof Image]: unknown };

  if (typeof image.path !== "string") return false;

  return true;
}
