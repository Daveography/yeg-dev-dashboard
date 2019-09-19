import { PermitNeighbourhood } from 'src/app/models/permit/permit-neighbourhood';

describe('PermitNeighbourhood', () => {

  it('should create permit neighbourhood with valid value', () => {
    const nbhdValue = 'King Edward Park';
    const nbhdObj = new PermitNeighbourhood(nbhdValue);
    expect(nbhdObj.toString()).toEqual(nbhdValue);
  });

  // it('should throw on null value', () => {
  //   let nbhdValue = null;
  //   let createFunc = function () { new PermitNeighbourhood(nbhdValue) };
  //   expect(createFunc).toThrow();
  // });

  // it('should throw on empty value', () => {
  //   let nbhdValue = '';
  //   let createFunc = function () { new PermitNeighbourhood(nbhdValue) };
  //   expect(createFunc).toThrow();
  // });
});
