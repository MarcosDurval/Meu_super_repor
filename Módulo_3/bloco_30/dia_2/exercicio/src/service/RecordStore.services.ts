import Service from '.';
import RecordStoreModel from '../models/RecordStore.models';
import RecordStore from '../interface/RecordStore';

export default class RecordStoreService extends Service<RecordStore> {
  constructor(model = new RecordStoreModel()) {
    super(model);
  }
}