import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide, enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {AppRoot} from './app/member-app';


// enableProdMode()

bootstrap(AppRoot, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
])
.catch(err => console.error(err));
