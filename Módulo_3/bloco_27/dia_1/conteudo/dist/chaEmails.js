"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emails_1 = __importDefault(require("./emails"));
const mailList_1 = __importDefault(require("./mailList"));
// Para testar
const email1 = new emails_1.default('me@personalmail.com', 'friend@personalmail.com', 'Car wash', 'There\'s a new car wash in town. Did you know?');
const email2 = new emails_1.default('friend@personalmail.com', 'me@personalmail.com', 'Reply - Car wash', 'Great! My car is really dirty. How much do they charge?');
const email3 = new emails_1.default('me@personalmail.com', 'friend@personalmail.com', 'Reply - Reply - Car wash', '$5.00, and you get a free polishing cloth');
const email4 = new emails_1.default('me@companymail.com', 'ceo@companymail.com', 'Day off monday', `Next Tuesday is a holiday.
  Are we going to work on Monday?`);
const email5 = new emails_1.default('ceo@companymail.com', 'me@companymail.com', 'Reply - Day off monday', 'The entire company will have a day off on monday =D');
const personalMailList = new mailList_1.default([email1, email2, email3]);
// const professionalMailList = new MailList([email4, email5]);
// console.log('------ personalMailList.getByEmailFrom(\'me@personalmail.com\'):');
// personalMailList.getByEmailFrom('me@personalmail.com').forEach(
//   (mail) => console.log(mail.content)
// );
console.log(personalMailList.all);
console.log("antes de remover");
personalMailList.removeEmail(email1);
console.log("depois de remover");
console.log(personalMailList.all);
console.log("email2 fom:", email2.from);
console.log(personalMailList.getBySubject("Reply"));
// const email6 = new Email(
//   'me@personalmail.com',
//   'friend2@personalmail.com',
//   'Day off monday',
//   `Oh yes!
//    My boss says we\'ll have Monday off.
//    Want to go to the movies?`
// );
// personalMailList.addEmail(email6);
// personalMailList.addEmail(email5); // Adicionado erroneamente
// console.log('------ personalMailList.getBySubject(\'Day off\'):');
// personalMailList.getBySubject('Day off').forEach(
//   (mail) => console.log(mail.content)
// );
// personalMailList.removeEmail(email5);
// console.log('------ professionalMailList.all:');
// professionalMailList.all.forEach(
//   (mail) => console.log(mail.content)
// );
// console.log('------ personalMailList.all:');
// personalMailList.all.forEach(
//   (mail) => console.log(mail.content)
// );
