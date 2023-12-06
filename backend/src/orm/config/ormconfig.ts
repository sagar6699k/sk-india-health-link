import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "sagar6699",
    database: "testDB",
    synchronize: true,
    logging: true,
    entities: ["src/entities/**/*.{ts,js}"]
}

export = config;