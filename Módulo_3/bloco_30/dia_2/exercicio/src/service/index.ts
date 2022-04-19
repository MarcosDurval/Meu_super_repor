import { ZodError } from 'zod';
import Model from '../models';

export interface ServiceError {
  error: ZodError;
}
export default abstract class Service<T> {
  constructor(protected model:Model<T>) { }

  public create = async (obj:T):Promise<T | ServiceError> => 
    this.model.create(obj); 

  public readOne = async (id:string):Promise<T | null | ServiceError > => 
    this.model.readOne(id);

  public read = async (): Promise<T[] | ServiceError > => 
    this.model.read();

  public delete = async (id:string):Promise<T | null | ServiceError> =>
    this.model.delete(id); 
}