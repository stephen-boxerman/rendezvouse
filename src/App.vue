<template>
    <v-app>
        <nav-bar />
        <v-content>
            <v-container><router-view></router-view></v-container>
        </v-content>
        <!-- Because who needs a footer?
        <v-footer class="pa-3">
            <v-layout justify-center class="font-weight-thin">
                &copy; {{ new Date().getFullYear() }} Wry and Feckless Morale
                Boosters, LLC&mdash;A Firegraph Company
            </v-layout>
        </v-footer>
        -->
    </v-app>
</template>

<script>
//Just a few nifty adjustments...
import NavBar from "./components/NavBar.vue";

export default {
    components: {
        NavBar
    }
};

/*
export default {
        name: "App"
    }
/**/
</script>

<!--
<style scoped>

</style>
-->
