import {Injectable} from '@angular/core';

const INSTITUTION = 'Target Institution';
const CREDIT_REPORT = 'Credit report';

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

    public getReport(report: string) {
        return sessionStorage.getItem(CREDIT_REPORT);
    }

}
