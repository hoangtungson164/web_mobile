import {Component, OnInit} from '@angular/core';
import {BankService} from './service/bank.service';
import {IBank} from './interface/ibank';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  banks: IBank[];

  bankId: number;

  constructor(private bankService: BankService) {
  }

  ngOnInit() {
    this.getAllBanks();
  }

  getAllBanks() {
    this.bankService.getBanks(10).subscribe(next => {
      this.banks = next;
      console.log('success to get all banks');
    }, error => {
      console.log(error);
      console.log('fail to get banks');
    });
  }

  getId(id: number) {
    this.bankId = id;
  }


}
