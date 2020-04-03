import { PermitAddress } from 'src/app/models/permit/permit-address';

describe('PermitAddress', () => {

  it('should create permit address with valid value', () => {
    const addrValue = '123 mylane nw';
    const addrObj = new PermitAddress(addrValue);
    expect(addrObj.toString()).toEqual(addrValue);
  });

  // it('should throw on null value', () => {
  //   let addrValue = null;
  //   let createFunc = function () { new PermitAddress(addrValue) };
  //   expect(createFunc).toThrow();
  // });

  // it('should throw on empty value', () => {
  //   let addrValue = '';
  //   let createFunc = function () { new PermitAddress(addrValue) };
  //   expect(createFunc).toThrow();
  // });
});
