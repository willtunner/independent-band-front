import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-band-form',
  templateUrl: './add-band-form.component.html',
  styleUrls: ['./add-band-form.component.scss']
})
export class AddBandFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddBandFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
