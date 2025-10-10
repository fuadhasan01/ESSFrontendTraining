Section 1: Getting Started

**001: What is Angular?**

Angular is a popular web application framework maintained by Google, designed to facilitate the development of single-page applications (SPAs). It provides a robust set of tools and features that allow developers to create dynamic, interactive web applications efficiently.

**002\. Why would you use Angular?**

- SPA → Loads once, no page reload
- Component-based → Reusable, modular code
- Two-way binding → Auto sync between UI and data
- Built-in tools → Routing, forms, HTTP, DI
- TypeScript → Early error check, maintainable code
- Google support → Stable and updated
- Scalable → Works for all project sizes

**003: Angular's Evolution & Stability**

- AngularJS (2010): JS-based, controller-scope model.
- Angular 2 (2016): Rewritten with TypeScript, component-based.
- Angular 4-8: Added CLI, AOT, HttpClient, lazy loading.
- Angular 9-12: Introduced Ivy, faster builds.
- Angular 13-18: Standalone components, signals, better performance.
- Stable: Regular updates, backward compatibility, Google support.

**004: Creating A New Angular Project**

- Install Node.js → required for Angular
- Install Angular CLI → npm install -g @angular/cli
- Create project → ng new project-name
- Go to folder → cd project-name
- Run app → ng serve --open
- Access in browser → <http://localhost:4200/>
- Folder structure → main code inside src/app/

**005: A New Starting Project & Analyzing The Project Structure**

my-angular-app/  
┣ e2e/ # End-to-end tests  
┣ node_modules/ # Installed npm packages  
┣ src/ # Main source code  
┃ ┣ app/ # Main application folder  
┃ ┃ ┣ app.component.ts # Root component TypeScript code  
┃ ┃ ┣ app.component.html# Root component HTML template  
┃ ┃ ┣ app.component.css # Root component CSS  
┃ ┃ ┣ app.module.ts # Root module defining components and imports  
┃ ┣ assets/ # Images, icons, fonts  
┃ ┣ environments/ # Configs for dev & prod environments  
┣ angular.json # Angular workspace configuration  
┣ package.json # Project dependencies & scripts  
┣ tsconfig.json # TypeScript configuration  
┣ .gitignore # Files ignored by Git

**006: Angular Components**

Angular Component (Summary):

- Small building block of an Angular app.
- Controls part of the UI.
- Has 3 files:
  - .ts → logic
  - .html → design
  - .css → style
- Defined using @Component decorator.
- Used in HTML by its selector.

**007: App Module**

AppModule (Summary):

- The main module of an Angular app.
- Found in app.module.ts.
- Tells Angular which components, modules, and services to use.
- Uses @NgModule decorator.
- Has 4 main parts: declarations, imports, providers, and bootstrap.

**008: Standalone Component**

Standalone Component (Summary):

- A component that does not need to be part of a module.
- Declared using standalone: true.
- Can import other standalone components or Angular modules directly.
- Makes apps simpler and faster to build.
- You can start the app directly from a standalone component using bootstrapApplication().

**009: Create New Component CLI**

ng g c Component-Name

**010: Component Selector Types**

| **Type**  | **Example**    | **Usage**                                |
| --------- | -------------- | ---------------------------------------- |
| Element   | 'app-hello'    | &lt;app-hello&gt;&lt;/app-hello&gt;      |
| Attribute | '\[appHello\]' | &lt;div appHello&gt;&lt;/div&gt;         |
| Class     | '.appHello'    | &lt;div class="appHello"&gt;&lt;/div&gt; |

**011: Data Binding**

Data Binding (Summary):

- It connects data between TypeScript (class) and HTML (template).
- Keeps UI and data in sync.
- 4 types of binding:
  - {{ }} → Interpolation
  - \[ \] → Property Binding
  - ( ) → Event Binding
  - \[( )\] → Two-way Binding

1️⃣ Interpolation {{ }}

- Direction: TS → HTML
- Use: Show data from component in HTML
- Example: &lt;h1&gt;{{ title }}&lt;/h1&gt;
- Note: Read-only, just displays value

2️⃣ Property Binding \[ \]

- Direction: TS → HTML
- Use: Bind component data to HTML element property
- Example: &lt;img \[src\]="imageUrl"&gt;
- Note: Updates element property dynamically

3️⃣ Event Binding ( )

- Direction: HTML → TS
- Use: Capture user events and call component methods
- Example: &lt;button (click)="doSomething()"&gt;Click&lt;/button&gt;
- Note: Only sends events to component

4️⃣ Two-way Binding \[( )\]

- Direction: Both ways (TS ↔ HTML)
- Use: Sync data between input elements and component
- Example: &lt;input \[(ngModel)\]="username"&gt;
- Note: Requires FormsModule

**012: Directives (Basics)**

Directives (Summary):

- Instructions to modify elements in Angular
- 3 types:
  - Component → directive with a template (UI)
  - Structural → change DOM structure (\*ngIf, \*ngFor)
  - Attribute → change appearance/behavior (\[ngStyle\], \[ngClass\])
