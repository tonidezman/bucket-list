import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string;
  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit(token) {
    localStorage.setItem('token', token);
    this.router.navigate(['/buckets']);
  }
}
