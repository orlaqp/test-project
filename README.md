# DwApp

### Some context in order to review the project:

Even though the architecture for this angular project is not ready for big applications. It has some basic architecture concepts in it.

First, some base packages were installed and added to the application:

- Angular FlexLayout: https://github.com/angular/flex-layout

This module is used for layout purposes and it uses CSS flex layout under the hood.

- Angular Material: https://material.angular.io/

Library developed by the angular team that offer components, directives and standard platform to build applications that use the Material Design guidelines.

- CSS (base) Architecture

Under the folder (src/styles) there is basic a basic CSS architecture in palace grouped into two folders (abstract and base) these files contain some basic mixins and styles that can be used as foundation for any application.

In addition, the style.scss files contains the basis to support site themes through the Angular Material library (https://material.angular.io/) 

Please let me know if you need any clarification about the source code.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
