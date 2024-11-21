import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Credentials } from '../interfaces/credentials.interface';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { AuthInfo, User } from '../interfaces/auth-info.interface';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly cookies = inject(CookieService);
  private readonly baseUrl = `${environment.apiUrl}/auth`;
  private readonly _user = signal<User | null>(null);
  private readonly _isAuthenticated = signal<boolean>(false);

  user = computed(() => this._user());
  isAuthenticated = computed(() => this._isAuthenticated());

  signIn(credentials: Credentials): Observable<AuthInfo> {
    const url = `${this.baseUrl}/login`;

    return this.http.post<AuthInfo>(url, credentials).pipe(
      tap((data) => {
        this.setAuthInfo(data);
      }),
      catchError((error) => this.handleError(error))
    );
  }

  signOut(): void {
    this.cookies.delete('token');
    this._user.set(null);
    this._isAuthenticated.set(false);
  }

  getToken(): string {
    return this.cookies.get('token');
  }

  setToken(token: string): void {
    this.cookies.set('token', token);
  }

  setAuthInfo(authInfo: AuthInfo): void {
    this.setToken(authInfo.token);
    this._user.set(authInfo.user);
    this._isAuthenticated.set(true);
  }

  handleError(error: any) {
    return throwError(
      () => error.error.message || 'Un error inesperado ha ocurrido'
    );
  }
}
