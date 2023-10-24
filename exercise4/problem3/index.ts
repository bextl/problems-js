// Update it as much as you want, just don't change the name

export class Circle {
    radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  // Update it as much as you want, just don't change the name
  export class Rectangle {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  }
  
 // Update it as much as you want, just don't change the name
  export function sumOfAllAreas(...shapes: (Circle | Rectangle)[]): number {
    let totalArea = 0;
    for (const shape of shapes) {
      totalArea += shape.getArea();
    }
    return totalArea;
  }
  