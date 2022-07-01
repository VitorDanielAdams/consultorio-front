<template>
    <h1 class="title is-4 has-text-left">Detalhe Especialidade</h1>
    <form>
        <div class="columns p-5">
            <div class="column is-10">
                <div class="field has-text-left">
                    <label class="checkbox">
                        <input class="checkbox" checked type="checkbox" 
                            :disabled="model == 'detalhar' ? true : false">
                        Ativo
                    </label>
                </div>
                <div class="field">
                    <label class="label has-text-left">Nome</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um nome" 
                            :disabled="model == 'detalhar' ? true : false">
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-10 is-flex is-justify-content-space-between p-5">
            <div class="field">
                <div class="control">
                    <router-link to="/especialidades">
                        <input class="button has-background-primary has-text-white is-uppercase btn" value="Voltar">
                    </router-link>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <router-link to="/especialidades">
                        <input class="button has-background-primary has-text-white is-uppercase btn" value="Editar">
                    </router-link>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="button has-background-primary has-text-white is-uppercase btn" value="Desativar">
                </div>
            </div>
        </div>
    </form>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'; 

    import { Notification } from '@/model/notification'; 
    import { Especialidade } from '@/model/especialidade.model';
    import { EspecialidadeClient } from '@/client/especialidade.client';

    export default class EspecialidadeDetalhe extends Vue {

       
        
    }
</script>

<style>
    .btn {
        width: 15rem;
    }

</style>