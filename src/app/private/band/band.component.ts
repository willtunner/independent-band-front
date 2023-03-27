import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Band, Disc, User } from 'src/app/interface/general-interface';
import { DiscService } from 'src/app/services/disc.service';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {
  panelOpenState = false;
  band!: Band;
  members: User[] = [];
  discs: Disc[] = [];
  like: boolean = false;


  constructor( public dialogRef: MatDialogRef<BandComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private discService: DiscService) { }

  ngOnInit(): void {
    console.log('Data: ', this.data.band);
    this.band = this.data.band;
    this.members = this.data.band.members;
    console.log(' menbers',this.data.band.members);
    this.discService.getDiscsByBand(this.data.band.id).subscribe((res: any) => {
      console.log('Discos ', res.data.discs)
      this.discs = res.data.discs;
    })
  }

  changeLike() {
    this.like = !this.like
  }

}
