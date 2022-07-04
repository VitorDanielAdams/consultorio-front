<template>
    <h1 class="title is-4 has-text-left">Cadastrar Pacientes</h1>
    <div class="column is-10">
        <div :class="notification.classe" v-if="notification.ativo">
            <button class="delete" @click="onClickFecharNotificacao()"></button>
            {{notification.message}}
        </div>
    </div>
    <div class="column is-10">
        <div class="field has-text-left">
            <label class="checkbox">
                <input v-model="this.paciente.ativo" class="checkbox" checked type="checkbox"
                    :disabled="this.model == 'detalhar' ? true : false">
                Ativo
            </label>
        </div>
    </div>
    <div class="columns p-5">
        <div class="column is-5">
            <div class="field">
                <label class="label has-text-left">Nome</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.paciente.nome" placeholder="Insira um nome"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Login</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.paciente.login" placeholder="Insira um nome de usuario"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">RG</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.paciente.rg" placeholder="Insira um rg"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Telefone</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.paciente.telefone" placeholder="Insira um telefone" 
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Sexo</label>
                <div class="control is-flex">
                    <div class="select"> 
                        <select v-model="this.paciente.sexo" :disabled="this.model == 'detalhar' ? true : false">
                            <option value="">Selecione</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outros">Outros</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left" v-if="this.paciente.convenio">Convênio</label>
                <div class="control is-flex">
                    <div class="select"> 
                        <select v-model="this.paciente.convenio" :disabled="this.model == 'detalhar' ? true : false">
                            <option value="">Selecione</option>
                            <option v-for="convenio in this.conveniosList" :key="convenio.id" 
                                :value="convenio">{{convenio.nome}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field" v-if="this.paciente.convenio">
                <label class="label has-text-left">Numero do Cartão</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.paciente.numeroCartaoConvenio" 
                        placeholder="Insira o numero do cartão"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
        </div>
        <div class="column is-5">
            <div class="field">
                <label class="label has-text-left">Email</label>
                <div class="control">
                    <input class="input" type="email" v-model="this.paciente.email" placeholder="Insira um email"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Senha</label>
                <div class="control">
                    <input class="input" type="password" v-model="this.paciente.senha" placeholder="Insira uma senha"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">CPF</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.paciente.cpf" placeholder="Insira um cpf"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Nacionalidade</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.paciente.nacionalidade" 
                        placeholder="Insira um nacionalidade nacionalidade"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Tipo De Atendimento</label>
                <div class="control is-flex">
                    <div class="select"> 
                        <select v-model="this.paciente.tipoAtendimento" :disabled="this.model == 'detalhar' ? true : false">
                            <option value="">Selecione</option>
                            <option value="plano">Plano</option>
                            <option value="convenio">Convenio</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field" v-if="this.paciente.tipoAtendimento == TipoAtendimento.convenio">
                <label class="label has-text-left">Data De Vencimento</label>
                <div class="control">
                    <input class="input" type="datetime-local" :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
        </div>
    </div>
    <div class="column is-10 is-flex is-justify-content-space-between p-5">
        <div class="field">
            <div class="control">
                <router-link to="/pacientes">
                    <input type="button" class="button has-background-link has-text-white is-uppercase btn" value="Voltar">
                </router-link>
            </div>
        </div>
        <div class="field" v-if="this.model === 'cadastrar'">
            <div class="control">
                <input class="button has-background-primary has-text-white is-uppercase btn" type="button" value="Cadastrar"
                    @click="onClickCadastrar()">
            </div>
        </div>
        <div class="field" v-if="this.model === 'detalhar'">
            <div class="control">
                <input class="button has-background-primary has-text-white is-uppercase btn" type="button" value="Editar" 
                    @click="onClickPaginaEditar(this.id)">
            </div>
        </div>
        <div class="field" v-if="this.model === 'detalhar'">
            <div class="control">
                <input class="button has-background-danger has-text-white is-uppercase btn" type="button" value="Desativar"
                    @click="onClickDesativar()">
            </div>
        </div>
        <div class="field" v-if="this.model === 'editar'">
            <div class="control">
                <input class="button has-background-primary has-text-white is-uppercase btn" type="button" value="Editar"
                    @click="onClickEditar()">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'; 

    import { Prop } from 'vue-property-decorator'

    import { Notification } from '@/model/notification'; 
    import { Paciente } from '@/model/paciente.model';
    import { PacienteClient } from '@/client/paciente.client';

    import { PageRequest } from '@/model/page/page-request';
    import { PageResponse } from '@/model/page/page-response';

    import { Convenio } from '@/model/convenio.model';
    import { ConvenioClient } from '@/client/convenio.client';

    import { TipoAtendimento } from '@/model/tipo-atendimento.enum';

    export default class PacienteForm extends Vue {

        private pacienteClient!: PacienteClient;
        private paciente: Paciente = new Paciente()
        private notification: Notification = new Notification()
        private pageRequest: PageRequest = new PageRequest()
        private pageResponse: PageResponse<Convenio> = new PageResponse()

        private conveniosList: Convenio[] = []
        private convenioClient!: ConvenioClient

        @Prop({type: Number, required: false})
        private readonly id!:number

        @Prop({type: String, required: false})
        private readonly model!:string

        public mounted():void {
            this.pacienteClient = new PacienteClient();
            this.convenioClient = new ConvenioClient()
            if(this.paciente.tipoAtendimento == TipoAtendimento.convenio) {
                this.listarConvenios()
            }
            if (this.id) {
                this.getById(this.id)
            }
        }

        private listarConvenios():void {
            this.convenioClient.findByFiltrosPaginado(this.pageRequest)
                .then(
                success => {
                    this.pageResponse = success
                    this.conveniosList = this.pageResponse.content
                },
                error => console.log(error)
                )
        }

        private onClickCadastrar():void { 
            this.pacienteClient.cadastrar(this.paciente)
                .then(
                success => {
                    this.notification = this.notification.new(true,'notification is-success','Paciente Cadastrado Com Sucesso!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true,'notification is-danger','Error: ' + error)
                    this.onClickLimpar()
                }
                )       
        }

        private onClickEditar() {
            this.pacienteClient.editar(this.paciente)
                .then(
                    success => {
                        this.$router.push('/pacientes')
                    }, error => {
                        this.notification = this.notification.new(true,'notification is-danger','Error: ' + error)
                        this.onClickLimpar()
                    }
                )
        }

        private onClickDesativar() {
            this.pacienteClient.desativar(this.paciente)
                .then(
                    success => {
                        this.$router.push('/pacientes')
                    }
                )
        }
        
        private onClickFecharNotificacao():void {
            this.notification = new Notification()
        }

        private onClickLimpar():void {
            this.paciente = new Paciente()
        }

        private getById(id: number):void {
            this.pacienteClient.findById(id)
                .then(
                    success => {
                        this.paciente = success
                    }
                )
        }

        private onClickPaginaEditar(id: number):void { 
            this.$router.push({name: 'PacientesForm', params: {id: id, model: 'editar'}})
        }

    }
</script>

<style>
    .select, .select select {
        width: 100%;
    }
    .btn {
        width: 100%;
    }
</style>