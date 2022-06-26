import { Especialidade } from "./especialidade.model";
import { Pessoa } from "./pessoa.model";

export class Medico extends Pessoa {

    especialidade! : Especialidade
    crm! : string
    porcentagemParticipacao! : number
    consultorio! : string

}