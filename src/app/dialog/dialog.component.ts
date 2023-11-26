import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  selectedOption!: string;
  selectionChanged = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string[]) { }
  ngOnInit(): void {

  }

  onSelect(option: string): void {
    this.selectedOption = option;
    this.selectionChanged.emit(option);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
