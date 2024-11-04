import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';  // Importa el proveedor de HttpClient
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
bootstrapApplication(AppComponent,  {
  providers: [
    provideRouter(routes),
    provideHttpClient()  
    // Asegúrate de que HttpClient esté correctamente registrado
  ]
})
  .catch((err) => console.error(err));
