import Model from '../models';

export default abstract class Service<T> {
  constructor(protected model:Model<T>) { }

  public create = async (obj:T):Promise<T> => 
    this.model.create(obj); 

  public readOne = async (id:string):Promise<T | null > => 
    this.model.readOne(id);

  public read = async (): Promise<T[] > => 
    this.model.read();

  public delete = async (id:string):Promise<T | null > =>
    this.model.delete(id); 
}