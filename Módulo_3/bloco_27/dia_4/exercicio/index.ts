import express,{Request,Response} from "express";
import bodyParser from "body-parser";
import Plants from "./Plants";

const app = express()
app.use(bodyParser.json())

app.get('/plants', async(req:Request,res:Response) => {
  const allPlants = await new Plants().getAll()
  return res.status(200).json(allPlants)
})

app.get('/plants:id',async(req:Request,res:Response) => {
  const { id } = req.params
  const plant = await new Plants().getById(id)
  return res.status(200).json(plant)
})

app.delete('/plants:id', async(req:Request,res:Response) => {
  const { id } = req.params
  const plant = await new Plants().deleteById(id)
  return res.status(200).json(plant) 
})

app.post("/plant", async(req:Request,res:Response) => {
  const plant = await new Plants().savePlant(req.body)
  return res.status(201).json(plant) 
})

app.post('/plant/:id',async(req:Request,res:Response) => {

})

app.listen(3000, () => {
  console.log('ouvindo na porta 3k')
})
