import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MedicoView from '../views/Medico/MedicoView.vue'
import PacienteView from '../views/Paciente/PacienteView.vue'
import SecretariaView from '../views/Secretaria/SecretariaView.vue'
import ConvenioView from '../views/Convenio/ConvenioView.vue'
import EspecialidadeView from '../views/Especialidade/EspecialidadeView.vue'
import AgendaView from '../views/Agenda/AgendaView.vue'
import HistoricoView from '../views/Historico/HistoricoView.vue'
import MedicoCadastro from '../views/Medico/MedicoCadastro.vue'
import PacienteCadastro from '../views/Paciente/PacienteCadastro.vue'
import SecretariaCadastro from '../views/Secretaria/SecretariaCadastro.vue'
import ConvenioCadastro from '../views/Convenio/ConvenioCadastro.vue'
import EspecialidadeCadastro from '../views/Especialidade/EspecialidadeCadastro.vue'
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
    path: '/medicoCadastro',
    name: 'CadastroMedicos',
    component: MedicoCadastro,
  },
  {
    path: '/pacienteCadastro',
    name: 'CadastroPacientes',
    component: PacienteCadastro,
  },
  {
    path: '/secretariaCadastro',
    name: 'CadastroSecretarias',
    component: SecretariaCadastro,
  },
  {
    path: '/convenioCadastro',
    name: 'CadastroConvenios',
    component: ConvenioCadastro,
  },
  {
    path: '/especialidadeCadastro',
    name: 'CadastroEspecialidades',
    component: EspecialidadeCadastro,
  },
  {
    path: '/detalheConvenio',
    name: 'DetalheConvenio',
    component: ConvenioDetalhe,
  },
  {
    path: '/detalheEspecialidade',
    name: 'DetalheEspecialidade',
    component: EspecialidadeDetalhe,
  },
  {
    path: '/detalheMedico',
    name: 'DetalheMedico',
    component: MedicoDetalhe,
  },
  {
    path: '/detalhePaciente',
    name: 'DetalhePaciente',
    component: PacienteDetalhe,
  },
  {
    path: '/detalheSecretaria',
    name: 'DetalheSecretaria',
    component: SecretariaDetalhe,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
