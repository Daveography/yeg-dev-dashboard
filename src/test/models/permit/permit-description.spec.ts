import { PermitDescription } from "src/app/models/permit/permit-description";

describe('PermitDescription', () => {

  it('should create permit description with valid value', () => {
    let descriptionValue = 'To change the Uses in a commercial building (Main Floor - from General Retail Store to Indoor Participant Recreation Service, Second Floor - from General Retail Store to Professional, Financial and Office Support Services) and construct exterior alterations (enlarge the Garage door and re-develop the parking lot).';
    let descriptionObj = new PermitDescription(descriptionValue);
    expect(descriptionObj.toString()).toEqual(descriptionValue);
  });

  // it('should throw on null value', () => {
  //   let descriptionValue = null;
  //   let createFunc = function () { new PermitDescription(descriptionValue) };
  //   expect(createFunc).toThrow();
  // });

  // it('should throw on empty value', () => {
  //   let descriptionValue = '';
  //   let createFunc = function () { new PermitDescription(descriptionValue) };
  //   expect(createFunc).toThrow();
  // });
});
