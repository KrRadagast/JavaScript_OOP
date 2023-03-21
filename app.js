console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class person{
    constructor(name,pets,residence,hobbies){
        this.name=name;
        this.pets=pets;
        this.residence=residence;
        this.hobbies=hobbies;
    }
    addHobby(hobby){
        this.hobbies.push(hobby);
    }
    removeHobby(hobbyRm){
        let foundEl=this.hobbies.indexOf(hobbyRm)
        this.hobbies.splice(foundEl,1);
    }
    greeting(){
        console.log(`hello ${this.name}, welcome to existence`);
    }
//     removeHobby(hobbyRmFi){
//         this.hobbies=this.hobbies.filter((element)=>){
//             return element !=hobbyRmFi;
//         }
//     }
}
class coder extends person{
    constructor(name,pets,residence,hobbies,occupation){
        super(name, pets,residence,hobbies,occupation)
        this.occupation=occupation
    }
    greeting(){
        console.log(`What up! I'm ${this.name} and I am a ${this.occupation}`)
    }
}
const ross = new person("Ross", 2, "Birmingham",["Kayak fishing","solving code", "looking cool"]);
const hayden= new coder ("Hayden", 1, "Birmingham",["video games","working out","guitar"],"software engineer")
ross.addHobby("lure making");
ross.removeHobby("kayak fishing");
ross.greeting();
console.log(ross);
console.log(hayden);
class calculator{
        result=0;
        add(a,b) {
            this.result=a+b;
            return this.result;
        }
        subtract(a,b) {
            this.result=a-b;
            return this.result;
        }
        multiply(a,b) {
            this.result=a*b;
            return this.result;
        }
        divide(a,b) {
            this.result=a/b;
            return this.result;
        }
        displayResult(){
            console.log(this.result)
        }
    }
    let calc= new calculator;
    calc.add(2,5);
    calc.displayResult();
    calc.subtract(5,2);
    calc.displayResult();
    calc.multiply(10,5);
    calc.displayResult();
    calc.divide(10,5);
    calc.displayResult();
