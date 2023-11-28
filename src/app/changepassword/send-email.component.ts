import { OnInit } from '@angular/core';
import { EmailPasswordService } from './../services/email-password.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  constructor(
    private emailPasswordService: EmailPasswordService,
  ) { }

  ngOnInit(): void {
  }

}
