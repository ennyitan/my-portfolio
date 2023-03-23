import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cardArray : any[] = []
  parallax :any[]=[]
  
  commentForm!:FormGroup
  registered = false

  title = 'my-portfolio';
  buttonText = 'Save & Continue'
  date = new Date().getFullYear()
  showMenu : boolean = false
  @ViewChild('icon') private icon!:ElementRef
  @ViewChild('menuDiv') private menuDiv!:ElementRef


  ngAfterViewInit() {
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(e.target !== this.icon?.nativeElement && e.target!==this.menuDiv?.nativeElement){
          this.showMenu=false;
      }
    });
  }
  constructor(
    private renderer :Renderer2
  ) { }
  ngOnInit(): void {
    this.onCreateComment()
    this.cardArray = [
      {
        headerText: 'Solidity',
        details: 'Proficient in the use of solidity as a statically typed programming language for developing smart contracts that run on the Ethereum virtual machine',
        bgColor: 'orangeBg'
      },
      {
        headerText: 'Web3 js',
        details: 'Enabling the development of clients that interact with the Ethereum blockchain',
        bgColor: 'blackBg'
      },
      {
        headerText: 'Nodejs',
        details:  'Enabling the development of clients that interact with the Ethereum blockchain',
        bgColor: 'orangeBg'
      },
      {
        headerText: 'Technical Writing',
        details: 'Writing and drafting technical communication used in the blockchain field.',
        bgColor: 'blackBg'

      }
    ]
    
  
  }
  onCreateComment(){
    this.commentForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      body: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{12}")])
    })
  }
}
