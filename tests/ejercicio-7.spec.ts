import 'mocha';
import {expect} from 'chai';
import {sumaNPoints} from '../src/ejercicio-7';
import {restaNPoints} from '../src/ejercicio-7';
import {productoNPoints} from '../src/ejercicio-7';
import {distNEuclidea} from '../src/ejercicio-7';


describe('Ejercicio 7 - Puntos n-dimensionales', () => {
  it('sumaNPoints([6, 4, 2], [3, 2, 1]) returns value [9, 6, 3]', () => {
    expect(sumaNPoints([6, 4, 2], [3, 2, 1])).to.be.deep.equal([9, 6, 3]);
  });

  it('restaNPoints([6, 4, 2], [3, 2, 1]) returns value [3, 2, 1]', () => {
    expect(restaNPoints([6, 4, 2], [3, 2, 1])).to.be.deep.equal([3, 2, 1]);
  });

  it('productoNPoints([6, 4, 2], 3) returns value [18, 12, 6]', () => {
    expect(productoNPoints([6, 4, 2], 3)).to.be.deep.equal([18, 12, 6]);
  });

  it('distNEuclidea([6, 4, 2], [3, 2, 1]) returns value 3,74', () => {
    expect(distNEuclidea([6, 4, 2], [3, 2, 1])).to.be.equal(3.74);
  });
});
