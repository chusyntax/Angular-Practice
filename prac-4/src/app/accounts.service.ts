import { Injectable } from "@angular/core";

//This tells Angular that this service in Injectable/ something can be injected into there

//You add @Injectable to the service where you want to inject (The receiving service)
@Injectable()
export class AccountsService {

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      addAccount(name: string, status: string){
        this.accounts.push({name: name, status: status})
      }

      updateStatus(id: number, status: string){
        this.accounts[id].status = status;
      }

}