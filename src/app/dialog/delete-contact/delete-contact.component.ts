import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrl: './delete-contact.component.css'
})
export class DeleteContactComponent {

  persona: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeleteContactComponent>
  ) {
    if (data) {
      this.persona = data.persona;
    }


  }

  optionSelected(opt: string): any {
    this.dialogRef.close(opt);
  }

}
