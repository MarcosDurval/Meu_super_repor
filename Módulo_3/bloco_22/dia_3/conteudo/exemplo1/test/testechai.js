const {expect} = require("chai")

const calculaSituacao = require("../exemplo")

describe("teste com chai", () => {
  describe("teste reprovado", () => {
    it("primeiro teste", () => {
      const resposta = calculaSituacao(4)
      expect(resposta).equals("reprovado")
    });
  });
  
  describe("teste aprovado", () => {
    it("nota superior a 7", () => {
      const resultado = calculaSituacao(7);
      expect(resultado).to.be.equals("aprovado")
    })
  })
});