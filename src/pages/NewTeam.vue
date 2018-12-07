<template>
    <div>
    
        <h4 class="display-1">New Team</h4>
        
        <instructions details="Create a new Team." /> 
        
        <v-form v-model="valid">
            <v-text-field
                v-model="teamName"
                v-bind:rules="rules.required"
                label="Team Name"
            ></v-text-field>
            <v-btn v-bind:disables="!valid" v-on:click="handleSubmit">Create Team</v-btn>
        </v-form>
		
        <div>
            <v-dialog v-model="dialogVisible" width="500">
                <v-card>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>

import Instructions from "../components/Instructions.vue";
import axios from "axios";

export default {
    name: "TeamCreationPage",
    components: {
        Instructions
    },
    data: function() {
        return {
            valid: false,
            //v-model
            teamName: "",
            
            dialogVisible: false,
            
            /*
            dialogHeader: "<no dialogHeader>",
            dialogText: "<no dialogText>",
            
            */
            
            //v-bind
            rules: {
                required: [
                    val => val.length > 0 || 'Required'
                ]
            }
        };
    },
    methods: {
        handleSubmit: function () {
            axios.post("/api/new-team", {
                teamName: this.teamName
            })
            /*
            .then(result => {
                if (result.status === 200) {
                    if (result.data.ok) {
                        this.showDialog("Success", result.data.msge);
                    } else {
                        this.showDialog("Sorry", result.data.msge);
                    }
                }
            })
            .catch(err => this.showDialog("Failed", err)); */
        }
    }
};

</script>
