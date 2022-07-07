<template>
    <h1 class="title is-4 has-text-left">Cadastrar Médicos</h1>
    <div class="column is-10">
        <div :class="notification.classe" v-if="notification.ativo">
            <button class="delete" @click="onClickFecharNotificacao()"></button>
            {{notification.message}}
        </div>
    </div>
    <div class="column is-10">
        <div class="field has-text-left">
            <label class="checkbox">
                <input v-model="this.medico.ativo" class="checkbox" checked type="checkbox"
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
                    <input class="input" type="text" v-model="this.medico.nome" placeholder="Insira um nome"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Login</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.medico.login" placeholder="Insira um nome de usuario"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">RG</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.medico.rg" placeholder="Insira um rg"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Telefone</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.medico.telefone" placeholder="Insira um telefone"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Sexo</label>
                <div class="control">
                    <div class="select"> 
                        <select v-model="this.medico.sexo" :disabled="this.model == 'detalhar' ? true : false">
                            <option value="">Selecione</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outros">Outros</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Consultório</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.medico.consultorio" 
                        placeholder="Insira um nome de consultório" 
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">CRM</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.medico.crm" placeholder="Insira um CRM"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
        </div>
        <div class="column is-5">
            <div class="field">
                <label class="label has-text-left">Email</label>
                <div class="control">
                    <input class="input" type="email" v-model="this.medico.email" placeholder="Insira um email"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Senha</label>
                <div class="control">
                    <input class="input" type="password" v-model="this.medico.senha" placeholder="Insira uma senha"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">CPF</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.medico.cpf" placeholder="Insira um cpf"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Nacionalidade</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.medico.nacionalidade" placeholder="Insira uma nacionalidade"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Especialidade</label>
                <div class="control">
                    <div class="select"> 
                        <select v-model="this.medico.especialidade" :disabled="this.model == 'detalhar' ? true : false">
                            <option value="">Selecione</option>
                            <option v-for="especialidade in this.especialidedesList" :key="especialidade.id" 
                                :value="especialidade">{{especialidade.nome}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Valor Da Consulta</label>
                <div class="control">
                    <input class="input" type="number" step=0.01 v-model="this.medico.valorConsulta" 
                        placeholder="Insira o valor da consulta"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Porcentagem De Participação</label>
                <div class="control">
                    <input class="input" type="number" step=0.01 v-model="this.medico.porcenParticipacao" 
                        placeholder="Insira o valor da %"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
        </div>
    </div>
    <div class="column is-10 is-flex is-justify-content-space-between p-5">
        <div class="field">
            <div class="control">
                <router-link to="/medicos">
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
    import { Medico } from '@/model/medico.model';
    import { MedicoClient } from '@/client/medico.client';

    import { PageRequest } from '@/model/page/page-request';
    import { PageResponse } from '@/model/page/page-response';

    import { Especialidade } from '@/model/especialidade.model';
    import { EspecialidadeClient } from '@/client/especialidade.client';

    export default class MedicoForm extends Vue {

        private medicoClient!: MedicoClient;
        private medico: Medico = new Medico()
        private notification: Notification = new Notification()
        private pageRequest: PageRequest = new PageRequest()
        private pageResponse: PageResponse<Especialidade> = new PageResponse()

        private especialidedesList: Especialidade[] = []
        private especialidadeClient!: EspecialidadeClient

        @Prop({type: Number, required: false})
        private readonly id!:number

        @Prop({type: String, required: false})
        private readonly model!:string

        public mounted():void {
            this.medicoClient = new MedicoClient();
            this.especialidadeClient = new EspecialidadeClient()
            this.listarEspecialidades()
            if (this.id) {
                this.getById(this.id)
            }
        }

        private listarEspecialidades():void {
            this.especialidadeClient.findByFiltrosPaginado(this.pageRequest)
                .then(
                success => {
                    this.pageResponse = success
                    this.especialidedesList = this.pageResponse.content
                },
                error => console.log(error)
                )
        }	

        private onClickCadastrar():void { 
            console.log(this.medico)
            this.medicoClient.cadastrar(this.medico)
                .then(
                success => {
                    this.notification = this.notification.new(true,'notification is-success','Médico Cadastrado Com Sucesso!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true,'notification is-danger','Error: ' + error)
                    this.onClickLimpar()
                }
                )       
        }

        private onClickEditar():void {
            this.medicoClient.editar(this.medico)
                .then(
                    success => {
                        this.$router.push('/medicos')
                    }, error => {
                        this.notification = this.notification.new(true,'notification is-danger','Error: ' + error)
                        this.onClickLimpar()
                    }
                )
        }

        private onClickDesativar():void {
            this.medicoClient.desativar(this.medico)
                .then(
                    success => {
                        this.$router.push('/medicos')
                    }
                )
        }
        
        private onClickFecharNotificacao():void {
            this.notification = new Notification()
        }

        private onClickLimpar():void {
            this.medico = new Medico()
        }

        private getById(id: number):void {
            this.medicoClient.findById(id)
                .then(
                    success => {
                        this.medico = success
                    }
                )
        }

        private onClickPaginaEditar(id: number):void { 
            this.$router.push({name: 'MedicosForm', params: {id: id, model: 'editar'}})
        }

    }
</script>

<style>
@import "~bulma/bulma.sass";
    .select, .select select {
        width: 100%;
    }
    .btn {
        width: 100%;
    }
</style>