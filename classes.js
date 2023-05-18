class Car{
    // class property
    constructor(name){
        this.brand=name;
    }
    // class methood
    display(){
        return 'I have a ' + this.brand;
    }
}
// new object
const myCar=new Car('Ford');
const x=myCar.display();
console.log(x);

// Inheritance
class Model extends Car{
    constructor(name,price){
        super(name);
        this.price=price;
    }
    show(){
        return 'I have '+ this.display()+' & Price is:'+ this.price;
    }
}
const newCar=new Model("Ford","2000");
const z=newCar.show();
console.log(z);