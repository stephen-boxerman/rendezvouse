<template>
    <div>
        <h4 class="display-1">Login</h4>
<<<<<<< HEAD
        
        <instructions details="Login with valid Email and Password." />
        
        <v-form v-model="valid">
            <v-text-field
                v-model="email"
                v-bind:rules="rules.email"
                label="Email">
            </v-text-field>
            <v-text-field
            v-model="password"
            v-bind:rules="rules.required"
            label="Password">
            </v-text-field>

            <v-btn v-bind:disabled="!valid" v-on:click="handleSubmit">
                Log in
            </v-btn>

=======

        <instructions details="Enter your email and password" />

        <v-form v-model="valid">
            <v-text-field
                    v-model="email"
                    v-bind:rules="rules.email"
                    label="Email"
            ></v-text-field>
            <v-text-field
                    v-model="password"
                    v-bind:rules="rules.required"
                    label="Password"
            ></v-text-field>
            <v-btn v-bind:disabled="!valid" v-on:click="handleSubmit"
            >Login
            </v-btn>
>>>>>>> d4b0584f81c49b2ac548d2053b0b47b8958517b3
        </v-form>

        <div class="text-xs-center">
            <v-dialog v-model="dialogVisible" width="500">
                <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title>
                        {{ dialogHeader }}
                    </v-card-title>

                    <v-card-text> {{ dialogText }} </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" flat v-on:click="hideDialog"
                        >Okay</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
    import Instructions from "../components/Instructions.vue";
    import axios from "axios";

<<<<<<< HEAD
    export default
    {
      name: "LogIn",
      components: { Instructions },
      data: function()
      {
        return {
          valid: false,
          email: "",
          password: "",

          dialogHeader: "<no dialogHeader>",
          dialogText: "<no dialogText>",
          dialogVisible: false,


          //v-bind
          rules:
            {
                required:
                [
                  val => val.length > 0 || 'Required'
                ],

                email:
                [
                  val => /^\w+@\w+\.\w{2,}$/.test(val) || "Invalid e-mail"
                ]
            }
        };
      },
      methods:
        {
          handleSubmit: function()
          {
            axios.post("/api/login",
                {
                  email: this.email,
                  password: this.password
                })
              .then(response =>
              {
                if(response.status === 200)
                {
                  if(response.data.ok)
                  {
                    this.showDialog("Success", response.data.msge);
                  }
                  else
                  {
                    this.showDialog("Sorry", response.data.msge)
                  }
                }
              })
              .catch(err => this.showDialog("Failed", err))
          },
          showDialog: function(header, text)
          {
=======
    export default {
        name: "SignUpPage",
        components: {
            Instructions
        },
        data: function() {
            return {
                valid: false,
                email: this.email,
                password: this.password,

                dialogHeader: "<no dialogHeader>",
                dialogText: "<no dialogText>",
                dialogVisible: false,
                
                rules: {
                    require: [
                        val => val.length > 0 || 'Required'
                    ],
                    email: [
                    val => /^\w+@\w+\.\w{2,}$/.test(val) || "Invalid e-mail"
                ],
                password: [
                    val => /[A-Z]/.test(val) || "Need upper case letter",
                    val => /[a-z]/.test(val) || "Need lower case letter",
                    val => /\d/.test(val) || "Need digit",
                    val => val.length >= 8 || "Minimum 8 characters"
                ]
            }
        };
    },
    methods: {
      handleSubmit: function()
      {
        axios.get("/api/login",
          {
            email: this.email,
            password: this.password
          })
          .then(result =>
          {
            if(result.status === 200)
            {
              if(result.data.ok)
              {
                this.showDialog("Succsess", result.data.msge)
              }
              else
              {
                this.showDialog("Sorry", result.data.msge)
              }
            }
          })
          .catch(err => this.showDialog("Failed", err))
      },
        showDialog: function(header, text) {
>>>>>>> d4b0584f81c49b2ac548d2053b0b47b8958517b3
            this.dialogHeader = header;
            this.dialogText = text;
            this.dialogVisible = true;
          },
          hideDialog: function()
          {
            this.dialogVisible = false;
            this.$router.push({name: "home-page"})
          }
        }
    }
</script>
