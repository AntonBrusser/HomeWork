import { PartyMember } from './PartyMember';

export class Miflaga {
    private numberID:number;
    private arryOfPartyMembers:PartyMember[];
    private IDOfManger:number;
    
    constructor(numberID:number,arryOfPartyMembers:PartyMember[]){
      this.numberID=numberID;
      this.arryOfPartyMembers=arryOfPartyMembers;

  }

  public GetconfArr():PartyMember[]{
    return this.arryOfPartyMembers;
  }
  public getNumberID():number{
    return this.numberID;
  }
  public getIDOfManger():number{
    return this.IDOfManger;
  }
  private setIDOfManger(ID:number){
    this.IDOfManger=ID;
  }
  public getConfSize():number{
    return this.arryOfPartyMembers.length;
  }
  public ChangeTheIdOfTheManger(){
    var i;
    for(i=0;i<this.getConfSize();i++){
      if (this.arryOfPartyMembers[i].getManager()==true){
        this.setIDOfManger(this.arryOfPartyMembers[i].getId());
        break;
      }
    }
  }
}