import 'mocha';
import {expect} from 'chai';
import {agent} from '../src/ejercicio-8';


describe('Ejercicio 8 - El agente', () => {
  it('agent(10, 10, [1, 3], [3, 5]) returns value [ Este, Norte, Este, Norte ]', () => {
    expect(agent(10, 10, [1, 3], [3, 5])).to.be.deep.equal([`Este`, `Norte`, `Este`, `Norte`]);
  });
  it('agent(10, 10, [4, 2], [1, 3]) returns value [Oeste, Norte]', () => {
    expect(agent(10, 10, [4, 2], [1, 3])).to.be.deep.equal([`Oeste`, `Norte`]);
  });
});
