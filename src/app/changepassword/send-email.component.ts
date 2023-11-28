import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

mailTo!: string


  constructor(
    private snack:MatSnackBar
  ) { }


  ngOnInit(): void {
  }

  onReset(){
    
  }


}
