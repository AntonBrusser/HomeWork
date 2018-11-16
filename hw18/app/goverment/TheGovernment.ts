import { Miflaga } from './Miflaga';

export class Government{
    private arrayOfMiflaga:Miflaga[];
    private biggestMifSize:number;
    private primeMinsterId:number;
    constructor(arrayOfMiflaga){
      this.arrayOfMiflaga=arrayOfMiflaga;
      
    }
    public getMifArr():Miflaga[]{
      return this.arrayOfMiflaga;
    }
    public getBiggestMifSize():number{
      return this.biggestMifSize;
    }
    public getPrimeMisnterID():number{
      return this.primeMinsterId;
    }
    public electedPrimeMister():void{
      var i:number;
      this.biggestMifSize=0;
      for(i=0;i<this.arrayOfMiflaga.length;i++){
        if(this.getMifArr[i].getConfSize()>this.biggestMifSize){
          this.primeMinsterId=this.arrayOfMiflaga[i].getIDOfManger();
          this.biggestMifSize=this.arrayOfMiflaga[i].getConfSize();
        }

      }
    }



  }