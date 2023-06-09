import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./provider/database.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
