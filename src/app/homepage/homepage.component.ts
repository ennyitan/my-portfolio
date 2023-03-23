import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  cardArray : any[] = []
  parallax :any[]=[]
  
  commentForm!:FormGroup
  registered = false

  constructor( ) { }

  ngOnInit(): void {
    this.onCreateComment()
    this.cardArray = [
      {
        headerText: 'Certified Teachers',
        details: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
        bgColor: 'orangeBg'
      },
      {
        headerText: 'Special Education',
        details: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
        bgColor: 'blackBg'
      },
      {
        headerText: 'Book & Library',
        details: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
        bgColor: 'orangeBg'
      },
      {
        headerText: 'Sports Club',
        details: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
        bgColor: 'blackBg'

      }
    ]
    
    this.parallax = [
      {
        dNumber: 30,
        title: 'Certified Teachers'
      },
      {
        dNumber: 410,
        title: 'Students'
      },
      {
        dNumber: 18,
        title: 'Courses'
      },
       {
        dNumber: 320,
        title: 'Award Won'
      },
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
  // commentSubmit(dComment:any){
  //   this.registered = true
  //  if(this.commentForm.invalid){
  //   return 
  //  }else {
  //   console.log(dComment)
  //   // dComment.postId = 2
  //   this.commentService.createComment(dComment).subscribe(data=>{
  //     console.log(data)
  //   })
  //  }
  // }

}
