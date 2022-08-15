import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

interface IConfig {
  port: string | number;
}

async function bootstrap(): Promise<IConfig> {
  const port = process.env.PORT || 3090;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  return {
    port,
  };
}

bootstrap().then(({ port }) => {
  console.log('server running at http://localhost:' + port + ' ');
});
