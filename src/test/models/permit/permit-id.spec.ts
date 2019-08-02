import { PermitId } from "src/app/models/permit/permit-id";

describe('PermitId', () => {

  it('should create permit id with valid value', () => {
    let idValue = '0-17201627628412';
    let idObj = new PermitId(idValue);
    expect(idObj.toString()).toEqual(idValue);
  });

  it('should throw on null value', () => {
    let idValue = null;
    let createFunc = function () { new PermitId(idValue) };
    expect(createFunc).toThrow();
  });

  it('should throw on empty value', () => {
    let idValue = '';
    let createFunc = function () { new PermitId(idValue) };
    expect(createFunc).toThrow();
  });
});
