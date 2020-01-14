import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormControlName, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    id: number;

    loginForm: FormGroup;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
                id: new FormControl(''),
                password: new FormControl(''),
                confirmPassword: new FormControl('')
            }
        );
        this.id = +this.route.snapshot.paramMap.get('id');
    }


}
