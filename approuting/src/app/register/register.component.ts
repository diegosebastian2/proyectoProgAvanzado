import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsersService]
})
export class RegisterComponent implements OnInit {
  public registerForm;
  constructor(public fb: FormBuilder, public userss: UsersService) {

      this.registerForm = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      email: ["", Validators.required],
      pass: ["", Validators.required]

    });

   }
   doRegister(){
     this.userss.createUser(this.registerForm.value);
   }
  ngOnInit() {


  }

}
