import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataStorageService} from '../storage/data-storage.service';
import {ReportService} from './service/report-service.service';
import {IReport} from './interface/i-report';

@Component({
    selector: 'app-sending-info',
    templateUrl: './sending-info.component.html',
    styleUrls: ['./sending-info.component.css']
})
export class SendingInfoComponent implements OnInit {

    id: number;

    check = false;

    reports: IReport[];

    constructor(
        private route: ActivatedRoute,
        private dataStorageService: DataStorageService,
        private reportService: ReportService,
    ) {
    }

    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getAllReport();
    }

    getAllReport() {
        this.reportService.getAllReport(10).subscribe(next => {
            this.reports = next;
            console.log('success get all the report');
        }, error => {
            console.log(error);
            console.log('fail to get all the report');
        });
    }

    checkBox(report: string) {
        this.check = true;
        this.dataStorageService.saveReport(report);
    }

}
