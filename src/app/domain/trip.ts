import { To } from './to';
import { From } from './from';
import { Catering } from './catering.enum';

export class Trip {
    id: number;
    name: string;
    duration: number;
    dateStart: string;
    //departureDate: Date;
    dateFinnish: string;
    adultPrice: number;
    childPrice: number;
    probotion: Boolean;
    adultAvailable: number;
    childAvilable: number;
    catering: Catering;
    // to: To;
    // from: From;

    constructor(id?: number, name?: string, duration?: number,
         dateStart?: string, dateFinnish?: string) {
             this.id=id;
             this.name=name;
             this.duration=duration;
             this.dateStart=dateStart;
             this.dateFinnish=dateFinnish;
    }
}