<template>
    <h1 class="title is-4 has-text-left">Cadastrar Especialidades</h1>
    
    <div class="column is-10">
        <div :class="notification.classe" v-if="notification.ativo">
            <button class="delete" @click="onClickFecharNotificacao()"></button>
            {{notification.message}}
        </div>
    </div>

    <div class="columns p-5">
        <div class="column is-10">
            <div class="field has-text-left">
                <label class="checkbox">
                    <input v-model="this.especialidade.ativo" class="checkbox" checked type="checkbox">
                    Ativo
                </label>
            </div>
            <div class="field">
                <label class="label has-text-left">Nome</label>
                <div class="control">
                    <input class="input" v-model="this.especialidade.nome" type="text" placeholder="Insira um nome">
                </div>
            </div>
        </div>
    </div>
    <div class="column is-10 is-flex is-justify-content-space-between p-5">
        <div class="field">
            <div class="control">
                <router-link to="/especialidades">
                    <input class="button has-background-link has-text-white is-uppercase btn" value="Voltar">
                </router-link>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="button has-background-primary has-text-white is-uppercase btn" @click="onClickCadastrar()" value="Cadastrar">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    
    import { Vue } from 'vue-class-component'; 

    import { Notification } from '@/model/notification'; 
    import { Especialidade } from '@/model/especialidade.model';
    import { EspecialidadeClient } from '@/client/especialidade.client';

    export default class EspecialidadeCadastro extends Vue {

        private especialidadeClient!: EspecialidadeClient;
        private especialidade: Especialidade = new Especialidade()
        private notification: Notification = new Notification()

        public mounted():void {
            this.especialidadeClient = new EspecialidadeClient();
        }

        private onClickCadastrar():void { 
            this.especialidadeClient.cadastrar(this.especialidade)
                .then(
                success => {
                    this.notification = this.notification.new(true,'notification is-success','Especialidade Cadastrada Com Sucesso!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true,'notification is-danger','Error: ' + error)
                    console.log(this.notification)
                    this.onClickLimpar()
                }
                )       
        }
        
        private onClickFecharNotificacao():void {
            this.notification = new Notification()
        }

        private onClickLimpar():void {
            this.especialidade = new Especialidade()
        }

    }
</script>

<style>
    .btn {
        width: 15rem;
    }
</style>