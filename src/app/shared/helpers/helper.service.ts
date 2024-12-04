import { inject, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import Swal from "sweetalert2";

@Injectable()
export class HelperService {
    private _snackBar = inject(MatSnackBar);
    constructor() { }

    fixErrorFocus() {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement) {
            activeElement.blur();
        }
    }

    errorSwalPopup(message: string) {
        Swal.fire({
            title: 'Error',
            text: message,
            icon: 'error',
            showClass: {
                popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
            },
            hideClass: {
                popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
            }
        });
    }

    /**
   * Muestra snackBar con un mensaje
   * @param msg 
   */
    openSnackBar(msg: any) {
        this._snackBar.open(msg, 'Cerrar', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 2 * 1500,
            panelClass: 'snackClass'
        });
    }

}