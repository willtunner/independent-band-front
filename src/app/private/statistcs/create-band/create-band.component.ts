import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Band } from 'src/app/interface/general-interface';
import { BandService } from 'src/app/services/band.service';
import { BandComponent } from '../../band/band.component';
import { AddBandFormComponent } from './add-band-form/add-band-form.component';

@Component({
  selector: 'app-create-band',
  templateUrl: './create-band.component.html',
  styleUrls: ['./create-band.component.scss']
})

export class CreateBandComponent implements OnInit {
  displayedColumns: string[] = ['id', 'logo', 'name', 'country', 'state', 'city', 'genre', 'created'];
  dataSource = [];
  bands = null;

  constructor(public dialog: MatDialog, private bandService: BandService) { }

  ngOnInit(): void {
    this.getAllBands();
  }

  getAllBands() {
    this.bandService.getAllBands().subscribe((res: any) => {
      console.log('Bandas',res.data.bands);
      this.dataSource = res.data.bands;
    })
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddBandFormComponent, {
      width: '635px',
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

  getBand(res: any) {
     console.log('res ', res);
    let dialogRef = this.dialog.open(BandComponent, {
      width: '835px',
      height: 'auto',
      panelClass: 'band-modal',
      data: { band: res }
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }
}
