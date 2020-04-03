import { Longitude } from "src/app/models/common/geo/longitude";

describe('Longitude', () => {

  it('should create longitude with valid positive value up to 180', () => {
    let lonValue = 176.054356;
    let lonObj = new Longitude(lonValue);
    expect(lonObj.Degrees).toBeCloseTo(lonValue, 6);
  });

  it('should create longitude with valid negative value down to -180', () => {
    let lonValue = -113.588279;
    let lonObj = new Longitude(lonValue);
    expect(lonObj.Degrees).toBeCloseTo(lonValue, 6);
  });

  it('should create longitude with zero value', () => {
    let lonValue = 0;
    let lonObj = new Longitude(lonValue);
    expect(lonObj.Degrees).toBeCloseTo(lonValue, 6);
  });

  it('should throw on invalid positive value above 180', () => {
    let lonValue = 181.643467;
    let createFunc = function () { new Longitude(lonValue) };
    expect(createFunc).toThrow();
  });

  it('should throw on invalid negative value below -180', () => {
    let lonValue = -182.458324;
    let createFunc = function () { new Longitude(lonValue) };
    expect(createFunc).toThrow();
  });

  it('should throw on null value', () => {
    let lonValue = null;
    let createFunc = function () { new Longitude(lonValue) };
    expect(createFunc).toThrow();
  });

  it('should fix at 6 decimal places on toString', () => {
    let lonValue = -113.856720386;
    let lonObj = new Longitude(lonValue);
    expect(lonObj.toString()).toEqual('-113.856720');
  });
});
