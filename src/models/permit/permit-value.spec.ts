import { PermitValue } from "src/app/models/permit/permit-value";

describe('PermitValue', () => {

  it('should create permit value with valid value', () => {
    let valueValue = 1000000;
    let valueObj = new PermitValue(valueValue);
    expect(valueObj.Value).toEqual(valueValue);
  });

  it('should throw on null value', () => {
    let valueValue = null;
    let createFunc = function () { new PermitValue(valueValue) };
    expect(createFunc).toThrow();
  });

  it('should throw on negative value', () => {
    let valueValue = -1;
    let createFunc = function () { new PermitValue(valueValue) };
    expect(createFunc).toThrow();
  });

  it('should return localized dollar value to en-CA on toString', () => {
    let valueValue = 1234567;
    let valueObj = new PermitValue(valueValue);
    expect(valueObj.toString()).toEqual('$1,234,567');
  });
});
