import { Instance } from "./instance";

export interface Card {
  readonly title: string;
  readonly iconPath: string;
  readonly id: string;
}

export const Card = {
  fromInstance: (instance: Instance): Card => {
    return {
      title: instance.name,
      id: instance.id,
      iconPath: instance.iconPath,
    }
  }
}
