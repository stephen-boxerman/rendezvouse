////////////////////////////////////////////////
//------------Stephen Boxerman----------------//
//--------------Cordell King------------------//
//----------------COS 243---------------------//
//--------------12/04/2018--------------------//
////////////////////////////////////////////////

// Standard Node modules
const Path = require("path");

// Knex
const knex = require("knex")({
    client: "pg",
    connection: {
        host: "faraday.cse.taylor.edu",
        database: "stephen_boxerman",
        user: "stephen_boxerman",
        password: "zuquceri"
    }
});

// Hapi
const Joi = require("joi"); // Input validation
const Hapi = require("hapi"); // Server

const server = Hapi.server({
    host: "localhost",
    port: 3000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, "dist")
        }
    }
});

async function init() {
    // Show routes at startup.
    await server.register(require("blipp"));

    // Output logging information.
    await server.register({
        plugin: require("hapi-pino"),
        options: {
            prettyPrint: true
        }
    });

    // Configure static file service.
    await server.register(require("inert"));

    // Configure routes.
    server.route([
	/*
      {
          method: "GET",
          path: "/api/home",
          config: {
              description: "Ye Olde Home Page",
              validate: {
                  payload: {
                      data: Joi.string().required()
                  }
              }
          },
          handler: async (request, h) => {

          }
      }, */
      {
        method: "POST",
        path: "/api/login",
        config:
          {
            description: "Login to view your teams",
            validate:
              {
                payload:
                  {
                    email: Joi.string()
                      .email()
                      .required(),
                    password: Joi.string().required()
                  
                  }
              }
          },
        handler: async (request, h) => {
          let resultSet = await knex("members")
            .select()
            .where("email", request.payload.email);

          if(resultSet.length === 0)
          {
            return {
              ok: false,
              msge: `The user at '${request.payload.email}' does not exist`
            }
          }

          let result = knex("members")
            .select("password")
            .where("email", request.payload.email);

          if(result.rowCount === 2)
          {
            //console.log(result)
            return {
              ok: true,
              msge: `'${result}'`
              //msge: `Successfully logged in as '${request.payload.email}'`
            }
          } else
          {
            return {
              ok: false,
              //msge: `No Data received for '${request.payload.email}'`
              msge: `No Data received for '${result.rowCount}'`
            }
          }
          /*
          {
            return {
              ok: true,
              msge: `Successfully logged in as '${request.payload.email}'`
            }
          }
          else
          {
            return {
              ok: false,
              msge: `Incorrect password for '${request.payload.email}'`
            }
          }/**/
        }
      },
      {
        method: "POST",
        path: "/api/new-team",
        config:
              {
              description: "Created new team",
              validate:
                    {
                      payload:
                      {
                        data: Joi.string().required()
                      }
                    }
              },
        handler: async (request, h) =>
        {
          let resultSet = await knex("teams")
            .select()
            .where("team_name", request.payload.teamName);
          if(resultSet.length > 0)
          {
            return {
              ok: false,
              msge: `The team '${request.payload.teamName}' already exists`
            }
<<<<<<< HEAD
          }

          let result = await knex("teams").insert
          ({
            owner: Vue.$root.currentUser,
            team_name: request.payload.teamName
          });

          {
            return {
              ok: true,
              msge: `Team '${request.payload.teamName}' has been created`
            };

          }
        }
      }
=======
        },
        {
          method: "GET",
          path: "/api/login",
          config:
            {
                description: "Rendezvous login page",
                validate:
                {
                    payload:
                      {
                          data: Joi.string().required()
                      }
                }
            },
          handler: async (results, h) =>
            {
                let resultSet = await knex("members")
                  .select()
                  .where("email", results.payload.email);

                if(resultSet.lenth === 0 )
                {
                    return {
                      ok: false,
                      msge: `'${results.payload.email}' does not exist`
                    }
                }

                let result = await knex("members")
                  .select("password")
                  .where("email", results.payload.email);

                if(result.rowCount !== 1)
                {
                    return {
                        ok: false,
                        msge: "There was a problem logging in."
                    }
                }
                else
                {
                    if(result === results.paylaod.password)
                    {
                        return {
                            ok: true,
                            msge: `${results.payload.password} successfully logged in.`
                        }
                    }
                    else
                    {
                        return {
                            ok: false,
                            msge: "Passwords do not match.  Please try again"
                        }
                    }
                }
            }

        }

>>>>>>> d4b0584f81c49b2ac548d2053b0b47b8958517b3
    ]);
    //These routs need to change to reflect our page structure --Stephen 12/4
    /*server.route([
        {
            method: "POST",
            path: "/api/accounts",
            config: {
                description: "Sign up for an account",
                validate: {
                    payload: {
                        firstName: Joi.string().required(),
                        lastName: Joi.string().required(),
                        email: Joi.string()
                            .email()
                            .required(),
                        password: Joi.string().required()
                    }
                }
            },
            handler: async (request, h) => {
                let resultSet = await knex("accounts")
                    .select()
                    .where("email", request.payload.email);
                if (resultSet.length > 0) {
                    return {
                        ok: false,
                        msge: `The account '${request.payload.email}' is already in use`
                    };
                }
                let result = await knex("accounts").insert({
                    firstname: request.payload.firstName,
                    lastname: request.payload.lastName,
                    email: request.payload.email,
                    password: request.payload.password
                });
                if (result.rowCount === 1) {
                    return {
                        ok: true,
                        msge: `Created account '${request.payload.email}'`
                    };
                } else {
                    return {
                        ok: false,
                        msge: `Couldn't add '${
                            request.payload.email
                        }' to the database`
                    };
                }
            }
        },
        {
            method: "GET",
            path: "/api/accounts",
            config: {
                description: "Retrieve all accounts"
            },
            handler: async (request, h) => {
                return knex("accounts").select("email", "firstname", "lastname");
            }
        },
        {
            method: "GET",
            path: "/{param*}",
            config: {
                description: "Production Application"
            },
            handler: {
                directory: {
                    path: ".",
                    redirectToSlash: true,
                    index: true
                }
            }
        }
    ]);*/

    // Start the server.
    await server.start();
    server.logger().info(`Server running at ${server.info.uri}`);
}

process.on("unhandledRejection", err => {
    server.logger().error(err);
    process.exit(1);
});

// Go!
init();
