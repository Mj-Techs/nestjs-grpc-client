import {
  Controller,
  Post,
  Body,
  OnModuleInit,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { IGrpcService, studentBody, updateStudent } from './grpc.interface';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Controller('students')
export class AppController implements OnModuleInit {
  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService =
      this.client.getService<IGrpcService>('StudentController');
  }
  @Get(':id')
  getStudent(@Param() params): Observable<any> {
    return this.grpcService.getStudent({ id: params.id });
  }

  @Post()
  createStudent(@Body() body: studentBody): Observable<any> {
    return this.grpcService.createStudent(body);
  }

  @Put(':id')
  updateStudent(@Body() body: updateStudent, @Param() params): Observable<any> {
    return this.grpcService.updateStudent(body);
  }

  @Delete(':id')
  removeStudent(@Param() params): Observable<any> {
    return this.grpcService.removeStudent({ id: params.id });
  }
}
