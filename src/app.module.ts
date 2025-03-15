import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { NotificacionModule } from './notificacion/notificacion.module';

@Module({
  imports: [ConfigModule.forRoot(), NotificacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
