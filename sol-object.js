//pblm1
let me = {
    firstName :'sai',
    age : 25,
}
//prblm2
let dog = {
    name: 'cooby', 
    color : 'brown', 
    age : 6,
    goodBoy :true,
}
//pblm 3
console.log(dog.name)
//prblm4
console.log(dog['color'])
//pblm5
let favoriteThings={
    band : 'ZAQ',
    food: 'Indian',
    person: "myfather ",
     book : '3 mistakes of my life',
     movie : 'jack the jaint sellors',
    holiday : ' thanksgiven'

}
 favoriteThings.car = 'toyota'
 favoriteThings.brand = 'nike' 
 console.log(favoriteThings)
 //
    favoriteThings .food ='chiken Nuggets'
    favoriteThings ['books'] ='hary potter'
    console.log(favoriteThings)
//prblm 6
var user = {
    name: 'Bryan',
    age: 24,
    pwHash: 'U+Ldlngx2BYQk',
    email: 'BryanSmith33@gmail.com',
    birthday: '05/02/1990',
    username: 'bryansmith33'
  };
   user.name ='Bryan G.smith'
   user.email =  'bryan.smith@devmounta.in'
   console.log(user)
   //prblm7
   delete user .age;
   console.log(user)
   //prblm 8
   class cat{
       constructor(name,age,color){
           this.name = name
           this.age = age
           this.color= color
       }
       getname(){
        console.log(`mycat${this.name} , ${this.age}her ${this.color}`)
    }
   } 

   const callie = new cat ('callie',4,'black');
   console.log(callie.name)
//prblm 9
class Wizard{
    constructor( name, age, favoriteSpell){
        this.name = name
        this.age = age 
        this.favoriteSpell =favoriteSpell
    }
   
castspell() {
    console.log(`${this.name} "has cast" ${this.favoriteSpell}`)
 }
}
 const snape = new Wizard ('snape',5,'spellscary');
 snape.castspell()
//prblm 10
class phone {
    constructor (brand, model, storage, color, price,sold){
        this.brand=brand
        this.model =model
        this.storage =storage
        this. color = color
        this.price =price
        this.sold = false;
    };

     sell() {
        this.sold =true;
        console.log(`${this.brand} has me ${this.model} has been sold .`)
    };
    changePrice(newPrice){
        this.price=newPrice
    
    };
    
    
}  


const newPhone = new phone ('Apple','12pro',128,'white',1000);
const newPhone2 = new phone('samsung', '12max',256,"blue",1200);
const newPhone3 = new phone('oneplus', '9pro',64,"red",1100);
newPhone.sell ()
console.log(newPhone)
newPhone2.changePrice (2000)
console.log(newPhone2)

//prblm11
const colors = {
    background: 'red',
    highlight: 'blue',
    text: 'yellow'
  }
  const colorsCopy = {...colors}
  console.log(colorsCopy)
  ///////
  const contactInfo = {
    firstName: 'Helen',
    lastName: 'Parr',
    phoneNumber: 1234445555,
    email: 'helen@mymail.com',
  }
  
  const shippingInfo = {
    firstName: 'Helen',
    lastName: 'Parr',
    street: '100 E. Main Street',
    city: 'Anytown',
    state: 'AZ',
    zipCode: 85004,
  }
let helensInfo = {...contactInfo , ...shippingInfo}
console.log(helensInfo)


//prblm12
class Vehicle {
    constructor(capacity,color, mileage){
        this.capacity = capacity
        this.color = color
        this.mileage =mileage
    }
    move(miles){
        this.mileage = mileage
console.log(move)
    }
     

}




