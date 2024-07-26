import { Instance } from "./instance";

export interface Card {
  readonly title: string;
  readonly icon: string;
  readonly id: string;
}

export const Card = {
  fromInstance: (instance: Instance): Card => {
    return {
      title: instance.name,
      id: instance.id,
      icon: instance.icon,
    }
  }
}
