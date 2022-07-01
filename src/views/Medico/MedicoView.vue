<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Médicos</h3>
    <div class="columns">
      <div class="column is-8">
        <input class="input" type="text" placeholder="Pesquisar">
      </div>
      <div class="column is-3">
        <router-link to="/medicos/form">
          <button class="button has-background-primary">Cadastrar</button>
        </router-link>
      </div>
    </div>
    <div class="column is-11">
      <table class="table">
        <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>CRM</th>
              <th>Especialidade</th>
              <th>Valor Da Consulta</th>
              <th>%</th>
              <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="medico in this.medicosList" :key="medico.id">
              <td v-if="medico.ativo">
                <span class="icon has-text-success">
                  <i class="fas fa-check-square"></i>
                </span>
              </td>
              <td v-if="!medico.ativo">
                <span class="icon has-text-danger">
                  <i class="fas fa-square-xmark"></i>
                </span>
              </td>
              <td>{{medico.nome}}</td>
              <td>{{medico.crm}}</td>
              <td>{{medico.especialidade.nome}}</td>
              <td>{{medico.valorConsulta}}</td>
              <td>{{medico.porcenParticipacao}}</td>
              <td>
                <router-link to="/detalheMedico">
                  <button class="button has-background-grey-light">Detalhar</button>
                </router-link>
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

  import { Medico } from '@/model/medico.model';
  import { MedicoClient } from '@/client/medico.client';

  export default class MedicoView extends Vue {

    private pageRequest: PageRequest = new PageRequest()
    private pageResponse: PageResponse<Medico> = new PageResponse()

    private medicosList: Medico[] = []
    private medicoClient!: MedicoClient

    public mounted():void {
      this.medicoClient = new MedicoClient()
      this.listarMedicos()
    }

    private listarMedicos():void {
      this.medicoClient.findByFiltrosPaginado(this.pageRequest)
        .then(
          success => {
            this.pageResponse = success
            this.medicosList = this.pageResponse.content
          },
          error => console.log(error)
        )
    }

  }
</script>