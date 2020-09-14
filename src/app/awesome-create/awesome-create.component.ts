import { IAwesome } from './../iawesome';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AwesomeService } from '../services/awesome.service';

@Component({
  selector: 'app-awesome-create',
  templateUrl: './awesome-create.component.html',
  styleUrls: ['./awesome-create.component.css']
})
export class AwesomeCreateComponent implements OnInit {
  createAwesomeForm: FormGroup;
  constructor(private awesomeService: AwesomeService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    
    this.createAwesomeForm = this.fb.group({
      id: ['', [Validators.required]],
      tag: ['', [Validators.required]],
      url: ['', [Validators.required]],
      descriptions: ['', [Validators.required]]
    })
  }
  get tag()
  {
    return this.createAwesomeForm.get('tag');
  }
  get url()
  {
    return this.createAwesomeForm.get('url');
  }
  get descriptions()
  {
    return this.createAwesomeForm.get('descriptions');
  }
  createAwesome()
  {
    this.awesomeService.addAwesome(this.createAwesomeForm.value).subscribe(data => {
      this.router.navigate(['/awesomes']);
    })
  }

}
