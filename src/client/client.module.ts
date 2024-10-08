import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { CuentasModule } from 'src/resource/cuentas/cuentas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuenta } from 'src/resource/cuentas/entities/cuenta.entity';
import { TransaccionModule } from 'src/common/transaction/transaccion.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cuenta])
    ,CuentasModule, TransaccionModule ],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
