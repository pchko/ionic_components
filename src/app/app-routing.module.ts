import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./pages/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./pages/buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./pages/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./pages/date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./pages/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./pages/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'list-sliding',
    loadChildren: () => import('./pages/list-sliding/list-sliding.module').then( m => m.ListSlidingPageModule)
  },
  {
    path: 'list-reorder',
    loadChildren: () => import('./pages/list-reorder/list-reorder.module').then( m => m.ListReorderPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'progress-bar',
    loadChildren: () => import('./pages/progress-bar/progress-bar.module').then( m => m.ProgressBarPageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./pages/refresher/refresher.module').then( m => m.RefresherPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
