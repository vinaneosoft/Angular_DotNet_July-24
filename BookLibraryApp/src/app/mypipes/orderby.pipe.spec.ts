import { OrderbyPipe } from './mypipes/orderby.pipe';

describe('OrderbyPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderbyPipe();
    expect(pipe).toBeTruthy();
  });
});
