<template>
    <aside class="menu">
        <p class="menu-label has-text-left pl-5">
            <router-link to="/"> Home </router-link>
        </p>
       
        <Dropdown :data="Admin"/>
        <Dropdown :data="Pessoa"/>
        <Dropdown :data="Agenda"/>
        
    </aside>
   
</template>

<script lang="ts">
    import { Options,Vue } from 'vue-class-component';
    import Dropdown from './Dropdown.vue';

    @Options({
        components: {
            Dropdown,
        },
    })
    export default class MenuSide extends Vue {
        Agenda = {
            menu: "Agenda",
            item:
            {
                agendamento: {
                    name: "Agendamentos",
                    url: "/agendamentos"
                },
                historico: {
                    name: "Historico",
                    url: "/historicos"
                }
            },
        };

        Pessoa = {
            menu: "Pessoas",
            item: {
                medico: {
                    name: "Medicos",
                    url: "/medicos",
                },
                secretaria: {
                    name: "Secretarias",
                    url: "/secretarias",
                },
                paciente: {
                    name: "Pacientes",
                    url: "/pacientes",
                },
            },
        };

        Admin = {
            menu: "Administração",
            item: {
                convenio: {
                    name: "Convênio",
                    url: "/convenios",
                },
                especialidade: {
                    name: "Especialidade",
                    url: "/especialidades",
                },
            },
        };
    }
    
</script>
