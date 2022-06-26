import { AbstractEntity } from "./abstract-entity.model";
import { Sexo } from "./sexo.enum";

export class Pessoa extends AbstractEntity {

    nome! : string
    cpf! : string 
    rg! : string
    telefone! : string
    email! : string
    login! : string
    senha! : string
    nacionalidade! : string
    sexo! : Sexo

}