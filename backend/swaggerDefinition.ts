export default {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Cheeseria API Spec",
      version: "1.0.0",
      description: "Simple CRUD API to retrieve information about cheeses",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
        description: "Local Server",
      },
    ],
  },
};
