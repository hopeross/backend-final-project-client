export class User {
    userId?: string;
    email?: string;
    password?: string;
    userName?: string;
    firstName?: string;
    lastName?: string;
    location?: string;
    title?: string;
  
    constructor(userId?: string, email?: string, password?: string, userName?: string, firstName?: string, lastName?: string, location?: string, title?: string) {
      this.userId = userId;
      this.email = email;
      this.password = password;
      this.userName = userName;
      this.firstName = firstName;
      this.lastName = lastName;
      this.location = location;
      this.title = title;
    }
}