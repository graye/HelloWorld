export class User {
    name: string;
    age: number;
    weight: number;
    height: number;

    isOld():boolean{
        if(this.age>=100){
            return true;
        }
        else{
            return false;
        }
    }

    getBMI():number{
        return (this.weight * 10000)/(this.height * this.height);
    }

    isHealthy():boolean{
        return this.getBMI() >= 18.5 && this.getBMI() <= 24.9;
    }

    constructor(name:string, age:number, password:string, height:number, weight:number){
        this.name = name;
        this.age=age;
        this.height=height;
        this.weight=weight;
    }
}
