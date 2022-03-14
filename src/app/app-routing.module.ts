import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlTree } from '@angular/router';
import { AuthGuard } from './core/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    data: { title: 'Нүүр хуудас', name: 'home' },
    loadChildren: () =>
      import('./views/homeview/homeview.module').then((m) => m.HomeviewModule),
  },
  {
    path: 'about',
    data: { title: 'Тухай', name: 'about' },
    redirectTo: 'home/about',
  },
  {
    path: 'board',
    data: { title: 'Зөвлөл', name: 'board' },
    redirectTo: 'home/board',
  },
  {
    path: 'stories',
    data: { title: 'Тэр эмэгтэйн түүх', name: 'stories' },
    loadChildren: () =>
      import('./views/story/story.module').then((m) => m.StoryModule),
  },
  {
    path: 'admin',
    data: { title: 'Админ', name: 'admin' },
    loadChildren: () =>
      import('./core/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'auth',
    data: { title: 'Нэвтрэх', name: 'auth' },
    loadChildren: () =>
      import('./views/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'profile-settings',
    redirectTo: 'auth/profile-settings',
  },
  {
    path: 'login',
    redirectTo: 'auth/login',
  },
  {
    path: 'articles',
    data: { title: 'Бичвэрүүд', name: 'articles' },
    loadChildren: () =>
      import('./views/article/article.module').then((m) => m.ArticleModule),
  },
  {
    path: 'conferences',
    data: { title: 'Чуулганууд', name: 'conferences' },
    loadChildren: () =>
      import('./views/conference/conference.module').then(
        (m) => m.ConferenceModule
      ),
  },
  { path: '**', redirectTo: '/error/not-found' },
  {
    path: 'error',
    loadChildren: () =>
      import('./views/error/error.module').then((m) => m.ErrorModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
