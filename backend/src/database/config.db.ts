import { ConfigModule, ConfigService } from "@nestjs/config"
import { DataSource, DataSourceOptions } from "typeorm";

ConfigModule.forRoot({
    envFilePath: '.env',
})

const envConfigService = new ConfigService();

export const ConfigDatabase: DataSourceOptions = { 
    type: 'mysql',
    host: envConfigService.get<string>('DB_Host'),
    port: parseInt(process.env.DB_Port, 10),
    username: envConfigService.get<string>('DB_Username'),
    password: envConfigService.get<string>('DB_Password'),
    database: envConfigService.get<string>('DB_Name'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: false

};

export const BackendDS = new DataSource(ConfigDatabase);