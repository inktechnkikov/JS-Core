function hierarchy() {

    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new Error('Error');
            }
        }

        toString() {
            return '';
        }
    }
    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        toString() {
            return `Circle - radius: ${this.radius}`;
        }

        get area() {
            return Math.PI * Math.pow(this.radius, 2);
        }
    }
    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        toString() {
            return `Rectangle - width: ${this.width}, height: ${this.height}`;
        }

        get area() {
            return this.width * this.height;
        }
    }
    return {Figure,Circle,Rectangle};
}
let circle = new Circle(8);
console.log(circle.toString());
let rect = new Rectangle(3,5);
console.log(rect.area);