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
                    <input v-model="this.especialidade.ativo" class="checkbox" type="checkbox" checked  
                        :disabled="this.model == 'detalhar' ? true : false">
                    Ativo
                </label>
            </div>
            <div class="field">
                <label class="label has-text-left">Nome</label>
                <div class="control">
                    <input class="input" v-model="this.especialidade.nome" type="text" placeholder="Insira um nome" 
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
        </div>
    </div>
    <div class="column is-10 is-flex is-justify-content-space-between p-5">
        <div class="field">
            <div class="control">
                <router-link to="/especialidades">
                    <input type="button" class="button has-background-link has-text-white is-uppercase btn" value="Voltar" >
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
    import { Especialidade } from '@/model/especialidade.model';
    import { EspecialidadeClient } from '@/client/especialidade.client';

    export default class EspecialidadeForm extends Vue {

        private especialidadeClient!: EspecialidadeClient;
        private especialidade: Especialidade = new Especialidade()
        private notification: Notification = new Notification()

        @Prop({type: Number, required: false})
        private readonly id!:number

        @Prop({type: String, required: false})
        private readonly model!:string

        public mounted():void {
            this.especialidadeClient = new EspecialidadeClient();
            if (this.id) {
                this.getById(this.id)
            }
        }

        private onClickCadastrar():void { 
            if(!this.especialidade.id) {
                this.especialidadeClient.cadastrar(this.especialidade)
                    .then(
                    success => {
                        this.notification = this.notification.new(true,'notification is-success','Especialidade Cadastrada Com Sucesso!')
                        this.onClickLimpar()
                    }, error => {
                        this.notification = this.notification.new(true,'notification is-danger','Error: ' + error)
                        this.onClickLimpar()
                    }
                    )
            } else {
                this.notification = this.notification.new(true,'notification is-danger','Especialidade Já existe!')
                this.onClickLimpar()
            }       
        }

        private onClickEditar():void {
            this.especialidadeClient.editar(this.especialidade)
                .then(
                    success => {
                        this.$router.push('/especialidades')
                    }, error => {
                        this.notification = this.notification.new(true,'notification is-danger','Error: ' + error)
                        this.onClickLimpar()
                    }
                )
        }

        private onClickDesativar():void {
            this.especialidadeClient.desativar(this.especialidade)
                .then(
                    success => {
                        this.$router.push('/especialidades')
                    }
                )
        }
        
        private onClickFecharNotificacao():void {
            this.notification = new Notification()
        }

        private onClickLimpar():void {
            this.especialidade = new Especialidade()
        }

        private getById(id: number):void {
            this.especialidadeClient.findById(id)
                .then(
                    success => {
                        this.especialidade = success
                    }
                )
        }

        private onClickPaginaEditar(id: number):void { 
            this.$router.push({name: 'EspecialidadesForm', params: {id: id, model: 'editar'}})
        }

    }
</script>

<style>
    .btn {
        width: 15rem;
    }
</style>