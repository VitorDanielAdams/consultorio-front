import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MedicoView from '../views/Medico/MedicoView.vue'
import PacienteView from '../views/Paciente/PacienteView.vue'
import SecretariaView from '../views/Secretaria/SecretariaView.vue'
import ConvenioView from '../views/Convenio/ConvenioView.vue'
import EspecialidadeView from '../views/Especialidade/EspecialidadeView.vue'
import AgendaView from '../views/Agenda/AgendaView.vue'
import HistoricoView from '../views/Historico/HistoricoView.vue'
import MedicoForm from '../views/Medico/MedicoForm.vue'
import PacienteForm from '../views/Paciente/PacienteForm.vue'
import SecretariaForm from '../views/Secretaria/SecretariaForm.vue'
import ConvenioForm from '../views/Convenio/ConvenioForm.vue'
import EspecialidadeForm from '../views/Especialidade/EspecialidadeForm.vue'
import ConvenioDetalhe from '../views/Convenio/ConvenioDetalhes.vue'
import EspecialidadeDetalhe from '../views/Especialidade/EspecialidadeDetalhes.vue'
import MedicoDetalhe from '../views/Medico/MedicoDetalhes.vue'
import PacienteDetalhe from '../views/Paciente/PacienteDetalhes.vue'
import SecretariaDetalhe from '../views/Secretaria/SecretariaDetalhes.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/medicos',
    name: 'Medicos',
    component: MedicoView,
  },
  {
    path: '/pacientes',
    name: 'Pacientes',
    component: PacienteView,
  },
  {
    path: '/secretarias',
    name: 'Secretaria',
    component: SecretariaView,
  },
  {
    path: '/convenios',
    name: 'Convênio',
    component: ConvenioView,
  },
  {
    path: '/especialidades',
    name: 'Especialidade',
    component: EspecialidadeView,
  },
  {
    path: '/agendamentos',
    name: 'Agendamento',
    component: AgendaView,
  },
  {
    path: '/historicos',
    name: 'Historico',
    component: HistoricoView,
  },
  {
    path: '/medicos/form',
    name: 'MedicosForm',
    component: MedicoForm,
  },
  {
    path: '/pacientes/form',
    name: 'PacientesForm',
    component: PacienteForm,
  },
  {
    path: '/secretarias/form',
    name: 'SecretariasForm',
    component: SecretariaForm,
  },
  {
    path: '/convenios/form',
    name: 'ConveniosForm',
    component: ConvenioForm,
  },
  {
    path: '/especialidades/form/:model/:id?',
    name: 'EspecialidadesForm',
    component: EspecialidadeForm,
    props: (router) => ({id: router.params.id, model: router.params.model})
  },
  {
    path: '/convenios/form/:model/:id',
    name: 'DetalheConvenio',
    component: ConvenioDetalhe,
    props: { defualt: true}
  },
  {
    path: '/especialidades/form/:model/:id',
    name: 'DetalheEspecialidade',
    component: EspecialidadeDetalhe,
  },
  {
    path: '/medicos/form/:model/:id',
    name: 'DetalheMedico',
    component: MedicoDetalhe,
    props: { defualt: true}
  },
  {
    path: '/pacientes/form/:model/:id',
    name: 'DetalhePaciente',
    component: PacienteDetalhe,
    props: { defualt: true}
  },
  {
    path: '/secretarias/form/:model/:id',
    name: 'DetalheSecretaria',
    component: SecretariaDetalhe,
    props: { defualt: true}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
