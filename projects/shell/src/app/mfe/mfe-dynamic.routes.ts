import { getManifest, loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";
import { routes } from "../app-routing.module";
import { CustomManifest } from "../model/mf.model";

export function buildRoutes(): Routes {
    const lazyRoutes = Object.entries(getManifest<CustomManifest>())
        .filter(([key, value]) => {
            return value.viaRoute === true
        })
        .map(([key, value]) => {
            return {
                path: value.routePath,
                loadChildren: () => loadRemoteModule({
                    type: 'manifest',
                    remoteName: key,
                    exposedModule: value.exposedModule
                }).then(m => m[value.ngModuleName!])
                .catch(err => {
                  console.error(`Lỗi khi tải module từ ${key}:`, err);
                  // Điều hướng đến một module lỗi
                  return import('../error/error.module').then(m => m.ErrorModule);
              })
            }
        });
    const notFound = [
        {
            path: '**',
            redirectTo: ''
        }]
    // { path:'**', ...} needs to be the LAST one.
    return [...routes, ...lazyRoutes, ...notFound]
}
