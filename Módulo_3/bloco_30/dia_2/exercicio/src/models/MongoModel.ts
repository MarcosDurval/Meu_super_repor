import { Model as M, Document } from 'mongoose';
import Model from '.';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model:M<T & Document>) {}

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  readOne = async (id: string): Promise<T | null> =>
    this.model.findOne({ _id: id });
  
  read = async (): Promise<T[]> => this.model.find();

  update = async (): Promise<T[]> => {
    await this.model.updateMany(
      { $and: [{ format: 'CD' },
        { yearPublished: { $lte: 1997 } }] },
      { $set: { new: false } },
    );
    return this.model.find({
      $and: [{ yearPublished: { $lte: 1997 } }, { format: 'CD' }] });
  };

  delete = async (id: string): Promise<T | null> => 
    this.model.findOneAndDelete({ _id: id }); 
}

export default MongoModel;