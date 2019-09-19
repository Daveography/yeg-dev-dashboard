import { PermitZoning } from 'src/app/models/permit/permit-zoning';

describe('PermitZoning', () => {

  it('should create permit zone with valid value', () => {
    const zoneValue = 'DC2';
    const zoneObj = new PermitZoning(zoneValue);
    expect(zoneObj.toString()).toEqual(zoneValue);
  });

  // it('should throw on null value', () => {
  //   let zoneValue = null;
  //   let createFunc = function () { new PermitZoning(zoneValue) };
  //   expect(createFunc).toThrow();
  // });

  // it('should throw on empty value', () => {
  //   let zoneValue = '';
  //   let createFunc = function () { new PermitZoning(zoneValue) };
  //   expect(createFunc).toThrow();
  // });
});
