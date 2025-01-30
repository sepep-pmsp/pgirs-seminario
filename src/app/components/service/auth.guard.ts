import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const codigoAcesso = localStorage.getItem('codigo_acesso');

  if (codigoAcesso) {
    return true;
  } else {
    router.navigate(['live-palestra']);
    return false;
  }
};
