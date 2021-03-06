import { IAwesome } from './../iawesome';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AwesomeService } from '../services/awesome.service';

@Component({
  selector: 'app-awesome-update',
  templateUrl: './awesome-update.component.html',
  styleUrls: ['./awesome-update.component.css']
})
export class AwesomeUpdateComponent implements OnInit {
  updateAwesomeForm: FormGroup;
  id = +this.route.snapshot.paramMap.get('id');
  awesome: IAwesome;
  constructor(private fb: FormBuilder,
              private awesomeService: AwesomeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateAwesomeForm = this.fb.group({
      tag: ['', [Validators.required]],
      url: ['', [Validators.required]],
      descriptions: ['', [Validators.required]]
    })
    this.awesomeService.getAwesomeById(this.id).subscribe(data => {
      this.awesome = data
      this.updateAwesomeForm.patchValue(this.awesome);
    })
  }
  updateAwesome()
  {
    this.awesomeService.updateAwesome(this.updateAwesomeForm.value, this.id).subscribe(data => {
      this.router.navigate(['/awesomes']);
    });
  }
  delete()
  {
    if(confirm('Do you want to delete this item?'))
    this.awesomeService.delete(this.id).subscribe(data => {
      this.router.navigate(['/awesomes']);
    })  
  }
  cancel()
  {
    this.router.navigate(['/awesomes']);
  }
}
