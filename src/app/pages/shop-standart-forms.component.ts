import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-standart-forms',
  templateUrl: './shop-standart-forms.component.html',
  styleUrls: ['./shop-standart-forms.component.css'],
})
export class ShopStandartFormsComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    alert('success');
  }
}
