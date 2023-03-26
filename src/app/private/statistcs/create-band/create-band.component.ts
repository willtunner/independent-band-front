import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Band } from 'src/app/interface/general-interface';
import { BandService } from 'src/app/services/band.service';
import { AddBandFormComponent } from './add-band-form/add-band-form.component';

const ELEMENT_DATA: Band[] = [
  {id: 1, logo: 'https://as2.ftcdn.net/v2/jpg/01/77/94/57/1000_F_177945794_Oz3clxxBGWpEnECPyVWc0EumHYL8I8hW.jpg', name: 'Hydrogen', country: 'Brasil', state: 'São paulo', city: 'Campinas', genre: 'Metal', created: '25/03/2023'},
  {id: 1, logo: 'https://as2.ftcdn.net/v2/jpg/01/77/94/57/1000_F_177945794_Oz3clxxBGWpEnECPyVWc0EumHYL8I8hW.jpg', name: 'Hydrogen', country: 'Brasil', state: 'São paulo', city: 'Campinas', genre: 'Metal', created: '25/03/2023'},
  {id: 1, logo: 'https://as2.ftcdn.net/v2/jpg/01/77/94/57/1000_F_177945794_Oz3clxxBGWpEnECPyVWc0EumHYL8I8hW.jpg', name: 'Hydrogen', country: 'Brasil', state: 'São paulo', city: 'Campinas', genre: 'Metal', created: '25/03/2023'},
  {id: 1, logo: 'https://as2.ftcdn.net/v2/jpg/01/77/94/57/1000_F_177945794_Oz3clxxBGWpEnECPyVWc0EumHYL8I8hW.jpg', name: 'Hydrogen', country: 'Brasil', state: 'São paulo', city: 'Campinas', genre: 'Metal', created: '25/03/2023'},
  {id: 1, logo: 'https://as2.ftcdn.net/v2/jpg/01/77/94/57/1000_F_177945794_Oz3clxxBGWpEnECPyVWc0EumHYL8I8hW.jpg', name: 'Hydrogen', country: 'Brasil', state: 'São paulo', city: 'Campinas', genre: 'Metal', created: '25/03/2023'},
  // {position: 6, disc: 'https://as2.ftcdn.net/v2/jpg/01/79/34/93/1000_F_179349328_b8gCm9CDRCfvsVyNkInrHl483QRpl56C.jpg', name: 'Carbon', weight: 12.0107, symbol: '3:43'},
  // {position: 7, disc: 'https://as2.ftcdn.net/v2/jpg/01/91/98/33/1000_F_191983327_ugyL2jFtB8YGADNH2df9sBUxojRUtTUe.jpg', name: 'Nitrogen', weight: 14.0067, symbol: '4:51'},
  // {position: 8, disc: 'https://as2.ftcdn.net/v2/jpg/03/38/16/07/1000_F_338160744_6dy2fwehlFY7bYe5jtLRvXwidxlPzXGw.jpg', name: 'Oxygen', weight: 15.9994, symbol: '2:15'},
  // {position: 9, disc: 'https://as1.ftcdn.net/v2/jpg/00/88/12/68/1000_F_88126889_oT8f43CqS6IZFyMUE8NDgBPeHEv4xXoc.jpg', name: 'Fluorine', weight: 18.9984, symbol: '3:18'},
  // {position: 10, disc: 'https://as2.ftcdn.net/v2/jpg/05/01/70/31/1000_F_501703175_6ztkApCTieJg9QWdhCchAeiOthm6X64s.jpg', name: 'Neon', weight: 20.1797, symbol: '6:20'},
];

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
}
