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
  console.log("isImage: Checking is %o Image...", obj)

  if (typeof obj !== "object" || obj === null) {
    console.log("isImage: Passed obj is not object")
    console.log("isImage: Passed obj is not Image")
  }

  const image = obj as { [_ in keyof Image]: unknown };

  if (typeof image.path !== "string") {
    console.log("isImage: Passed obj does not have correct path")
    console.log("isImage: Passed obj is not Image")
  }

  console.log("isImage: Passed obj is Image")
  return true;
}
