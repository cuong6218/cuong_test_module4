import { IAwesome } from './../iawesome';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      id: [''],
      tag: [''],
      url: [''],
      descriptions: ['']
    })
  }
  createAwesome()
  {
    this.awesomeService.addAwesome(this.createAwesomeForm.value).subscribe(data => {
      this.router.navigate(['/awesomes']);
    })
  }

}
