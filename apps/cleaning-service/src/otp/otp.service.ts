import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OtpServiceBase } from "./base/otp.service.base";

@Injectable()
export class OtpService extends OtpServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
