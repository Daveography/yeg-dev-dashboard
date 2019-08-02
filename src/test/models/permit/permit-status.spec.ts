import { PermitStatus } from "src/app/models/permit/permit-status";

describe('PermitStatus', () => {

  it('should create permit status with valid value', () => {
    let statusValue = 'In Progress';
    let statusObj = new PermitStatus(statusValue);
    expect(statusObj.toString()).toEqual(statusValue);
  });

  it('should throw on null value', () => {
    let statusValue = null;
    let createFunc = function () { new PermitStatus(statusValue) };
    expect(createFunc).toThrow();
  });

  it('should throw on empty value', () => {
    let statusValue = '';
    let createFunc = function () { new PermitStatus(statusValue) };
    expect(createFunc).toThrow();
  });
});
