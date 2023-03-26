import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { BandService } from 'src/app/services/band.service';
import { ToastServiceService } from 'src/app/services/toast-service.service';
import { AddressService } from 'src/app/services/address.service';


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
  form!:FormGroup;
  states = null;
  cities = null;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // matcher = new MyErrorStateMatcher();
  loading = false;
  constructor(
    private addressService: AddressService,
    private toastService: ToastServiceService,
    public dialogRef: MatDialogRef<AddBandFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bandService: BandService) { }

  ngOnInit(): void {
    this.createForm();
    this.getCities();
    console.log(this.states);
  }


  createForm() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      genre: new FormControl(null, Validators.required),
      country: new FormControl(null, [Validators.required] ),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, Validators.required),
      creatorId: new FormControl(1),
    })
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getCities() {
    // let state = this.form.get('state')?.value;
    // console.log(state);
    this.addressService.getCitiesByState().subscribe((data: any) => {
      console.log('Data: ',data.estados);
      this.states = data.estados;
    })
  }

  getNew(teste:any) {
    console.log(teste);
    this.cities = teste.cidades
  }

  saveBand() {
    this.loading = true;
    //! REMOVER O TIMEOUT DEPOIS
    setTimeout(() => {
      this.bandService.saveBand(this.form.getRawValue()).subscribe((band) => {
        console.log(band);
        this.toastService.successToast("Banda Salva com sucesso!")
        this.loading = false;
        this.onCancel()
      });
  }, 1000);


  }

}
