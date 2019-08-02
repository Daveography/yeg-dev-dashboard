import { Permit } from "src/app/models/permit/permit";
import { PermitId } from 'src/app/models/permit/permit-id';
import { Latitude } from 'src/app/models/common/geo/latitude';
import { Longitude } from 'src/app/models/common/geo/longitude';
import { PermitZoning } from 'src/app/models/permit/permit-zoning';
import { PermitNeighbourhood } from 'src/app/models/permit/permit-neighbourhood';
import { PermitDescription } from 'src/app/models/permit/permit-description';
import { PermitClass } from 'src/app/models/permit/permit-class';
import { PermitCategory } from 'src/app/models/permit/permit-category';
import { PermitStatus } from 'src/app/models/permit/permit-status';
import { PermitValue } from 'src/app/models/permit/permit-value';
import { Position } from 'src/app/models/common/geo/position';
import { PermitAddress } from 'src/app/models/permit/permit-address';
import { PermitType } from 'src/app/models/permit/permit-type';

describe('Permit', () => {

  it('should create a permit with valid values', () => {
    let description = 'To convert a portion of the existing General Industrial Use to Liquor Store and to construct interior alterations (Branch of the Willow alcohol storage and distribution warehouse with accessory retail).';
    let permitObj = new Permit(
      new PermitId('5-384573727483'),
      new Date('2019-07-02'),
      new Position(
        new Latitude(53.545511),
        new Longitude(-113.515452)
      ),
      new PermitZoning('AED'),
      new PermitAddress('12738 - 128 STREET NW'),
      new PermitNeighbourhood('West Jasper Place'),
      new PermitDescription(description),
      new PermitType('Major Development Permit'),
      new PermitClass('Class A'),
      new PermitCategory('Single, Semi-detached & Rowhousing'),
      new PermitStatus('Issued'),
      new PermitValue(5000000));
    expect(permitObj).toBeDefined();
    expect(permitObj.toString()).toEqual(description);
  });

  it('should throw on null id', () => {
    let createFunc = function () {
      new Permit(
        null,
        new Date('2019-07-02'),
        new Position(
          new Latitude(53.545511),
          new Longitude(-113.515452)
        ),
        new PermitZoning('AED'),
        new PermitAddress('12738 - 128 STREET NW'),
        new PermitNeighbourhood('West Jasper Place'),
        new PermitDescription('To convert a portion of the existing General Industrial Use to Liquor Store and to construct interior alterations (Branch of the Willow alcohol storage and distribution warehouse with accessory retail).'),
        new PermitType('Major Development Permit'),
        new PermitClass('Class A'),
        new PermitCategory('Single, Semi-detached & Rowhousing'),
        new PermitStatus('Issued'),
        new PermitValue(5000000))
    };
    expect(createFunc).toThrow();
  });

  it('should throw on null date', () => {
    let createFunc = function () {
      new Permit(
        new PermitId('5-384573727483'),
        null,
        new Position(
          new Latitude(53.545511),
          new Longitude(-113.515452)
        ),
        new PermitZoning('AED'),
        new PermitAddress('12738 - 128 STREET NW'),
        new PermitNeighbourhood('West Jasper Place'),
        new PermitDescription('To convert a portion of the existing General Industrial Use to Liquor Store and to construct interior alterations (Branch of the Willow alcohol storage and distribution warehouse with accessory retail).'),
        new PermitType('Major Development Permit'),
        new PermitClass('Class A'),
        new PermitCategory('Single, Semi-detached & Rowhousing'),
        new PermitStatus('Issued'),
        new PermitValue(5000000))
    };
    expect(createFunc).toThrow();
  });

  it('should throw on null position', () => {
    let createFunc = function () {
      new Permit(
        new PermitId('5-384573727483'),
        new Date('2019-07-02'),
        null,
        new PermitZoning('AED'),
        new PermitAddress('12738 - 128 STREET NW'),
        new PermitNeighbourhood('West Jasper Place'),
        new PermitDescription('To convert a portion of the existing General Industrial Use to Liquor Store and to construct interior alterations (Branch of the Willow alcohol storage and distribution warehouse with accessory retail).'),
        new PermitType('Major Development Permit'),
        new PermitClass('Class A'),
        new PermitCategory('Single, Semi-detached & Rowhousing'),
        new PermitStatus('Issued'),
        new PermitValue(5000000))
    };
    expect(createFunc).toThrow();
  });

  it('should throw on null zoning', () => {
    let createFunc = function () {
      new Permit(
        new PermitId('5-384573727483'),
        new Date('2019-07-02'),
        new Position(
          new Latitude(53.545511),
          new Longitude(-113.515452)
        ),
        null,
        new PermitAddress('12738 - 128 STREET NW'),
        new PermitNeighbourhood('West Jasper Place'),
        new PermitDescription('To convert a portion of the existing General Industrial Use to Liquor Store and to construct interior alterations (Branch of the Willow alcohol storage and distribution warehouse with accessory retail).'),
        new PermitType('Major Development Permit'),
        new PermitClass('Class A'),
        new PermitCategory('Single, Semi-detached & Rowhousing'),
        new PermitStatus('Issued'),
        new PermitValue(5000000))
    };
    expect(createFunc).toThrow();
  });

  it('should throw on null address', () => {
    let createFunc = function () {
      new Permit(
        new PermitId('5-384573727483'),
        new Date('2019-07-02'),
        new Position(
          new Latitude(53.545511),
          new Longitude(-113.515452)
        ),
        new PermitZoning('AED'),
        null,
        new PermitNeighbourhood('West Jasper Place'),
        new PermitDescription('To convert a portion of the existing General Industrial Use to Liquor Store and to construct interior alterations (Branch of the Willow alcohol storage and distribution warehouse with accessory retail).'),
        new PermitType('Major Development Permit'),
        new PermitClass('Class A'),
        new PermitCategory('Single, Semi-detached & Rowhousing'),
        new PermitStatus('Issued'),
        new PermitValue(5000000))
    };
    expect(createFunc).toThrow();
  });

  it('should throw on null neighbourhood', () => {
    let createFunc = function () {
      new Permit(
        new PermitId('5-384573727483'),
        new Date('2019-07-02'),
        new Position(
          new Latitude(53.545511),
          new Longitude(-113.515452)
        ),
        new PermitZoning('AED'),
        new PermitAddress('12738 - 128 STREET NW'),
        null,
        new PermitDescription('To convert a portion of the existing General Industrial Use to Liquor Store and to construct interior alterations (Branch of the Willow alcohol storage and distribution warehouse with accessory retail).'),
        new PermitType('Major Development Permit'),
        new PermitClass('Class A'),
        new PermitCategory('Single, Semi-detached & Rowhousing'),
        new PermitStatus('Issued'),
        new PermitValue(5000000))
    };
    expect(createFunc).toThrow();
  });

  it('should throw on null description', () => {
    let createFunc = function () {
      new Permit(
        new PermitId('5-384573727483'),
        new Date('2019-07-02'),
        new Position(
          new Latitude(53.545511),
          new Longitude(-113.515452)
        ),
        new PermitZoning('AED'),
        new PermitAddress('12738 - 128 STREET NW'),
        new PermitNeighbourhood('West Jasper Place'),
        null,
        new PermitType('Major Development Permit'),
        new PermitClass('Class A'),
        new PermitCategory('Single, Semi-detached & Rowhousing'),
        new PermitStatus('Issued'),
        new PermitValue(5000000))
    };
    expect(createFunc).toThrow();
  });

  it('should throw on null type', () => {
    let createFunc = function () {
      new Permit(
        new PermitId('5-384573727483'),
        new Date('2019-07-02'),
        new Position(
          new Latitude(53.545511),
          new Longitude(-113.515452)
        ),
        new PermitZoning('AED'),
        new PermitAddress('12738 - 128 STREET NW'),
        new PermitNeighbourhood('West Jasper Place'),
        new PermitDescription('To convert a portion of the existing General Industrial Use to Liquor Store and to construct interior alterations (Branch of the Willow alcohol storage and distribution warehouse with accessory retail).'),
        null,
        new PermitClass('Class A'),
        new PermitCategory('Single, Semi-detached & Rowhousing'),
        new PermitStatus('Issued'),
        new PermitValue(5000000))
    };
    expect(createFunc).toThrow();
  });

  it('should throw on null class', () => {
    let createFunc = function () {
      new Permit(
        new PermitId('5-384573727483'),
        new Date('2019-07-02'),
        new Position(
          new Latitude(53.545511),
          new Longitude(-113.515452)
        ),
        new PermitZoning('AED'),
        new PermitAddress('12738 - 128 STREET NW'),
        new PermitNeighbourhood('West Jasper Place'),
        new PermitDescription('To convert a portion of the existing General Industrial Use to Liquor Store and to construct interior alterations (Branch of the Willow alcohol storage and distribution warehouse with accessory retail).'),
        new PermitType('Major Development Permit'),
        null,
        new PermitCategory('Single, Semi-detached & Rowhousing'),
        new PermitStatus('Issued'),
        new PermitValue(5000000))
    };
    expect(createFunc).toThrow();
  });

  it('should throw on null category', () => {
    let createFunc = function () {
      new Permit(
        new PermitId('5-384573727483'),
        new Date('2019-07-02'),
        new Position(
          new Latitude(53.545511),
          new Longitude(-113.515452)
        ),
        new PermitZoning('AED'),
        new PermitAddress('12738 - 128 STREET NW'),
        new PermitNeighbourhood('West Jasper Place'),
        new PermitDescription('To convert a portion of the existing General Industrial Use to Liquor Store and to construct interior alterations (Branch of the Willow alcohol storage and distribution warehouse with accessory retail).'),
        new PermitType('Major Development Permit'),
        new PermitClass('Class A'),
        null,
        new PermitStatus('Issued'),
        new PermitValue(5000000))
    };
    expect(createFunc).toThrow();
  });

  it('should throw on null status', () => {
    let createFunc = function () {
      new Permit(
        new PermitId('5-384573727483'),
        new Date('2019-07-02'),
        new Position(
          new Latitude(53.545511),
          new Longitude(-113.515452)
        ),
        new PermitZoning('AED'),
        new PermitAddress('12738 - 128 STREET NW'),
        new PermitNeighbourhood('West Jasper Place'),
        new PermitDescription('To convert a portion of the existing General Industrial Use to Liquor Store and to construct interior alterations (Branch of the Willow alcohol storage and distribution warehouse with accessory retail).'),
        new PermitType('Major Development Permit'),
        new PermitClass('Class A'),
        new PermitCategory('Single, Semi-detached & Rowhousing'),
        null,
        new PermitValue(5000000))
    };
    expect(createFunc).toThrow();
  });

  it('should throw on null value', () => {
    let createFunc = function () {
      new Permit(
        new PermitId('5-384573727483'),
        new Date('2019-07-02'),
        new Position(
          new Latitude(53.545511),
          new Longitude(-113.515452)
        ),
        new PermitZoning('AED'),
        new PermitAddress('12738 - 128 STREET NW'),
        new PermitNeighbourhood('West Jasper Place'),
        new PermitDescription('To convert a portion of the existing General Industrial Use to Liquor Store and to construct interior alterations (Branch of the Willow alcohol storage and distribution warehouse with accessory retail).'),
        new PermitType('Major Development Permit'),
        new PermitClass('Class A'),
        new PermitCategory('Single, Semi-detached & Rowhousing'),
        new PermitStatus('Issued'),
        null)
    };
    expect(createFunc).toThrow();
  });
});
