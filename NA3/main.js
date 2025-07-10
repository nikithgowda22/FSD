import User, { validateEmail } from './user.js';

const user = new User('Alice');
console.log(user.getInfo());

const email = 'nikithgmailcom';
console.log(`Is "${email}" a valid email?`, validateEmail(email));
