import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar-producto.component.html',
  styleUrls: ['./comprar-producto.component.css']
})
export class ComprarProductoComponent implements OnInit {

  selectedOption!: string;
  selectionChanged = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<ComprarProductoComponent>, @Inject(MAT_DIALOG_DATA) public data: string[]) { }
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

