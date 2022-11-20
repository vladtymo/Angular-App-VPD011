import { Component, OnInit } from '@angular/core';
import { IPhone } from './phone';
import { PhonesService } from './phones.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'model', 'price', 'description'];
  phones: IPhone[] = [];

  constructor(private phonesService: PhonesService) { }

  ngOnInit(): void {
    this.phonesService.getAllPhones().subscribe(result => {
      this.phones = result;
    });
  }
}
