export class User {
    email?: string;
    password?: string;
    userName?: string;
    firstName?: string;
    lastName?: string;
    location?: string;
    title?: string;
  
    constructor(email?: string, password?: string, userName?: string, firstName?: string, lastName?: string, location?: string, title?: string) {
      this.email = email;
      this.password = password;
      this.userName = userName;
      this.firstName = firstName;
      this.lastName = lastName;
      this.location = location;
      this.title = title;
    }
}