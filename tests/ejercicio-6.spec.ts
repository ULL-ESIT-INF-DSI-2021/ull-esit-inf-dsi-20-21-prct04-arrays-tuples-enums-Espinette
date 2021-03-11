import 'mocha';
import {expect} from 'chai';
import {sumaPoints} from '../src/ejercicio-6';
import {restaPoints} from '../src/ejercicio-6';
import {productoPoints} from '../src/ejercicio-6';
import {distEuclidea} from '../src/ejercicio-6';


describe('Ejercicio 6 - Puntos bi-dimensionales', () => {
  it('sumaPoints([6, 4], [3, 2]) returns value [9, 6]', () => {
    expect(sumaPoints([6, 4], [3, 2])).to.be.equal(10);
  });

  it('restaPoints([6, 4], [3, 2]) returns value [3, 2]', () => {
    expect(restaPoints([6, 4], [3, 2])).to.be.equal([3, 2]);
  });

  it('productoPoints([6, 4], 3) returns value [9, 6]', () => {
    expect(productoPoints([6, 4], 3)).to.be.equal([18, 12]);
  });

  it('distEuclidea([6, 4], [3, 2]) returns value [9, 6]', () => {
    expect(distEuclidea([6, 4], [3, 2])).to.be.equal([9, 6]);
  });
});
