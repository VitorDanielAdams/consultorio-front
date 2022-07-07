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
                    <input v-model="this.convenio.ativo" class="checkbox" checked type="checkbox" 
                        :disabled="this.model == 'detalhar' ? true : false">
                    Ativo
                </label>
            </div>
            <div class="field">
                <label class="label has-text-left">Nome</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.convenio.nome" placeholder="Insira um nome"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Valor</label>
                <div class="control">
                    <input class="input" type="number" step=0.01 v-model="this.convenio.valor" placeholder="Insira um valor"
                        :disabled="this.model == 'detalhar' ? true : false">
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
    import { Convenio } from '@/model/convenio.model';
    import { ConvenioClient } from '@/client/convenio.client';

    export default class ConvenioForm extends Vue {
        
        private convenioClient!: ConvenioClient;
        private convenio: Convenio = new Convenio()
        private notification: Notification = new Notification()

        @Prop({type: Number, required: false})
        private readonly id!:number

        @Prop({type: String, required: false})
        private readonly model!:string

        public mounted():void {
            this.convenioClient = new ConvenioClient();
            if (this.id) {
                this.getById(this.id)
            }
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

        private onClickEditar():void {
            this.convenioClient.editar(this.convenio)
                .then(
                    success => {
                        this.$router.push('/convenios')
                    }, error => {
                        this.notification = this.notification.new(true,'notification is-danger','Error: ' + error)
                        this.onClickLimpar()
                    }
                )
        }

        private onClickDesativar():void {
            this.convenioClient.desativar(this.convenio)
                .then(
                    success => {
                        this.$router.push('/convenios')
                    }
                )
        }
        
        private onClickFecharNotificacao():void {
            this.notification = new Notification()
        }

        private onClickLimpar():void {
            this.convenio = new Convenio()
        }

        private getById(id: number):void {
            this.convenioClient.findById(id)
                .then(
                    success => {
                        this.convenio = success
                    }
                )
        }

        private onClickPaginaEditar(id: number):void { 
            this.$router.push({name: 'ConveniosForm', params: {id: id, model: 'editar'}})
        }

    }
</script>

<style>
    .btn {
        width: 15rem;
    }
</style>