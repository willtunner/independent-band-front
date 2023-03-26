import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ToastbarComponent } from '../components/toastbar/toastbar.component';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {
  data = "This is an example for passing data";

  constructor(private snackBar: MatSnackBar) { }

  successToast(content: string) {
    let sb = this.snackBar.open(content, "", {
      duration: 2000, 
      panelClass: ["custom-style"]
    });
 
    sb.onAction().subscribe(() => {
      sb.dismiss();
    }); 
  }

  showSnackbarAction(content: string, action?: any) {
    let snack = this.snackBar.open(content, action);
    snack.afterDismissed().subscribe(() => {
      console.log("This will be shown after snackbar disappeared");
    });
    snack.onAction().subscribe(() => {
      console.log("This will be called when snackbar button clicked");
    });
  }

  showSnackbarDuration(content: any, action: any, duration: any) {
    this.snackBar.open(content, action, duration);
  }
  showSnackbarTopPosition(content: any, action: any, duration: any) {
    this.snackBar.open(content, action, {
      duration: 2000,
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }
  showSnackbarCssStyles(content: any, action: any, duration: any) {
    let sb = this.snackBar.open(content, action, {
      duration: duration,
      panelClass: ["custom-style"]
    });
    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
  }
  showBasicComponent(message: string, panelClass: string) {
    this.snackBar.openFromComponent(ToastbarComponent, {
      data: this.data,
      duration: 10000
    });
  }


}
