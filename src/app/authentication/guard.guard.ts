import { inject } from '@angular/core';

import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

export const guardGuard: CanActivateFn = (route, state) => {
  const   authService=inject(AuthService);

  //si utilizza l' iniettore invece di utilizzre il costruttore poicheé non è fornito
  const router =inject(Router);

  return authService.isAutentificated();
};
