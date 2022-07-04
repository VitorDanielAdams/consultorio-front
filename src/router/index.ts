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
    path: '/medicos/form/:model/:id?',
    name: 'MedicosForm',
    component: MedicoForm,
    props: (router) => ({id: router.params.id, model: router.params.model})
  },
  {
    path: '/pacientes/form/:model/:id?',
    name: 'PacientesForm',
    component: PacienteForm,
    props: (router) => ({id: router.params.id, model: router.params.model})
  },
  {
    path: '/secretarias/form/:model/:id?',
    name: 'SecretariasForm',
    component: SecretariaForm,
    props: (router) => ({id: router.params.id, model: router.params.model})
  },
  {
    path: '/convenios/form/:model/:id?',
    name: 'ConveniosForm',
    component: ConvenioForm,
    props: (router) => ({id: router.params.id, model: router.params.model})
  },
  {
    path: '/especialidades/form/:model/:id?',
    name: 'EspecialidadesForm',
    component: EspecialidadeForm,
    props: (router) => ({id: router.params.id, model: router.params.model})
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
