import { PermitSubtype } from "src/app/models/permit/permit-subtype";

describe('PermitSubtype', () => {

  it('should create permit subtype with valid value', () => {
    let typeValue = '(01) Building - New';
    let typeObj = new PermitSubtype(typeValue);
    expect(typeObj.toString()).toEqual(typeValue);
  });

  it('should throw on null value', () => {
    let typeValue = null;
    let createFunc = function () { new PermitSubtype(typeValue) };
    expect(createFunc).toThrow();
  });

  // it('should throw on empty value', () => {
  //   let typeValue = '';
  //   let createFunc = function () { new PermitType(typeValue) };
  //   expect(createFunc).toThrow();
  // });
});
