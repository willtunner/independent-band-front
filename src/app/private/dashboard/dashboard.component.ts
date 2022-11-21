import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  imgCollection: Array<object> = [
    {
      image: 'http://2.bp.blogspot.com/-BzBGrCz9v40/U5gDPj-G65I/AAAAAAAAAA0/gOf9fGttzl4/s1600/logo-5-517a8fc0ba65b.jpg',
      thumbImage: 'http://2.bp.blogspot.com/-BzBGrCz9v40/U5gDPj-G65I/AAAAAAAAAA0/gOf9fGttzl4/s1600/logo-5-517a8fc0ba65b.jpg',
      alt: 'Delinquentes',
      title: 'Delinquentes'
    }, {
      image: 'https://tribunademinas.com.br/wp-content/uploads/2018/04/molho-negro.jpg',
      thumbImage: 'https://tribunademinas.com.br/wp-content/uploads/2018/04/molho-negro.jpg',
      title: 'Molho negro',
      alt: 'Molho negro'
    }, {
      image: 'https://i.ytimg.com/vi/q3t08_zdF8c/maxresdefault.jpg',
      thumbImage: 'https://i.ytimg.com/vi/q3t08_zdF8c/maxresdefault.jpg',
      title: 'Metallica Cover belém',
      alt: 'Metallica Cover belém'
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: 'http://2.bp.blogspot.com/-BzBGrCz9v40/U5gDPj-G65I/AAAAAAAAAA0/gOf9fGttzl4/s1600/logo-5-517a8fc0ba65b.jpg',
      thumbImage: 'http://2.bp.blogspot.com/-BzBGrCz9v40/U5gDPj-G65I/AAAAAAAAAA0/gOf9fGttzl4/s1600/logo-5-517a8fc0ba65b.jpg',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5'
    }, 
];

// novo slider


  constructor() { }

  ngOnInit(): void {
   
  }



}
