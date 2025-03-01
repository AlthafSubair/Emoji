import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Emoji Search API",
      version: "1.0.0",
      description: "API for searching emojis based on keywords",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
    components: {
      schemas:{
        Emoji:{
          type: "object",
          required: ["emoji", "keywords", "code"],
          properties: {
            emoji: {
              type: "string",
              example: "😀"
            },
            keywords: {
              type: "array",
              items: {
                type: "string"
              },
              example: ["happy", "smile"]
            },
            code: {
              type: "string",
              example: "****"
            }
          }

        }
      }
    }
  },
  apis: ["./routes/*.js"], // Path to your route files
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };
