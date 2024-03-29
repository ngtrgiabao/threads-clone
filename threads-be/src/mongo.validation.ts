import { ArgumentsHost, Catch, RpcExceptionFilter } from "@nestjs/common";
import { Error } from "mongoose";
import ValidationError = Error;

@Catch(ValidationError)
export class ValidationErrorFilter implements RpcExceptionFilter {
  catch(exception: ValidationError, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = 400;
    const message = exception;

    return response.status(status).json({
      statusCode: status,
      message
    })
  }
}