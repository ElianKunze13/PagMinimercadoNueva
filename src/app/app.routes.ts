import { Routes } from '@angular/router';

export const routes: Routes = [

    {path:"catalogo", loadComponent: () => import("./catalogo/catalogo.component").then(m=>
        m.CatalogoComponent) },

    {path:"infonegocio", loadComponent: () => import("./infonegocio/infonegocio.component").then(m=>
            m.InfonegocioComponent) },

    {path:"preguntasydudas", loadComponent: () => import("./preguntasfrec/preguntasfrec.component").then(m=>
                m.PreguntasfrecComponent) },

    {path:"comentarios", loadComponent: () => import("./comentarios/comentarios.component").then(m=>
                    m.ComentariosComponent) },

];
