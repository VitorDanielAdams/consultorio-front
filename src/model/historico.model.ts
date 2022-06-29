import { AbstractEntity } from "./abstract-entity.model";
import { Agenda } from "./agenda.model";
import { Paciente } from "./paciente.model";
import { Secretaria } from "./secretaria.model";
import { StatusAgendamento } from "./status-agendamento.enum";

export class Historico extends AbstractEntity {

    agenda! : Agenda
    statusAgendamento! : StatusAgendamento
    paciente! : Paciente
    secretaria! : Secretaria
    data! : Date
    observacao! : string

    constructor() {
        super();
        this.ativo = true
    }
    
}