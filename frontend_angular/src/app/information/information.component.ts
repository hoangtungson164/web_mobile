import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-information',
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

    informationForm: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.informationForm = this.fb.group({
            full_name: ['', [Validators.required, Validators.minLength(5)]],
            national_id: ['', [Validators.required, Validators.minLength(9)]]
        });
    }



}
