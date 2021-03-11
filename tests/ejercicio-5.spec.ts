import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio-5';

describe('Ejercicio 5 - Factoría de multiplicaciones', () => {
  it('multiplyAll([2, 6, 8])(3) returns value [6, 18, 24]', () => {
    expect(multiplyAll([2, 6, 8])(3)).to.be.deep.equal([6, 18, 24]);
  });

  it('multiplyAll([3, 5, 7, 9])(2) returns value [6, 10, 14, 18]', () => {
    expect(multiplyAll([3, 5, 7, 9])(2)).to.be.deep.equal([6, 10, 14, 18]);
  });
});
