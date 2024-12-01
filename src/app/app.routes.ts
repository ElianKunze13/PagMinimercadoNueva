import { Routes } from '@angular/router';

export const routes: Routes = [

    {path:"inicio", loadComponent: () => import("./components/main/main.component").then(m=>m.MainComponent) },

    {path:"catalogo", loadComponent: () => import("./components/secciones/catalogo/catalogo.component").then(m=>
        m.CatalogoComponent) },

    {path:"infonegocio", loadComponent: () => import("./components/secciones/infonegocio/infonegocio.component").then(m=>
            m.InfonegocioComponent) },

    {path:"preguntasydudas", loadComponent: () => import("./components/secciones/preguntasfrec/preguntasfrec.component").then(m=>
                m.PreguntasfrecComponent) },

    {path:"comentarios", loadComponent: () => import("./components/secciones/comentarios/comentarios.component").then(m=>
                    m.ComentariosComponent) },

];
