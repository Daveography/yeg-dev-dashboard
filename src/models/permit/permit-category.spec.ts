import { PermitCategory } from "src/app/models/permit/permit-category";

describe('PermitCategory', () => {

  it('should create permit category with valid value', () => {
    let categoryValue = 'Commercial Final';
    let categoryObj = new PermitCategory(categoryValue);
    expect(categoryObj.toString()).toEqual(categoryValue);
  });

  it('should throw on null value', () => {
    let categoryValue = null;
    let createFunc = function () { new PermitCategory(categoryValue) };
    expect(createFunc).toThrow();
  });

  // it('should throw on empty value', () => {
  //   let categoryValue = '';
  //   let createFunc = function () { new PermitCategory(categoryValue) };
  //   expect(createFunc).toThrow();
  // });
});
