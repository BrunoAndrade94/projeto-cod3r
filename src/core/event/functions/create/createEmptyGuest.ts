import { Guest, Id } from "../../..";

export default function createEmptyGuest(): Partial<Guest> {
  return {
    id: Id.new(),
    nome: "",
    email: "",
    telefone: "",
    confirmado: true,
    possuiAcompanhantes: false,
    totalAcompanhantes: 0,
  };
}
