<template>
    <div>
        <h4 class="display-1">Login</h4>
        
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
