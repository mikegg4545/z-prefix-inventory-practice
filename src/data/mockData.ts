import type { Item } from "../types/item";
import type { User } from "../types/user";

export const mockUser: User = {
  id: 1,
  firstName: "Jesus",
  lastName: "Garza",
  username: "mikegg4545",
};

export const mockItems: Item[] = [
  {
    id: 1,
    userId: 1,
    name: "Hammer",
    description: "A basic claw hammer for general household projects.",
    quantity: 1,
  },
  {
    id: 2,
    userId: 1,
    name: "Drill",
    description: "Cordless drill used for building and repairs.",
    quantity: 2,
  },
];
