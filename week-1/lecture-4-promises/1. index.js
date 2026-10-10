// objects and arrays

let user = {
    name: "Rudra",
    age: 19,
    cities: ["roorkee", "bhuj", "madhapr", "ahmedabad"]
}

console.log(user.cities[2]);


class Shape{
    constructor(color){
        this.color = color;
    }

    paint(){
        console.log(`painted the rectangle with ${this.color} color`);
    }

    area(){
        return new Error(`area method not defined in the subclass`);//expects a area method in child class to override this method, else throw  an error
    }

    volume(){
        return `${this.area()} multiply depth`;
    }
}


// objects from class (different from the above objects -> have function inside themselves, and many more benefits)

class Rectangle extends Shape{
    constructor(height, width, color){
        super(color)
        this.width = width;
        this.height = height;
        // this.color = color;
    }

    static whoami(){
        return `I am a rectangle`;
    }

    area(){
        return this.height * this.width;
    }

    // paint(){
    //     console.log(`painted the rectangle with ${this.color} color`);
    // }
}

const r1 = new Rectangle(4,6,"Red");
const area = r1.area();
console.log(area);

console.log(Rectangle.whoami());



//inheritance

class circle extends Shape{
    constructor(radius, color){
        super(color)
        this.radius = radius;
        // this.color = color;
    }

    area(){
        return 3.14*this.radius*this.radius;
    }

    perimeter(){
        return 2*3.14*this.radius;
    }

    // paint(){
    //     console.log(`painted the rectangle with ${this.color} color`);
    // }
}

class square extends Shape{
    constructor(side, color){
        super(color)
        this.side = side;
        // this.color = color;
    }

    // area(){
    //     return this.side * this.side;
    // }
    perimeter(){
        return 4* this.side;
    }

    // paint(){
    //     console.log(`painted the rectangle with ${this.color} color`);
    // }
}

let s1 = new square(5,"blue");
console.log(s1.area());

let c1 = new circle(7,"pink");
console.log(c1.volume());