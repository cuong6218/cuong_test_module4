import { AwesomeService } from './../services/awesome.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.css']
})
export class AwesomeListComponent implements OnInit {
  awesomes: any;
  constructor(private awesomeService: AwesomeService) { }

  ngOnInit(): void {
    this.awesomes = this.getAll();
  }
  getAll()
  {
    return this.awesomeService.getAll();
  }
  delete(id: number)
  {
    if(confirm('Do you want to delete this item?'))
    this.awesomeService.delete(id).subscribe(data => {
      this.awesomes = this.getAll();
    });
  }

}
