import { Latitude } from "src/app/models/common/geo/latitude";

describe('Latitude', () => {

  it('should create latuitude with valid positive value up to 90', () => {
    let latValue = 53.560014;
    let latObj = new Latitude(latValue);
    expect(latObj.Degrees).toBeCloseTo(latValue, 6);
  });

  it('should create latuitude with valid negative value down to -90', () => {
    let latValue = -83.583924;
    let latObj = new Latitude(latValue);
    expect(latObj.Degrees).toBeCloseTo(latValue, 6);
  });

  it('should create latuitude with zero value', () => {
    let latValue = 0;
    let latObj = new Latitude(latValue);
    expect(latObj.Degrees).toBeCloseTo(latValue, 6);
  });

  it('should throw on invalid positive value above 90', () => {
    let latValue = 91.643467;
    let createFunc = function () { new Latitude(latValue) };
    expect(createFunc).toThrow();
  });

  it('should throw on invalid negative value below -90', () => {
    let latValue = -92.458324;
    let createFunc = function () { new Latitude(latValue) };
    expect(createFunc).toThrow();
  });

  it('should throw on null value', () => {
    let latValue = null;
    let createFunc = function () { new Latitude(latValue) };
    expect(createFunc).toThrow();
  });

  it('should fix at 6 decimal places on toString', () => {
    let latValue = 58.25783247;
    let latObj = new Latitude(latValue);
    expect(latObj.toString()).toEqual('58.257832');
  });
});
