import { Schema, model as createModel, Document } from 'mongoose';
import RecordStore from '../interface/RecordStore';
import MongoModel from './MongoModel';

interface RecordStoreDocument extends RecordStore, Document { }

const RecordSchema = new Schema <RecordStoreDocument>({});

export default class RecordStoreModel extends MongoModel<RecordStore> {
  constructor(model = createModel('RecordStore', RecordSchema)) {
    super(model);
  }
}