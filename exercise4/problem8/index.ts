class Calculator {
    
    private value: number;

    constructor(initialValue: number) {
      this.value = initialValue;
    }
  
    add(num: number): this {
      this.value += num;
      return this;
    }
  
    subtract(num: number): this {
      this.value -= num;
      return this;
    }
  
    divide(num: number): this {
      this.value /= num;
      return this;
    }
  
    multiply(num: number): this {
      this.value *= num;
      return this;
    }
  
    logResult(): this {
      console.log(this.value);
      return this;
    }
  }
  

export default Calculator;
