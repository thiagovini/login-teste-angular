import {Component} from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  visablePass:boolean = true;
  changeTypePass = true;

  email:string = '';
  password:string = '';

  showPass(){
    this.visablePass = !this.visablePass
    this.changeTypePass = !this.changeTypePass
  }
  
  login(){
    console.log(this.email, this.password)
  }

  register(){
    console.log('register')
  }

  ngOnInit(){
    $(document).ready(function(){
        $('.login-info-box').fadeOut();
        $('.login-show').addClass('show-log-panel');
    });
    
    
    $('.login-reg-panel input[type="radio"]').on('click', function() {
        if($('#log-login-show').is(':checked')) {
            $('.register-info-box').fadeOut(); 
            $('.login-info-box').fadeIn();
            
            $('.white-panel').addClass('right-log');
            $('.register-show').addClass('show-log-panel');
            $('.login-show').removeClass('show-log-panel');
            
        }
        else if($('#log-reg-show').is(':checked')) {
            $('.register-info-box').fadeIn();
            $('.login-info-box').fadeOut();
            
            $('.white-panel').removeClass('right-log');
            
            $('.login-show').addClass('show-log-panel');
            $('.register-show').removeClass('show-log-panel');
        }
    });
  }
}
