import { Component, Inject, OnInit } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA
} from "@angular/material/snack-bar";

@Component({
  selector: 'app-toastbar',
  templateUrl: './toastbar.component.html',
  styleUrls: ['./toastbar.component.scss']
})
export class ToastbarComponent implements OnInit {

  constructor(public sbRef: MatSnackBarRef<ToastbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
