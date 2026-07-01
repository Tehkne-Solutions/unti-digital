import { clients } from "./clients";

export interface Logo {
  id: number;
  name: string;
  src: string;
}

export const logosData: Logo[] = clients.map((client, index) => ({
  id: index + 1,
  name: client.name,
  src: client.logo
}));
