import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface Server {
  id: number;
  name: string;
  status: string;
}
@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Server | Observable<Server> | Promise<Server> {
    const id = +route.params['id'];
    const server = this.serversService.getServer(id);
    if (server) {
      return server;
    } else {
      this.router.navigate(['/not-found']);
      return { id, name: 'Redirecting...', status: 'unknown' };
    }
  }
}
