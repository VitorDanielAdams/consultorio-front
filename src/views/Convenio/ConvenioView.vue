<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Convênios</h3>
    <div class="columns">
      <div class="column is-6">
        <input class="input" type="text" placeholder="Pesquisar">
      </div>
      <div class="column is-3">
        <input class="button has-background-primary" type="button" value="Cadastrar" @click="onClickPaginaCadastrar()">
      </div>
    </div>
    
    <div class="column is-9">
      <table class="table">
        <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Valor</th>
              <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="convenio in this.conveniosList" :key="convenio.id">
              <td v-if="convenio.ativo">
                <span class="icon has-text-success">
                  <i class="fas fa-check-square"></i>
                </span>
              </td>
              <td v-if="!convenio.ativo">
                <span class="icon has-text-danger">
                  <i class="fas fa-square-xmark"></i>
                </span>
              </td>
              <td>{{convenio.nome}}</td>
              <td>{{convenio.valor}}</td>
              <td>
                <input type="button" class="button is-size-6 has-background-grey-light" 
                  @click="onClickPaginaDetalhar(convenio.id)" value="Detalhar">
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

  import { Convenio } from '@/model/convenio.model';
  import { ConvenioClient } from '@/client/convenio.client';

  export default class ConvenioView extends Vue {
    private pageRequest: PageRequest = new PageRequest()
    private pageResponse: PageResponse<Convenio> = new PageResponse()

    private conveniosList: Convenio[] = []
    private convenioClient!: ConvenioClient

    public mounted():void {
      this.convenioClient = new ConvenioClient()
      this.listarConvenios()
    }

    private listarConvenios():void {
      this.convenioClient.findByFiltrosPaginado(this.pageRequest)
        .then(
          success => {
            this.pageResponse = success
            this.conveniosList = this.pageResponse.content
          },
          error => console.log(error)
        )
    }

    private onClickPaginaCadastrar():void {
      this.$router.push({name: 'ConveniosForm', params: { model: 'cadastrar'}})
    }

    private onClickPaginaDetalhar(id: number):void {
      this.$router.push({name: 'ConveniosForm', params: {id: id, model: 'detalhar'}})
    }

  }
</script>

<style>
  .button {
    width: 60%;
  }
</style>