import { AuthService } from 'src/app/authentication/auth/auth.service';
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService= inject(AuthService);

  return authService.isRoleAdmin();
};
