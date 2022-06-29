<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Especialidades</h3>
    <div class="columns">
      <div class="column is-6">
        <input class="input" type="text" placeholder="Pesquisar">
      </div>
      <div class="column is-3">
        <router-link to="/especialidadeCadastro"><button class="button has-background-primary">Cadastrar</button></router-link>
      </div>
    </div>
   
    <div class="column is-9">
      <table class="table">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody v-for="especialidade in this.especialidedesList" :key="especialidade.id">
            <tr>
                <td>{{especialidade.nome}}</td>
                <td><router-link to="/detalheEspecialidade"><button class="button is-size-6 has-background-info">Detalhar</button></router-link></td>
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

  }
</script>