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
