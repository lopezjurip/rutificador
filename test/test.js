const chai = require('chai');
chai.use(require("chai-as-promised"));
const should = chai.should();

var rutificador = require('../index');

describe('rutificador', () => {
  it('should response with valid name', () => {
    rutificador({name: "Patricio López Juri"}).should.eventually.not.be.empty;
  });

  it('should fail with valid or not found name', () => {
    rutificador({name: "Lorem Ipsum"}).should.be.rejected;
  });

  it('should response with valid RUT', () => {
    rutificador({rut: "3427601-3"}).should.eventually.not.be.empty;
  });

  it('should fail with valid or not found RUT', () => {
    rutificador({rut: "12345678-1"}).should.be.rejected;
  });
});
