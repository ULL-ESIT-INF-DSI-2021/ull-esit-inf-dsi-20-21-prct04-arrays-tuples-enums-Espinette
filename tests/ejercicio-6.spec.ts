import 'mocha';
import {expect} from 'chai';
import {sumaBiPoints} from '../src/ejercicio-6';
import {restaBiPoints} from '../src/ejercicio-6';
import {productoBiPoints} from '../src/ejercicio-6';
import {distBiEuclidea} from '../src/ejercicio-6';


describe('Ejercicio 6 - Puntos bi-dimensionales', () => {
  it('sumaPoints([6, 4], [3, 2]) returns value [9, 6]', () => {
    expect(sumaBiPoints([6, 4], [3, 2])).to.be.deep.equal([9, 6]);
  });

  it('restaPoints([6, 4], [3, 2]) returns value [3, 2]', () => {
    expect(restaBiPoints([6, 4], [3, 2])).to.be.deep.equal([3, 2]);
  });

  it('productoPoints([6, 4], 3) returns value [18, 12]', () => {
    expect(productoBiPoints([6, 4], 3)).to.be.deep.equal([18, 12]);
  });

  it('distEuclidea([6, 4], [3, 2]) returns value 3,61', () => {
    expect(distBiEuclidea([6, 4], [3, 2])).to.be.equal(3.61);
  });
});
