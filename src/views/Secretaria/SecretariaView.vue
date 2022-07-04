<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Secretarias</h3>
    <div class="columns">
      <div class="column is-8">
        <input class="input" type="text" placeholder="Pesquisar">
      </div>
      <div class="column is-3">
        <input class="button has-background-primary" type="button" value="Cadastrar" @click="onClickPaginaCadastrar()">
      </div>
    </div>
    <div class="column is-11">
      <table class="table">
        <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>PIS</th>
              <th>Salario</th>
              <th>Data Contratação</th>
              <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="secretaria in this.secretariasList" :key="secretaria.id">
              <td v-if="secretaria.ativo">
                <span class="icon has-text-success">
                  <i class="fas fa-check-square"></i>
                </span>
              </td>
              <td v-if="!secretaria.ativo">
                <span class="icon has-text-danger">
                  <i class="fas fa-square-xmark"></i>
                </span>
              </td>
              <td>{{secretaria.nome}}</td>
              <td>{{secretaria.pis}}</td>
              <td>{{secretaria.salario}}</td>
              <td>{{secretaria.dataContratacao}}</td>
              <td>
                <input type="button" class="button is-size-6 has-background-grey-light" 
                  @click="onClickPaginaDetalhar(secretaria.id)" value="Detalhar">
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component'; 

  import { PageRequest } from '@/model/page/page-request';
  import { PageResponse } from '@/model/page/page-response';

  import { Secretaria } from '@/model/secretaria.model';
  import { SecretariaClient } from '@/client/secretaria.client';

  export default class SecretariaView extends Vue {

    private pageRequest: PageRequest = new PageRequest()
    private pageResponse: PageResponse<Secretaria> = new PageResponse()

    private secretariasList: Secretaria[] = []
    private secretariaClient!: SecretariaClient

    public mounted():void {
      this.secretariaClient = new SecretariaClient()
      this.listarSecretarias()
    }

    private listarSecretarias():void {
      this.secretariaClient.findByFiltrosPaginado(this.pageRequest)
        .then(
          success => {
            this.pageResponse = success
            this.secretariasList = this.pageResponse.content
          },
          error => console.log(error)
        )
    }

    private onClickPaginaCadastrar():void {
      this.$router.push({name: 'SecretariasForm', params: { model: 'cadastrar'}})
    }

    private onClickPaginaDetalhar(id: number):void {
      this.$router.push({name: 'SecretariasForm', params: {id: id, model: 'detalhar'}})
    }

  }

</script>