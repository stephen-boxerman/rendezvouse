<template>
    <v-toolbar dark color="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <router-link v-bind:to="{ name: 'home-page' }">
            <v-toolbar-title class="white--text">
                Single Page App
            </v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>

        <!-- <v-btn flat v-bind:to="{ name: 'sign-up' }">Sign Up</v-btn> -->

        

	<v-btn flat v-bind:to="{ name: 'login' }">Login</v-btn>
	<!-- <v-btn flat v-bind:to="{ name: 'my-teams' }">My Teams</v-btn> -->
	<!-- <v-btn flat v-bind:to="{ name: 'team-page' }">Team</v-btn> -->

	
	<v-btn flat v-bind:to="{ name: 'about-us' }">About Us</v-btn>
	<v-btn flat v-bind:to="{ name: 'schedule-page' }">Schedule</v-btn>
	
    <v-menu offset-y>
        <v-btn flat slot="activator">
            <span>My Teams</span>
            <v-icon dark>arrow_drop_down</v-icon>
        </v-btn>
        <v-list>
            <v-list-tile v-bind:to="{ name: 'team-page' }">
                <v-list-tile-title>Team 1</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-bind:to="{ name: 'sign-up' }">
                <v-list-tile-title>Team 2</v-list-tile-title>
            </v-list-tile>
            
        </v-list>
    </v-menu>
	
	<!--
        <v-menu offset-y>
            <v-btn flat slot="activator">
                <span>Admin</span>
                <v-icon dark>arrow_drop_down</v-icon>
            </v-btn>

            <v-list>
                <v-list-tile v-bind:to="{ name: 'accounts' }">
                    <v-list-tile-title>Accounts</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu> 
	-->
    </v-toolbar>
</template>
