import {Injectable} from '@angular/core';

@Injectable()
export class HeroesService {

    private heroes: any[] = {
        
    }

    constructor() {
        console.log("Servicio listo para usarse!!");
    }
}