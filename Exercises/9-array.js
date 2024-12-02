"use strict";

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
  { name: "Marcus Aurelius", phone: "+380445554433" },
  { name: "Sasha", phone: "+380467552413" },
  { name: "Anton", phone: "+380538553633" },
];

const findPhoneByName = (name) => {
  for (const key of phonebook) {
    if (key.name === name) return key.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
