import { Convenio } from "./convenio.model";
import { Pessoa } from "./pessoa.model";
import { TipoAtendimento } from "./tipo-atendimento.enum";

export class Paciente extends Pessoa {

    tipoAtendimento! : TipoAtendimento
    convenio! : Convenio
    numeroCartaoConvenio! : string
    dataVencimento! : Date

}