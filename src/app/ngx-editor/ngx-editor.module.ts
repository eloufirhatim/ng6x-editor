import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-bootstrap';
import { NgxEditorComponent } from './ng6x-editor.component';
import { NgxGrippieComponent } from './ngx-grippie/ngx-grippie.component';
import { NgxEditorMessageComponent } from './ng6x-editor-message/ng6x-editor-message.component';
import { NgxEditorToolbarComponent } from './ng6x-editor-toolbar/ng6x-editor-toolbar.component';
import { MessageService } from './common/services/message.service';
import { CommandExecutorService } from './common/services/command-executor.service';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PopoverModule.forRoot()],
  declarations: [NgxEditorComponent, NgxGrippieComponent, NgxEditorMessageComponent, NgxEditorToolbarComponent],
  exports: [NgxEditorComponent, PopoverModule],
  providers: [CommandExecutorService, MessageService]
})

export class NgxEditorModule { }
