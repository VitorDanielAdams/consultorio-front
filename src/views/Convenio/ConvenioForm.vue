<template>
    <h1 class="title is-4 has-text-left">Cadastrar Convênios</h1>
    <div class="column is-10">
        <div :class="notification.classe" v-if="notification.ativo">
            <button class="delete" @click="onClickFecharNotificacao()"></button>
            {{notification.message}}
        </div>
    </div>
    <div class="columns p-5">
        <div class="column is-5">
            <div class="field has-text-left">
                <label class="checkbox">
                    <input v-model="this.convenio.ativo" class="checkbox" checked type="checkbox">
                    Ativo
                </label>
            </div>
            <div class="field">
                <label class="label has-text-left">Nome</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.convenio.nome" placeholder="Insira um nome">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Valor</label>
                <div class="control">
                    <input class="input" type="number" step=0.01 v-model="this.convenio.valor" placeholder="Insira um valor">
                </div>
            </div>
        </div>
    </div>
    <div class="column is-10 is-flex is-justify-content-space-between p-5">
        <div class="field">
            <div class="control">
                <router-link to="/convenios">
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
    import { Convenio } from '@/model/convenio.model';
    import { ConvenioClient } from '@/client/convenio.client';

    export default class ConvenioForm extends Vue {
        
        private convenioClient!: ConvenioClient;
        private convenio: Convenio = new Convenio()
        private notification: Notification = new Notification()

        public mounted():void {
            this.convenioClient = new ConvenioClient();
        }

        private onClickCadastrar():void { 
            this.convenioClient.cadastrar(this.convenio)
                .then(
                success => {
                    this.notification = this.notification.new(true,'notification is-success','Convênio Cadastrado Com Sucesso!')
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
            this.convenio = new Convenio()
        }

    }
</script>

<style>
    .btn {
        width: 15rem;
    }
</style>