import { getManifest } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { CustomManifest, PluginOptions } from '../model/mf.model';
@Component({
  selector: 'app-shell-home',
  templateUrl: './shell-home.component.html',
  styleUrls: ['./shell-home.component.scss'],
})
export class ShellHomeComponent implements OnInit {
  options: PluginOptions[] = [];
  constructor() {}
  ngOnInit(): void {
    const manifest = getManifest<CustomManifest>();

    // filter remote mfe's which needs to loaded inside page (not via route)
    this.options = Object.values(manifest).filter(
      (v) => v.withInPage === true
    ) as PluginOptions[];
  }
}
