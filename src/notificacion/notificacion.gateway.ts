import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({cors: true})
export class NotificacionGateway{
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}