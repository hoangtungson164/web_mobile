import {Component, OnInit} from '@angular/core';
import {BankService} from '../bank-list/service/bank.service';
import {IBankConsensus} from './interface/i-bank-consensus';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-bank-consensus',
    templateUrl: './bank-consensus.component.html',
    styleUrls: ['./bank-consensus.component.css']
})
export class BankConsensusComponent implements OnInit {

    bankConsensus: IBankConsensus;
    id: number;
    agreeAll = false;

    constructor(
        private bankService: BankService,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getConsensus(this.id);
    }

    getConsensus(id: number) {
        this.bankService.getBankConsensusById(id).subscribe(next => {
            this.bankConsensus = next[0];
            console.log(next);
            console.log('success to get consensus');
        }, error => {
            console.log('fail to get consensus');
        });
    }

    agreeWith() {
        this.agreeAll = !this.agreeAll;
    }

}
