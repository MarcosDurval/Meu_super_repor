export default interface IPlant {
  id: string,
  breed: string,
  needsSun: Boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}

export interface IOpsInfo { createdPlants: number }

export interface ModelCrud<T>{
  getAll():Promise< T[]> 
 
  getById(id:string):void

  deleteById(id:string):void

  edit(plantId:string,newValue:T):Promise<T> | null
}
