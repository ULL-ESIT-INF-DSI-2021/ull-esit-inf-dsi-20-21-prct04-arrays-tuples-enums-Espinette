import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejercicio-4';

describe('Ejercicio 4 - Mover los ceros al final', () => {
  it('moveZeros([1, 0, 1, 2, 0, 1, 3]) returns value [1, 1, 2, 1, 3, 0, 0]', () => {
    expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).to.be.deep.equal([1, 1, 2, 1, 3, 0, 0]);
  });

  it('moveZeros([4, 3, 0, 5, 0, 0, 1, 2]) returns value [4, 3, 5, 1, 2, 0, 0, 0]', () => {
    expect(moveZeros([4, 3, 0, 5, 0, 0, 1, 2])).to.be.deep.equal([4, 3, 5, 1, 2, 0, 0, 0]);
  });
});
