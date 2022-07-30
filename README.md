# NyTimes

## How to run this project:
1. open command prompt in server directory to run the node APIs for fake jwt token, login and register functionality.
2. Execute `npm i` in server folder to install the required packages.
3. Then execute command `node server.js` to run backend webserver.
4. For frontend (angular website), go to the root directory of angular application and execute `npm i` to install required packages.
5. Then execute `npm run start` or `ng serve -o` in order to start angular application.
6. For executing unit tests, execute `ng test`.

## Important Note (For Cors Error):
If you face CORS error in the chrome browser, disable security of the browser following the given steps as below:
1. Go to the chrome directory where it is already installed,
2. then execute this command in CLI `chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security`
3. For example, `C:\Program Files\Google\Chrome\Application>chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security`
4. It will open up a security disabled chrome browser window, now just hit the url: `localhost:4200`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
