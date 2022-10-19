import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppService } from './../services/app.service';

@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.css']
})
export class PostcreateComponent implements OnInit {

  constructor(private appService: AppService,
    private fb: FormBuilder) { }

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  });

  ngOnInit() {
  }

  create(event) {
    this.appService.save(this.form.value.title, this.form.value.body).subscribe(result => this.clear());
  }

  clear() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.form.controls;
  }
}
