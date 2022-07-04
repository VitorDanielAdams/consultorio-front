<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Pacientes</h3>
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
              <th>Tipo Atendimento</th>
              <th>Cartao</th>
              <th>Vencimento</th>
              <th>Convênio</th>
              <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="paciente in this.pacientesList" :key="paciente.id">
              <td v-if="paciente.ativo">
                <span class="icon has-text-success">
                  <i class="fas fa-check-square"></i>
                </span>
              </td>
              <td v-if="!paciente.ativo">
                <span class="icon has-text-danger">
                  <i class="fas fa-square-xmark"></i>
                </span>
              </td>
              <td>{{paciente.nome}}</td>
              <td>{{paciente.tipoAtendimento}}</td>
              <td>{{paciente.numeroCartaoConvenio}}</td>
              <td>{{paciente.dataVencimento}}</td>
              <td>{{paciente.convenio.nome}}</td>
              <td>
                <input type="button" class="button is-size-6 has-background-grey-light" 
                  @click="onClickPaginaDetalhar(paciente.id)" value="Detalhar">
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

  import { Paciente } from '@/model/paciente.model';
  import { PacienteClient } from '@/client/paciente.client';

  export default class PacienteView extends Vue {

    private pageRequest: PageRequest = new PageRequest()
    private pageResponse: PageResponse<Paciente> = new PageResponse()

    private pacientesList: Paciente[] = []
    private pacienteClient!: PacienteClient

    public mounted():void {
      this.pacienteClient = new PacienteClient()
      this.listarPacientes()
    }

    private listarPacientes():void {
      this.pacienteClient.findByFiltrosPaginado(this.pageRequest)
        .then(
          success => {
            this.pageResponse = success
            this.pacientesList = this.pageResponse.content
          },
          error => console.log(error)
        )
    }

    private onClickPaginaCadastrar():void {
      this.$router.push({name: 'PacientesForm', params: { model: 'cadastrar'}})
    }

    private onClickPaginaDetalhar(id: number):void {
      this.$router.push({name: 'PacientesForm', params: {id: id, model: 'detalhar'}})
    }

  }
</script>