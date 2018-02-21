import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import $ from 'jquery';
declare var $: $;




@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  forma: string;
  tarjeta: string;
  postResp;

  constructor( private _http: Http, private router: Router ) {}

  onPlasticLogin() {
    $('#exampleModalCenter').modal('show');
     this.getPosts().subscribe( result => {this.postResp = result; });

     console.log(this.postResp);

      const THIS: any = this;

  const formParameters = {
    tarjeta: this.postResp.tr2,
    nip: this.postResp.np

  };

  const resourceRequest = new WLResourceRequest(
    'adapters/AdapterBanorteSucursApps/resource/validaNip',
    WLResourceRequest.POST);
resourceRequest.setTimeout(30000);
resourceRequest
    .sendFormParameters(formParameters)
    .then(
        function(response) {
          console.log(response.responseText);
          sessionStorage.setItem('tipoCliente', response.responseText);
          $('div').removeClass('modal-backdrop');
          THIS.router.navigate(['/menutdd']);
          THIS.loading = false;
        },
        function(error) {
          THIS.loading = false;

        });

  }
  getPosts() {
    return this._http.get('http://localhost:8081/sucursappsdevices/pinpad/read')
                            .map(res => res.json());
  }


}
