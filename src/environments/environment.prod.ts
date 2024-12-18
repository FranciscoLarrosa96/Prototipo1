export const environment = {
    production: true,
    API_AUTH: 'https://ecommerce2024-backend-production.up.railway.app/api',
    API_USER: 'https://ecommerce2024-backend-production.up.railway.app/api/user',
};
// Para generar el build usar este comando "ng build --configuration=prod" esto genera el dist para usar en la carpeta static del backendque se despliegue en produccion
// Para generar el build para github pages usar este comando "ng build --configuration=github-pages" y luego npx angular-cli-ghpages --dir=dist/ecommerce/browser para subir a github pages
