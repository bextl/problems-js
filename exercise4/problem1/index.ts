class Person {
    name: string;
    age: number; 

    constructor(name: string, age: number){
        this.name = name; 
        this.age = age; 
    }
    compareAge(differentPerson: Person): string {
        if (this.age < differentPerson.age) {
          return `${differentPerson.name} is older than me.`;
        } else if (this.age > differentPerson.age) {
          return `${differentPerson.name} is younger than me.`;
        } else {
          return `${differentPerson.name} is the same age as me.`;
        }
      }
    }
    






export default Person;
