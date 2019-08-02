import { PermitType } from "src/app/models/permit/permit-type";

describe('PermitType', () => {

  it('should create permit type with valid value', () => {
    let typeValue = '(01) Building - New';
    let typeObj = new PermitType(typeValue);
    expect(typeObj.toString()).toEqual(typeValue);
  });

  it('should throw on null value', () => {
    let typeValue = null;
    let createFunc = function () { new PermitType(typeValue) };
    expect(createFunc).toThrow();
  });

  // it('should throw on empty value', () => {
  //   let typeValue = '';
  //   let createFunc = function () { new PermitType(typeValue) };
  //   expect(createFunc).toThrow();
  // });
});
