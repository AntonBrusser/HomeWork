import { addPlayer } from "@angular/core/src/render3/players";

export class Team{

    private name:string;
    private arr: Player[] = new Array();

    constructor(name:string){
        this.name = name;
    }

    public addPlayerToArray(Player:Player):void{
        this.arr.push(Player)
        }
   
        toString():string{
            return "Team" + " " + this.name + " " + this.arr.toString();
        }
        

        
}





export class Player{

    private name:string;
    private age:number;

    constructor ( name:string, age:number){
        this.name = name;
        this.age = age;
    }

    

    public toString():string{
        return  " " + this.name + "  " + this.age;
    }
    
}

