import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BandService } from 'src/app/services/band.service';
import {MatDialog} from '@angular/material/dialog';
import { AddBandFormComponent } from './add-band-form/add-band-form.component';



@Component({
  selector: 'app-create-band',
  templateUrl: './create-band.component.html',
  styleUrls: ['./create-band.component.scss']
})

export class CreateBandComponent implements OnInit {
  form!: FormGroup;
  animal!: string;
  name!: string;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddBandFormComponent, {
      width: '400px',
      data: { name: this.name, animal: this.animal }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }
}