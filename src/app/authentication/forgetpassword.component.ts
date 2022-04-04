import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
})
export class ForgetpasswordComponent implements OnInit {
  forgetpasswordForm!: FormGroup;
  submitted = false;

  constructor(private Formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.forgetpasswordForm = this.Formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.forgetpasswordForm.invalid) {
      return;
    }
    alert('Success');
  }
}
