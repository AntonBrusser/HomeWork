import { Citizen } from './Citizen';

export  class PartyMember extends Citizen{
    public name:string;
    private id:number;
    private primeManagerVoteID:number;
    private manager:boolean;

        constructor(name:string,id:number){
          super ();
          this.name = name;
          this.id = id;
          
           }
      
           public  getName():string{
        return this.name;
      }
      public getId():number{
        return this.id;
      }
      public  getManager():boolean{
     return this.manager;
        }
      

        public setManager ( isManager:boolean):void {
        this.manager = isManager;
          }
        
       public ChangePrimeManagerVoteID(vote:number){
          if (this.id != vote   ){
            this.primeManagerVoteID = vote;
          }
        } 
      }