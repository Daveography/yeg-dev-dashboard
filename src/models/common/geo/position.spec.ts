import { Latitude } from "src/app/models/common/geo/latitude";
import { Longitude } from "src/app/models/common/geo/longitude";
import { Position } from 'src/app/models/common/geo/position';

describe('Position', () => {

  it('should create a position with a valid Latitude and Longitude', () => {
    let latObj = new Latitude(53.560014);
    let lonObj = new Longitude(-113.588279);
    let posObj = new Position(latObj, lonObj);
    expect(posObj.Latitude).toBe(latObj);
    expect(posObj.Longitude).toBe(lonObj);
  });

  it('should throw on null latitude', () => {
    let lonObj = new Longitude(-113.588279);
    let createFunc = function () { new Position(null, lonObj) };
    expect(createFunc).toThrow();
  });

  it('should throw on null longitude', () => {
    let latObj = new Latitude(53.560014);
    let createFunc = function () { new Position(latObj, null) };
    expect(createFunc).toThrow();
  });

  it('should format latitude and longitude on toString', () => {
    let latObj = new Latitude(-23.643478346);
    let lonObj = new Longitude(165.485737596);
    let posObj = new Position(latObj, lonObj);
    expect(posObj.toString()).toEqual('-23.643478, 165.485738'); // It rounds up, FYI
  });
});
