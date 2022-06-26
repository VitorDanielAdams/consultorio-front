import { AbstractEntity } from "./abstract-entity.model";
import { Medico } from "./medico.model";
import { Paciente } from "./paciente.model";
import { StatusAgendamento } from "./status-agendamento.enum";

export class Agenda extends AbstractEntity {

    paciente! : Paciente
    medico! : Medico
    statusAgendamento! : StatusAgendamento
    dataDe! : Date
    dataAte! : Date
    encaixe! : boolean

}