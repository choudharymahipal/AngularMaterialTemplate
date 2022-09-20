import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'mahi-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit, AfterViewChecked {
  selectedConversation: boolean = true;
  form!: FormGroup;
  IamOnline:boolean=true;

  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      input: [null]
    });
  }

  ngOnInit(): void {

  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  ngAfterViewChecked() {

  }

  onSubmit() {
    this.scrollToBottom();
  }

}
