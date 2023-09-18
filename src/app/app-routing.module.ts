import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentComponent } from "./shared/components/layout/content/content.component"; 
import { content } from "./shared/routes/routes";
import { AuthGuard, NoAuthGuard } from "./core/guards/";

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full",
  }, 
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then((m) => m.AuthModule),
      canActivate: [NoAuthGuard],
  },
  
  {
    path: "dashboard",
    component: ContentComponent,
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      canActivate: [AuthGuard],
  },
  // {
  //   path: "",
  //   component: ContentComponent,
  //   children: content 
  // }, 
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [
    [
      RouterModule.forRoot(routes, {
        anchorScrolling: "enabled",
        scrollPositionRestoration: "enabled",
      }),
    ],
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
