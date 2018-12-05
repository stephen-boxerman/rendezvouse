<template>
    <div>
        <h4 class="display-1">Login...</h4>

        <p class="body-1">We are a bunch of nerds.</p>
    </div>
</template>

<script>
    //import Instructions from "../components/Instructions.vue";
    //import axios from "axios";
    /*
    export default {
        name: "SignUpPage",
        components: {
            Instructions
        },
        data: function() {
            return {
                valid: false,
                text_box1: "",
                text_box2: "",
                
                dialogHeader: "<no dialogHeader>",
                dialogText: "<no dialogText>",
                dialogVisible: false,
                
                rules: {
                    require: [
                        val => val.length > 0 || 'Required'
                    ]//,
                    //email: [
                    //val => /^\w+@\w+\.\w{2,}$/.test(val) || "Invalid e-mail"
                ],
                text_box1: [
                
                ]
                
                
                /*,
                password: [
                    val => /[A-Z]/.test(val) || "Need upper case letter",
                    val => /[a-z]/.test(val) || "Need lower case letter",
                    val => /\d/.test(val) || "Need digit",
                    val => val.length >= 8 || "Minimum 8 characters"
                ]/**//*
            }
        };
    },
    methods: {
        handleSubmit: function() {
            axios
                .post("/api/home", {
                    //text_box1: this.text_box1,
                    //text_box2: this.text_box2
                })
                .then(result => {
                    if (result.status === 200) {
                        if (result.data.ok) {
                            this.showDialog("Success", result.data.msge);
                        } else {
                            this.showDialog("Sorry", result.data.msge);
                        }
                    }
                })
                .catch(err => this.showDialog("Failed", err));
        },
        showDialog: function(header, text) {
            this.dialogHeader = header;
            this.dialogText = text;
            this.dialogVisible = true;
        },
        hideDialog: function() {
            this.dialogVisible = false;
            this.$router.push({ name: "home-page" });
        }
    }
};/**/
</script>
