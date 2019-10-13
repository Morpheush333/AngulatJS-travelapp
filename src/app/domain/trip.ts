import { To } from './to';
import { From } from './From';

export class Trip {
    id: number;
    name: string;
    duration: number;
    departureDate: string;
    //departureDate: Date;
    returnDate: string;
    adultPrice: number;
    childPrice: number;
    probotion: Boolean;
    adultAvailable: number;
    childAvilable: number;
    // to: To;
    // from: From;

    constructor(id: number, name: string, duration: number,
         departureDate: string, returnDate: string) {
             this.id=id;
             this.name=name;
             this.duration=duration;
             this.departureDate=departureDate;
             this.returnDate=returnDate;
    }
}