import { Component, OnInit } from '@angular/core';
import { visitRootRenderNodes } from '@angular/core/src/view/util';

import { Citizen } from './Citizen';
import { PartyMember } from './PartyMember';
import { Miflaga } from './Miflaga';


@Component({
  selector: 'app-goverment',
  templateUrl: './goverment.component.html',
  styleUrls: ['./goverment.component.css']
})
export class GovermentComponent implements OnInit {

  Page1:boolean;
  Page2:Boolean;
  Page3:Boolean;
  Page4:Boolean;
  smallDiv1:boolean;
  smallDiv2:boolean;
  arryOfPartyMembers:PartyMember[]=new Array();
  arryOfPartyMembers1:PartyMember[]=new Array();
  arryOfPartyMembers2:PartyMember[]=new Array();
  arryOfPartyMembers3:PartyMember[]=new Array();
  name:string;
  id:number;
  arrayOfMiflaga:Miflaga[]=new Array();
  
  numberIDinput:number;
  IDOfMangerinput:number;
  voteRandNum: number ;
  showVoteRandNum:boolean ;
  i:number;
  y:number;

  tempID:number[];
  tempName:string[];


 

  isPage2(){
    this.Page1 = false;
    this.Page2 = true;
  }
  isPage3(){
    this.Page2 = false;
    this.Page3 = true;
  }
  isPage4(){
    this.Page3 = false;
    this.Page4 = true;
  }
  isPage1(){
    this.Page4 = false;
    this.Page1 = true;
    this.showVoteRandNum = false;
    this.smallDiv1 = true; 
    this.smallDiv2 = true;
    this.i = 0;
    this.y = 0;
    this.arryOfPartyMembers = [];
    this.arrayOfMiflaga = [];
  }


  VoteRandNum(){
    this.showVoteRandNum = true;
    this.voteRandNum =  Math.floor(Math.random() * 3 ) + 1
  }


  



    
  //     createPartyMembers():void{
       
  //       if (this.i < 3){
  //         this.arryOfFirstPartyMembers[this.i] = new PartyMember(this.name,this.id);
          
         
  //     //  alert("the" + this.i + "member:" +  this.arryOfPartyMembers1[this.i].getId() + " " + this.arryOfPartyMembers1[this.i].getName() );
        
       
  //     }
  //       if (this.i < 6 && this.i > 2){
  //         this.arryOfPartyMembers2[this.i] = new PartyMember(this.name,this.id);
          
          
  //               }
  //        if (this.i < 9 && this.i > 5){
  //         this.arryOfPartyMembers3[this.i] = new PartyMember(this.name,this.id);
         
      
  //               }
  //       if ( this.i == 8) {
  //         this.smallDiv1 = false;
  //       }
  //       if (this.i == 9) {
  //         this.Page2 = false;
  //         this.Page3 = true;
  //          }

  //         //  this.tempID[this.i-1] =  this.arryOfPartyMembers1[this.i-1].getId();
  //         //  this.tempName[this.i-1] = this.arryOfPartyMembers1[this.i-1].getName();
  //         //  alert (this.tempName[this.i-1] + " " + this.tempName[this.i-1]);
          
          
  //         this.i++; 


  // }

  
  createMiflaga():void{
    debugger;
   if (this.y==0){
    this.arrayOfMiflaga[this.y] = new Miflaga(this.numberIDinput,this.arryOfPartyMembers1);
    }
   if (this.y==1){
    this.arrayOfMiflaga[this.y] = new Miflaga(this.numberIDinput,this.arryOfPartyMembers2);
   }
   if (this.y==2){
    this.arrayOfMiflaga[this.y] = new Miflaga(this.numberIDinput,this.arryOfPartyMembers3);
    this.smallDiv2 = false;
   }
   if (this.y==3){
    this.Page3 = false;
    this.Page4 = true;
   }
   this.y++;
  }

 


  createPartyMembers():void{
       
    
      this.arryOfPartyMembers[this.i] = new PartyMember(this.name,this.id);
    
    if ( this.i == 8) {
      this.smallDiv1 = false;
    }
    if (this.i == 9) {
      this.Page2 = false;
      this.Page3 = true;
       }     
      this.i++; 
     }


 




  constructor() { }

  ngOnInit() {

    this.Page1 = true;
    this.Page2 = false;
    this.Page3 = false;
    this.Page4 = false;
    this.smallDiv1 = true;
    this.smallDiv2 = true;
    this.showVoteRandNum = false;
    this.i = 0;
    this.y = 0;

    

    

  }
}
