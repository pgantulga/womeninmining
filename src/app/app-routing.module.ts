import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlTree } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    data: {title: 'Нүүр хуудас'},
    loadChildren: () =>
      import('./views/homeview/homeview.module').then((m) => m.HomeviewModule),
  },
  // {
  //   path: 'about',
  //   data: {title: 'Тухай'},
  //   redirectTo: 'home/about',
  // },
  {
    path: 'admin',
    data: {title: 'Админ'},
    loadChildren: () =>
      import('./core/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'auth',
    data: {title: 'Нэвтрэх'},
    loadChildren: () =>
      import('./views/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'profile-settings',
    data: {title: 'Хэрэглэгчийн тохиргоо'},
    loadChildren: () =>
      import('./views/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'articles',
    data: {title: 'Бичвэрүүд'},
    loadChildren: () =>
      import('./views/article/article.module').then((m) => m.ArticleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
