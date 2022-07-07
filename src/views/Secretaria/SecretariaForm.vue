<template>
    <h1 class="title is-4 has-text-left">Cadastrar Secretarias</h1>
    <div class="column is-10">
        <div :class="notification.classe" v-if="notification.ativo">
            <button class="delete" @click="onClickFecharNotificacao()"></button>
            {{notification.message}}
        </div>
    </div>
    <div class="column is-10">
        <div class="field has-text-left">
            <label class="checkbox">
                <input v-model="this.secretaria.ativo" class="checkbox" checked type="checkbox" 
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
                    <input class="input" type="text" v-model="this.secretaria.nome" placeholder="Insira um nome"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Login</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.secretaria.login" placeholder="Insira um nome de usuario"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">RG</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.secretaria.rg" placeholder="Insira um rg"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Telefone</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.secretaria.telefone" placeholder="Insira um telefone"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Sexo</label>
                <div class="control is-flex">
                    <div class="select"> 
                        <select v-model="this.secretaria.sexo" :disabled="this.model == 'detalhar' ? true : false">
                            <option value="">Selecione</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outros">Outros</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Pis</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.secretaria.pis" placeholder="Insira um pis"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
        </div>
        <div class="column is-5">
            <div class="field">
                <label class="label has-text-left">Email</label>
                <div class="control">
                    <input class="input" type="email" v-model="this.secretaria.email" placeholder="Insira um email"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Senha</label>
                <div class="control">
                    <input class="input" type="password" v-model="this.secretaria.senha" placeholder="Insira uma senha"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">CPF</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.secretaria.cpf" placeholder="Insira um cpf"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Nacionalidade</label>
                <div class="control">
                    <input class="input" type="text" v-model="this.secretaria.nacionalidade" 
                        placeholder="Insira um nacionalidade nacionalidade"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Data De Contratação</label>
                <div class="control">
                    <input class="input" type="datetime-local" v-model="this.secretaria.dataContratacao"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Salario</label>
                <div class="control">
                    <input class="input" type="number" step=0.01 v-model="this.secretaria.salario" 
                        placeholder="Insira o salario"
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
        </div>
    </div>
    <div class="column is-10 is-flex is-justify-content-space-between p-5">
        <div class="field">
            <div class="control">
                <router-link to="/secretarias">
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

    import { PageRequest } from '@/model/page/page-request';
    import { PageResponse } from '@/model/page/page-response';
    import { Notification } from '@/model/notification'; 
    import { Secretaria } from '@/model/secretaria.model';
    import { SecretariaClient } from '@/client/secretaria.client';
    

    export default class SecretariaForm extends Vue {
        
        private secretariaClient!: SecretariaClient;
        private secretaria: Secretaria = new Secretaria()
        private notification: Notification = new Notification()

        @Prop({type: Number, required: false})
        private readonly id!:number

        @Prop({type: String, required: false})
        private readonly model!:string

        public mounted():void {
            this.secretariaClient = new SecretariaClient();
            if (this.id) {
                this.getById(this.id)
            }
        }

        private onClickCadastrar():void { 
            this.secretariaClient.cadastrar(this.secretaria)
                .then(
                success => {
                    this.notification = this.notification.new(true,'notification is-success','Secretaria Cadastrado Com Sucesso!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true,'notification is-danger','Error: ' + error)
                    this.onClickLimpar()
                }
                )       
        }

        private onClickEditar():void {
            this.secretariaClient.editar(this.secretaria)
                .then(
                    success => {
                        this.$router.push('/secretarias')
                    }, error => {
                        this.notification = this.notification.new(true,'notification is-danger','Error: ' + error)
                        this.onClickLimpar()
                    }
                )
        }

        private onClickDesativar():void {
            this.secretariaClient.desativar(this.secretaria)
                .then(
                    success => {
                        this.$router.push('/secretarias')
                    }
                )
        }
        
        private onClickFecharNotificacao():void {
            this.notification = new Notification()
        }

        private onClickLimpar():void {
            this.secretaria = new Secretaria()
        }

        private getById(id: number):void {
            this.secretariaClient.findById(id)
                .then(
                    success => {
                        this.secretaria = success
                    }
                )
        }

        private onClickPaginaEditar(id: number):void { 
            this.$router.push({name: 'SecretariasForm', params: {id: id, model: 'editar'}})
        }

    }
</script>

<style>
    .select, .select select {
        width: 100%;
    }
    .btn {
        width: 15rem;
    }
</style>