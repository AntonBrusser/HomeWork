export class Citizen{
    vote:number;
        constructor (){
          this.vote = Math.floor(Math.random() * 3 ) + 1; 
        }
    getVote():number{
      return this.vote
    }     
  }