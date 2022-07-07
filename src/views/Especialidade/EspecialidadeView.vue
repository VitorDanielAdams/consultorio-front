<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Especialidades</h3>
    <div class="columns">
      <div class="column is-4">
        <input class="input" type="text" v-model="this.textSearch" placeholder="Pesquisar">
      </div>
      <div class="column is-2">
        <input class="button has-background-info" type="button" value="Pesquisar" @click="onClickPesquisar()">
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
              <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="especialidade in this.especialidedesList" :key="especialidade.id">
              <td v-if="especialidade.ativo">
                <span class="icon has-text-success">
                  <i class="fas fa-check-square"></i>
                </span>
              </td>
              <td v-if="!especialidade.ativo">
                <span class="icon has-text-danger">
                  <i class="fas fa-square-xmark"></i>
                </span>
              </td>
              <td>{{especialidade.nome}}</td>
              <td>
                <input type="button" class="button is-size-6 has-background-grey-light" 
                  @click="onClickPaginaDetalhar(especialidade.id)" value="Detalhar">
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

  import { Especialidade } from '@/model/especialidade.model';
  import { EspecialidadeClient } from '@/client/especialidade.client';

  export default class EspecialidadeView extends Vue {
    
    private pageRequest: PageRequest = new PageRequest()
    private pageResponse: PageResponse<Especialidade> = new PageResponse()

    private textSearch = ""
    private especialidedesList: Especialidade[] = []
    private especialidadeClient!: EspecialidadeClient

    public mounted():void {
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

    private onClickPesquisar():void {
      this.especialidadeClient.findByName(this.pageRequest,this.textSearch)
        .then(
          success => {
            this.pageResponse = success
            this.especialidedesList = this.pageResponse.content
          }, 
          error => console.log(error)
        )
    }

    private onClickPaginaCadastrar():void {
      this.$router.push({name: 'EspecialidadesForm', params: { model: 'cadastrar'}})
    }

    private onClickPaginaDetalhar(idEspecialidade: number):void {
      this.$router.push({name: 'EspecialidadesForm', params: {id: idEspecialidade, model: 'detalhar'}})
    }

  }
</script>