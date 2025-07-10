export default class User {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `User's name is ${this.name}`;
  }
}

// Named export: validateEmail function
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
