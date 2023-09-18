import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"],
})
export class MyAccountComponent implements OnInit {
  public userName: string;
  public profileImg: "assets/images/dashboard/profile.jpg";

  constructor(public router: Router,
    public authService: AuthService,) {
    if (JSON.parse(localStorage.getItem("user"))) {
    } else {
    }
  }

  ngOnInit() { }

  logoutFunc() {
    this.authService.logout().subscribe({
      next: (value) => { 
        if (!value) { 
          this.router.navigateByUrl('auth/login');
        }
      },
    });
  }
}
