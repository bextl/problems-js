class Name {
    private _firstName: string;
    private _lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this._firstName = this.capitalizeName(firstName);
      this._lastName = this.capitalizeName(lastName);
    }
  
    get firstName(): string {
      return this._firstName;
    }
  
    get lastName(): string {
      return this._lastName;
    }
  
    get fullName(): string {
      return `${this._firstName} ${this._lastName}`;
    }
  
    get initials(): string {
      return `${this._firstName.charAt(0)}.${this._lastName.charAt(0)}`;
    }
  
    private capitalizeName(name: string): string {
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }
  }
export default Name;
