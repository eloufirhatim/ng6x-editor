# NgxEditor

<p align="center">
  <a href="https://github.com/fulte004/ng6x-editor">
   <img src="https://raw.githubusercontent.com/Sibiraj-S/ng6x-editor/master/src/assets/icons/ng6x-editor.png" alt="ngxEditor">
  </a>
</p>
<p align="center">A Simple WYSIWYG Editor for Angular6+ Applications.</p>
<p align="center">
  <a href="https://travis-ci.org/Sibiraj-S/ng6x-editor">
    <img alt="Build Status" src="https://travis-ci.org/Sibiraj-S/ng6x-editor.svg?branch=master">
  </a>
  <a href="https://www.npmjs.com/package/ng6x-editor">
    <img alt="npm version" src="https://img.shields.io/npm/v/ng6x-editor.svg">
  </a>
  <a href="https://www.npmjs.com/package/ng6x-editor">
    <img alt="npm" src="https://img.shields.io/npm/dm/ng6x-editor.svg">
  </a>
  <a href="https://github.com/Sibiraj-S/ng6x-editor/blob/master/LICENSE">
    <img alt="licence" src="https://img.shields.io/npm/l/ng6x-editor.svg">
  </a>
</p>

## Getting Started

### Installation

Install via Package managers such as [npm][npm] or [yarn][yarn]

```bash
npm install ng6x-editor --save
# or
yarn add ng6x-editor
```

### Usage

Import `ng6x-editor` module

```typescript
import { NgxEditorModule } from 'ng6x-editor';

@NgModule({
  imports: [ NgxEditorModule ]
})
```

Import [font-awesome](https://github.com/FortAwesome/Font-Awesome) into your application

Then in HTML

```html
<app-ng6x-editor [placeholder]="'Enter text here...'" [spellcheck]="true" [(ngModel)]="htmlContent"></app-ng6x-editor>
```

For `ngModel` to work, You must import `FormsModule` from `@angular/forms`

#### PeerDependencies

`ng6x-editor` depeneds on the following libraries to work.

* [Font-Awesome v5.2.0](https://github.com/FortAwesome/Font-Awesome)
* [Ngx-Bootstrap](https://github.com/valor-software/ngx-bootstrap)

## Compatibility

All Evergreen-Browsers are supported

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Opera

## Demo

Demo at stackblitz [ng6x-editor](https://ng6x-editor.stackblitz.io/)

## Documentation

Documentation is auto-generated using [compodoc][compodoc], and can be viewed here: [https://sibiraj-s.github.io/ng6x-editor/](https://sibiraj-s.github.io/ng6x-editor/)

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/lang/en/
[github]: https://fulte004.github.io/
[wiki]:https://github.com/Sibiraj-S/ng6x-editor/wiki/ngxEditor
[compodoc]: https://compodoc.github.io/website/
