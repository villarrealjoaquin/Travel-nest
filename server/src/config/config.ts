import { ConfigProps } from "src/interfaces/config.interface";

export const config = (): ConfigProps => ({
  port: parseInt(process.env.PORT, 10) || 8080,
  api: {
    apiUrl: process.env.API_URL,
    httpTimeout: 1000,
  },
  mongodb: {
    database: {
      connectionString: process.env.MONGODB_CONNECTION || 'mongodb://localhost:27017',
      databaseName: process.env.NODE_ENV || 'local'
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'clave_secreta'
  }
});