import { PermitClass } from "src/app/models/permit/permit-class";

describe('PermitClass', () => {

  it('should create permit class with valid value', () => {
    let classValue = 'Class A';
    let classObj = new PermitClass(classValue);
    expect(classObj.toString()).toEqual(classValue);
  });

  it('should throw on null value', () => {
    let classValue = null;
    let createFunc = function () { new PermitClass(classValue) };
    expect(createFunc).toThrow();
  });

  // it('should throw on empty value', () => {
  //   let classValue = '';
  //   let createFunc = function () { new PermitClass(classValue) };
  //   expect(createFunc).toThrow();
  // });
});
