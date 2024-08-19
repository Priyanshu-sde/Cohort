class Shape {
    constructor(color){
        this.color = color;
    }
    paint(){
        console.log(`Painted with ${this.color}`);
    }
}
class Rectangle extends Shape{
    constructor(width,height,color) {
        super(color);
        this.width = width;
        this.height = height;
        
    }

    area() {
        const area = this.width * this.height;
        return area;
    }
    
}

const rect = new Rectangle(20,40,'Blue');
rect.paint();
console.log(rect.area());