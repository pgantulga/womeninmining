import { AuthService } from './../../../core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private location: Location,
              private authService: AuthService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  back(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      return this.location.back();
    });
  }
  googleLogin(): any {
    return this.authService.googleLogin()
      .then((res: any) => {
        if (res.firstTime) {
          console.log('first time');
          this.router.navigate(['/home']);
        } else {
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
      });
  }
}
