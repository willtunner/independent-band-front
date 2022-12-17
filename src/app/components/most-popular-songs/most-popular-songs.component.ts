import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  disc: string,
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, disc: 'https://as2.ftcdn.net/v2/jpg/01/77/94/57/1000_F_177945794_Oz3clxxBGWpEnECPyVWc0EumHYL8I8hW.jpg', name: 'Hydrogen', weight: 1.0079, symbol: '2:41'},
  {position: 2, disc: 'https://as1.ftcdn.net/v2/jpg/00/47/08/74/1000_F_47087406_pj6TY5SwmKiJ3mO7oNZy3F2hk0SqqzRW.jpg', name: 'Helium', weight: 4.0026, symbol: '3:15'},
  {position: 3, disc: 'https://as2.ftcdn.net/v2/jpg/00/96/15/07/1000_F_96150722_8t6Wrz4glqeBm9SjzQZ2jYKMklDaeGed.jpg', name: 'Lithium', weight: 6.941, symbol: '4:20'},
  {position: 4, disc: 'https://as2.ftcdn.net/v2/jpg/01/48/33/73/1000_F_148337351_H686fyyhMoiDlFUd95gW1uJcf7skIXxQ.jpg', name: 'Beryllium', weight: 9.0122, symbol: '6:00'},
  {position: 5, disc: 'https://as1.ftcdn.net/v2/jpg/01/06/97/00/1000_F_106970063_pHeBA3NBCeUMGaccC38S4zhMo3etHznw.jpg', name: 'Boron', weight: 10.811, symbol: '5:15'},
  // {position: 6, disc: 'https://as2.ftcdn.net/v2/jpg/01/79/34/93/1000_F_179349328_b8gCm9CDRCfvsVyNkInrHl483QRpl56C.jpg', name: 'Carbon', weight: 12.0107, symbol: '3:43'},
  // {position: 7, disc: 'https://as2.ftcdn.net/v2/jpg/01/91/98/33/1000_F_191983327_ugyL2jFtB8YGADNH2df9sBUxojRUtTUe.jpg', name: 'Nitrogen', weight: 14.0067, symbol: '4:51'},
  // {position: 8, disc: 'https://as2.ftcdn.net/v2/jpg/03/38/16/07/1000_F_338160744_6dy2fwehlFY7bYe5jtLRvXwidxlPzXGw.jpg', name: 'Oxygen', weight: 15.9994, symbol: '2:15'},
  // {position: 9, disc: 'https://as1.ftcdn.net/v2/jpg/00/88/12/68/1000_F_88126889_oT8f43CqS6IZFyMUE8NDgBPeHEv4xXoc.jpg', name: 'Fluorine', weight: 18.9984, symbol: '3:18'},
  // {position: 10, disc: 'https://as2.ftcdn.net/v2/jpg/05/01/70/31/1000_F_501703175_6ztkApCTieJg9QWdhCchAeiOthm6X64s.jpg', name: 'Neon', weight: 20.1797, symbol: '6:20'},
];

@Component({
  selector: 'app-most-popular-songs',
  templateUrl: './most-popular-songs.component.html',
  styleUrls: ['./most-popular-songs.component.scss']
})

export class MostPopularSongsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'disc', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
