import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataStorageService} from '../storage/data-storage.service';
import {ReportService} from './service/report-service.service';
import {IReport} from './interface/i-report';
import * as $ from 'jquery';

@Component({
    selector: 'app-sending-info',
    templateUrl: './sending-info.component.html',
    styleUrls: ['./sending-info.component.css'],
    encapsulation: ViewEncapsulation.None
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
        // this.save();
    }

    getAllReport() {
        this.reportService.getAllReport(10, this.id).subscribe(next => {
            this.reports = next;
            console.log('success get all the report');
        }, error => {
            console.log(error);
            console.log('fail to get all the report');
        });
    }

    checkBox(report: string, name: string) {
        this.check = true;
        this.dataStorageService.saveReportCode(report);
        this.dataStorageService.saveReportName(name);
    }

    // save() {
    //     $(document).ready(next => {
    //         $('input[type="checkbox"]').on('change', function() {
    //             $('input[type="checkbox"]').not(this).prop('checked', false);
    //         });
    //     });
    // }
}
