import "reflect-metadata"
import { DataSource } from "typeorm"
import config from "../config/ormconfig"

export const dbCreateConnection = new DataSource(config);