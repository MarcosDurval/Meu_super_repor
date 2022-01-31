const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
 
});

describe('testando busca por id',() => {

  before(() => {
    const execute = [[]]
    sinon.stub(connection,'execute').resolves(execute)
  })
  after(() => {
    connection.execute.restore()
  })
  describe('testando um id inválido',()=>{
    it('esperando o valor null', async() => {
      const response = await MoviesModel.getById(1);
      expect(response).to.be.null
    })
  })
  describe('testando com id válido', ()=> {
    before(() => {
      const result = {
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      }
      sinon.stub(MoviesModel,'getById').resolves(result)
    })
    after(() => {
      MoviesModel.getById.restore();
    })
    it('esperando um object',async() => {
    const response = await MoviesModel.getById(1)
    expect(response).to.be.an('object')
    })
    it('esperando que o objeto tenha as chaves corretas',async ()=> {
      const response = await MoviesModel.getById(1)
      expect(response).to.include.all.keys('id','title','directedBy','releaseYear')
    })
  })
})

