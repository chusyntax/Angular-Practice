import { Component, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService,]
})
export class NewAccountComponent {

constructor(private loggingService: LoggingService,
             private accountsService: AccountsService
  ) {}
//This is how we bring in a service we want to use in a component

  onCreateAccount(accountName: string, accountStatus: string) {
   this.accountsService.addAccount(accountName, accountStatus);
   // this.loggingService.logStatusChange(accountStatus)
  }
}
