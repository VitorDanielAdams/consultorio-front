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
                <input v-model="this.medico.ativo" class="checkbox" checked type="checkbox">
                Ativo
            </label>
        </div>
    </div>
    <div class="columns p-5">
        <div class="column is-5">
            <div class="field">
                <label class="label has-text-left">Nome</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.medico.nome" placeholder="Insira um nome">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Login</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.medico.login" placeholder="Insira um nome de usuario">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">RG</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.medico.rg" placeholder="Insira um rg">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Telefone</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.medico.telefone" placeholder="Insira um telefone">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Sexo</label>
                <div class="control">
                    <div class="select"> 
                        <select v-model="this.medico.sexo">
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
                        placeholder="Insira um nome de consultório">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">CRM</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.medico.crm" placeholder="Insira um CRM">
                </div>
            </div>
        </div>
        <div class="column is-5">
            <div class="field">
                <label class="label has-text-left">Email</label>
                <div class="control">
                    <input class="input" type="email" v-model="this.medico.email" placeholder="Insira um email">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Senha</label>
                <div class="control">
                    <input class="input" type="password" v-model="this.medico.senha" placeholder="Insira uma senha">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">CPF</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.medico.cpf" placeholder="Insira um cpf">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Nacionalidade</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.medico.nacionalidade" placeholder="Insira uma nacionalidade">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Especialidade</label>
                <div class="control">
                    <div class="select"> 
                        <select v-model="this.medico.especialidade">
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
                        placeholder="Insira o valor da consulta">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Porcentagem De Participação</label>
                <div class="control">
                    <input class="input" type="number" step=0.01 v-model="this.medico.porcenParticipacao" 
                        placeholder="Insira o valor da %">
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
        <div class="field">
            <div class="control">
                <input type="button" class="button has-background-primary has-text-white is-uppercase btn" 
                    @click="onClickCadastrar()" value="Cadastrar">
            </div>
        </div>
    </div>
   
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'; 

    import { Notification } from '@/model/notification'; 
    import { Medico } from '@/model/medico.model';
    
    import { PageRequest } from '@/model/page/page-request';
    import { PageResponse } from '@/model/page/page-response';

    import { Especialidade } from '@/model/especialidade.model';
    import { EspecialidadeClient } from '@/client/especialidade.client';
    import { MedicoClient } from '@/client/medico.client';

    export default class MedicoForm extends Vue {

        private medicoClient!: MedicoClient;
        private medico: Medico = new Medico()
        private notification: Notification = new Notification()
        private pageRequest: PageRequest = new PageRequest()
        private pageResponse: PageResponse<Especialidade> = new PageResponse()

        private especialidedesList: Especialidade[] = []
        private especialidadeClient!: EspecialidadeClient

        public mounted():void {
            this.medicoClient = new MedicoClient();
            this.especialidadeClient = new EspecialidadeClient()
            this.listarEspecialidades()
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
        
        private onClickFecharNotificacao():void {
            this.notification = new Notification()
        }

        private onClickLimpar():void {
            this.medico = new Medico()
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