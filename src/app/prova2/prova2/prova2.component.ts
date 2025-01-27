import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova2',
  templateUrl: './prova2.component.html',
  styleUrls: ['./prova2.component.css']
})
export class Prova2Component implements OnInit {

comment: string = '';

  onSubmit(value: string) {
    this.comment = value.trim();
  }
  hoCliccato() {
    if(confirm("Are you sure to like this post?")) {
      alert("You have liked this post");
    }
  }


  isDisabled:Boolean = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.isDisabled = !this.isDisabled;
    }, 5000);
  }

  texts= [
    {
    name:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
  },];




}
