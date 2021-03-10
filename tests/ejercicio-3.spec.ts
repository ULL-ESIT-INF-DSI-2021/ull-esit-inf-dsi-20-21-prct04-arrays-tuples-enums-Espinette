import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejercicio-3';

describe('Ejercicio 3 - Calcular la media y concatenar cadenas', () => {
  it('meanAndConcatenate(["u", 6, "d", 1, "i", "w", 6, "s", "t", 4, "a", 6, "g", 1, 2, "w", 8, "o", 2, 0]) returns value [3.6, "udiwstagwo"]', () => {
    expect(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0])).to.be.deep.equal([3.6, "udiwstagwo"]);
  });

  it('meanAndConcatenate([`h`, `o`, 5, `l`, 10, 7, `a`, 2]) returns value [6, `hola`]', () => {
    expect(meanAndConcatenate([`h`, `o`, 5, `l`, 10, 7, `a`, 2])).to.be.deep.equal([6, `hola`]);
  });
});
