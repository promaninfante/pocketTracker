import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalVariablesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalVariablesProvider {
  public incomeTransactions: Array<{value: Number, description:string}>=[
    {
      value: 35,
      description: "Payed Jeffrey a Debt"
    },
    {
      value: 80,
      description: "Bought tshirt"
    }
  ];
  public expenseTransactions: Array<{value: Number, description:string}>=[
    {
      value: 135,
      description: "Wendys"
    },
    {
      value: 280,
      description: "Bought shoes"
    }
  ];
}
