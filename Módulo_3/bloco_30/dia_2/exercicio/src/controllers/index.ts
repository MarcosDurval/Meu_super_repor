import { ZodError } from 'zod';
import Service from '../service';

// injeção de dependencias
export interface ControllerError {
  error: ZodError;
}
export default abstract class Controller<T> {
  constructor(protected service: Service<T>) { }

  create = async (obj: T): Promise<T | null | ControllerError> =>
    this.service.create(obj);

  readOne = async (id: string): Promise<T | null | ControllerError> => 
    this.service.readOne(id);

  read = (): Promise<T[]> =>  
    this.service.read();

  // update = async (): Promise<T[]> =>
  //   this.service. 

  delete = async (id: string): Promise<T | null | ControllerError> =>
    this.service.delete(id);
}