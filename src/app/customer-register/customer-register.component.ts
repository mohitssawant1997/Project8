import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  private customer: Customer=new Customer();
  constructor(private service: RegisterService) { }

  ngOnInit(): void {
  }
  processRegistration(){
  this.service.register(this.customer).subscribe((response)=>{
    alert(response);
  })
}
}
