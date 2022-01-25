const { expect } = require('chai');
const sinon = require('sinon');
const {
  describe, it, before, after,
} = require('mocha');
const MoviesService = require('../../services/movieService');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no DB', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};
    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });
    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });
  before(() => {
    sinon.stub(MoviesModel, 'create')
      .resolves({ id: 1 });
  });
  after(() => {
    MoviesModel.create.restore();
  });// restaura a função modificada
  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});
