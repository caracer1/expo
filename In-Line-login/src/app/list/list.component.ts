import { ListService } from './list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = "Waiting";
  parties;

  constructor(service: ListService) {
      this.parties = service.getList();
  }



  ngOnInit(): void {
  }

}
