import { ZodError } from 'zod';
import Controller from '.';
import RecordStoreService from '../service/RecordStore.services';
import RecordStore, { RecordStoreSchema } from '../interface/RecordStore';

export interface ControllerError {
  error: ZodError;
}
export default class RecordStoreController extends Controller<RecordStore> {
  constructor(controller = new RecordStoreService()) {
    super(controller);
  }

  create = async (obj: RecordStore):
  Promise<RecordStore | null | ControllerError> => {
    const isValid = RecordStoreSchema.safeParse(obj);
    if (!isValid.success) {
      throw isValid.error;
    }
    return this.service.create(obj);
  };
}