import {Injectable} from '@angular/core';
import {IInfo} from '../information/interface/i-info';

const INSTITUTION = 'Target Institution';
const CREDIT_REPORT = 'Credit report';
const NAME = 'full name';
const NATIONAL_ID = 'national id';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor() {
    }

    public saveInstitution(institution: string) {
        window.sessionStorage.removeItem(INSTITUTION);
        window.sessionStorage.setItem(INSTITUTION, institution);
    }

    public getInstitution(): string {
        return sessionStorage.getItem(INSTITUTION);
    }

    public saveReport(report: string) {
        window.sessionStorage.removeItem(CREDIT_REPORT);
        window.sessionStorage.setItem(CREDIT_REPORT, report);
    }

    public getReport(): string {
        return sessionStorage.getItem(CREDIT_REPORT);
    }

    public saveName(name: string) {
        window.sessionStorage.removeItem(NAME);
        window.sessionStorage.setItem(NAME, name);
    }

    public getName(): string {
        return sessionStorage.getItem(NAME);
    }

    public saveNationalId(nationalId: string) {
        window.sessionStorage.removeItem(NATIONAL_ID);
        window.sessionStorage.setItem(NATIONAL_ID, nationalId);
    }

    public getNationalId(): string {
        return sessionStorage.getItem(NATIONAL_ID);
    }


}
