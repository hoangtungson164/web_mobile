import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-sending-info',
    templateUrl: './sending-info.component.html',
    styleUrls: ['./sending-info.component.css']
})
export class SendingInfoComponent implements OnInit {

    id: number;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
    }

}
