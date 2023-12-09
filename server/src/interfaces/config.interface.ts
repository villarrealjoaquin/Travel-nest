interface ApiConfigProps {
  apiUrl: string
  httpTimeout: number
}

interface MongodbConfigProps {
  connectionString: string
  databaseName: string
}

export interface ConfigProps {
  port: number
  api: ApiConfigProps
  mongodb: {
    database: MongodbConfigProps
  }
  jwt: {
    secret:string
  }
  JWT_ACCESS_SECRET:string
  JWT_REFRESH_SECRET:string
}