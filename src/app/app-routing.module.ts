import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./views/homeview/homeview.module').then(m => m.HomeviewModule) },
  { path: 'admin', loadChildren: () => import('./core/admin/admin.module').then(m => m.AdminModule) },
  { path: 'auth', loadChildren: () => import ('./views/auth/auth.module').then(m => m.AuthModule)},
  { path: 'profile-settings', loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)},
  { path: 'articles', loadChildren: () => import('./views/article/article.module').then(m => m.ArticleModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
