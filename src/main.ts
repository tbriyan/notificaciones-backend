import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Notificaciones API')
    .setDescription('Api para casos de notificaciones unicas')
    .setVersion('1.0.0')
    .addTag('notificaciones')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000, () => {
    console.info("Servidor en el puerto:", process.env.PORT ?? 3000)
  });
}
bootstrap();
