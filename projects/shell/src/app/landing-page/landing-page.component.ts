import { getManifest } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { CustomManifest, CustomRemoteConfig } from '../model/mf.model';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  //mảng chứa các cấu hình của remote modules
  remotes: CustomRemoteConfig[] = [];
  constructor() { }
  ngOnInit(): void {
    //lấy manifest của Module Federation, chứa thông tin cấu hình của các micro frontends
    const manifest = getManifest<CustomManifest>();

    //Lọc ra các remotes mà có viaRoute là true.
    //chọn những MFEs được cấu hình để tải qua routing.
    this.remotes = Object.values(manifest).filter((v) => v.viaRoute === true);
  }
}
