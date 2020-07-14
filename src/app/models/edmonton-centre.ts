import { latLng, LatLng } from 'leaflet';
import { Location } from 'soda-angular/datatypes';

const latitude = 53.5446161;
const longitude = -113.486243;

export const EdmontonCentre: LatLng = latLng(latitude, longitude);
export const EdmontonCentreLocation: Location = new Location(latitude, longitude);
