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
                <input v-model="this.secretaria.ativo" class="checkbox" checked type="checkbox">
                Ativo
            </label>
        </div>
    </div>
    <div class="columns p-5">            
        <div class="column is-5">
            <div class="field">
                <label class="label has-text-left">Nome</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Insira um nome">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Login</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Insira um nome de usuario">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">RG</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Insira um rg">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Telefone</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Insira um telefone">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Sexo</label>
                <div class="control is-flex">
                    <div class="select"> 
                        <select>
                            <option value="">Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Pis</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Insira o pis">
                </div>
            </div>
        </div>
        <div class="column is-5">
            <div class="field">
                <label class="label has-text-left">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="Insira um email">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Senha</label>
                <div class="control">
                    <input class="input" type="password" placeholder="Insira uma senha">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">CPF</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Insira um cpf">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Nacionalidade</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Insira uma nacionalidade">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Data De Contratação</label>
                <div class="control">
                    <input class="input" type="date">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Salario</label>
                <div class="control">
                    <input class="input" type="number" step=0.01 placeholder="Insira o salario">
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
    import { Secretaria } from '@/model/secretaria.model';
    import { SecretariaClient } from '@/client/secretaria.client';
    

    export default class SecretariaForm extends Vue {
        
        private secretariaClient!: SecretariaClient;
        private secretaria: Secretaria = new Secretaria()
        private notification: Notification = new Notification()

        public mounted():void {
            this.secretariaClient = new SecretariaClient();
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
        
        private onClickFecharNotificacao():void {
            this.notification = new Notification()
        }

        private onClickLimpar():void {
            this.secretaria = new Secretaria()
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