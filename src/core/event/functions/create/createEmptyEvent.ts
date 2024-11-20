import { Id } from "../../..";
import Event from "../../model/Event";

export default function createEmptyEvent(): Partial<Event> {
  return {
    id: Id.new(),
    nome: "",
    descricao: "",
    data: new Date(),
    local: "",
    publicoEsperado: 1,
    imagem: "",
    imagemBackground: "",
  };
}
