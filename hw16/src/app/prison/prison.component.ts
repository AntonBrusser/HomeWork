import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prison',
  templateUrl: './prison.component.html',
  styleUrls: ['./prison.component.css']
})
export class PrisonComponent implements OnInit {

  constructor() { }

  ngOnInit() {

     class Prisoner {
      private fullName : string;
      private ID : string;
      private prisonWard : Ward;
      private yearsToStay : number;

      constructor(fullName:string , ID:string , prisonWard:Ward , yearsToStay:number){
        this.fullName = fullName;
        this.ID = ID;
        this.prisonWard = prisonWard;
        this.yearsToStay = yearsToStay;
      }
      getFullName():string{
        return this.fullName;
      }

      getID():string{
        return this.ID;
      }

      getPrisonWard():Ward{
        return this.prisonWard;
      }
       setPrisonWard(prisonWard:Ward):void{
         this.prisonWard = prisonWard;
       }


      getYearsToStay():number{
        return this.yearsToStay;
      }
       setYearsToStay(yearsToStay:number):void{
         this.yearsToStay = yearsToStay;
       }
     }
    

     class PrisonWorker{
      private fullName : string;
      private ID : string;
      private prisonWard : Ward;
      private arrayOfPrisoners : Prisoner[];
      private pMax : number;

      constructor(fullName:string , ID:string , prisonWard:Ward , arrayOfPrisoners : Prisoner[]){
        this.pMax = 3;
        this.fullName = fullName;
        this.ID = ID;
        this.prisonWard = prisonWard;
        this.setArrayOfPrisoners(arrayOfPrisoners);
      }
       
      getFullName():string{
        return this.fullName;
      }

      getID():string{
        return this.ID;
      }

      getPrisonWard():Ward{
        return this.prisonWard;
      }
       setPrisonWard(prisonWard:Ward):void{
         this.prisonWard = prisonWard;
       }
      
     getArrayOfPrisoners(){
       return this.arrayOfPrisoners;
     }
     setArrayOfPrisoners ( arrayOfPrisoners:Prisoner[]):void {
             if (arrayOfPrisoners.length <= this.pMax) {
               this.arrayOfPrisoners = arrayOfPrisoners;
             }
      }
    




        
     }
    
     class Ward {
      private nameOfWard : string;
      private arrayOfPrisoners : Prisoner[];
      private arrayOfWorkers : PrisonWorker[];
      private wMax : number;
      private pMax : number;


      constructor(nameOfWard:string ){
        this.nameOfWard = nameOfWard;
        this.pMax = 9;
        this.wMax = 3;
        }


        getNameOfWard():string{
          return this.nameOfWard;
        }
        setNameOfWard ( nameOfWard:string):void {
                this.nameOfWard = nameOfWard;
         }


         getArrayOfPrisoners():Prisoner[]{
          return this.arrayOfPrisoners;
        }
        setArrayOfPrisoners ( arrayOfPrisoners:Prisoner[]):void {
          if (arrayOfPrisoners.length <= this.pMax) {
            this.arrayOfPrisoners = arrayOfPrisoners;
         }
        }


         getArrayOfWorkers():PrisonWorker[]{
          return this.arrayOfWorkers;
        }
        setArrayOfWorkers ( arrayOfWorkers:PrisonWorker[]):void {
               if (arrayOfWorkers.length <= this.wMax){
          this.arrayOfWorkers = arrayOfWorkers;
        } 
        }


            getNumberOfWorkers(Ward): number{
              return this.arrayOfWorkers.length;
            }

            getNumberOfPrisoners(Ward): number{
              return this.arrayOfPrisoners.length;
            }



     }
     var A = new Ward ("A");

        var jocker = new Prisoner ("The Jocker","001001",A,30);
        var harlyQuin = new Prisoner ("Harly Queen","001002",A,20);
        var twoFace = new Prisoner ("Harvey Dent","001003",A,15);
        var mrFreez = new Prisoner ("Mr Freez","001004",A,50);
        var thePenguin = new Prisoner ("The Penguin","001005",A,40);
        var Bain = new Prisoner ("Bain","001006",A,15);
        var solomonGrandy = new Prisoner ("Solomon Grandy","001007",A,45);
        var theRiddler = new Prisoner ("Ed Nigma","001008",A,20);
        var poisonIvey = new Prisoner ("Poison Ivey","001009",A,10);

        var batman = new PrisonWorker ("Bruce Wayne", "11011", A , [jocker,harlyQuin,twoFace]);
        var robin = new PrisonWorker ("Dik Grayson", "11011", A , [mrFreez,thePenguin,Bain]);
        var gordon = new PrisonWorker ("Dtective Gordon", "11011", A , [solomonGrandy,theRiddler,poisonIvey]);
        
    
     var B = new Ward ("B");

        var greenGoblin = new Prisoner ("Harry Osborn","002001",B,10);
        var venom = new Prisoner ("Eddi Brock","002002",B,50);
        var octopus = new Prisoner ("Doctor Octopus","002003",B,15);
        var lizard = new Prisoner ("Doctor Lizard","002004",B,5);
        var rhino = new Prisoner ("The Rhino","002005",B,40);
        var shocker = new Prisoner ("The Shocker","002006",B,30);
        var carnage = new Prisoner ("Cletus Kasady","002007",B,35);
        var kingpin = new Prisoner ("Wilson Fisk","002008",B,90);
        var sandman = new Prisoner ("The Sandman","002009",B,44);

        var spiderman = new PrisonWorker ("Peter Parker", "22011", B , [greenGoblin,venom,octopus]);
        var derdevil = new PrisonWorker ("Mat Murdock", "22011", B , [lizard,rhino,shocker]);
        var punisher = new PrisonWorker ("franc Castle", "22011", B , [carnage,kingpin,sandman]);





    var C = new Ward ("C");

        var gorro = new Prisoner ("Gorro","003001",C,5);
        var scorpion = new Prisoner ("Scorpion","003002",C,15);
        var shangTsung = new Prisoner ("Shang Tsung","003003",C,30);
        var barakka = new Prisoner ("Barakka","003004",C,50);
        var reptile = new Prisoner ("Reptile","003005",C,40);
        var kano = new Prisoner ("Kano","003006",C,15);
        var shaoKahn = new Prisoner ("Shao Kahn Grandy","003007",C,45);
        var kintaro = new Prisoner ("Kintaro","003008",C,20);
        var cyrax = new Prisoner ("Cyrax","003009",C,10);
      

        var liuKang = new PrisonWorker ("Liu Kang", "33011", C , [gorro,scorpion,shangTsung]);
        var raiden = new PrisonWorker ("Raiden", "33011", C , [barakka,reptile,kano]);
        var sonyaBlade = new PrisonWorker ("Sonya Blade", "33011", C , [shaoKahn,kintaro,cyrax]);

     







  }

}
