"use strict";

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = (name, city) => {
  const obj1 = { name: "Masha" };
  let obj2 = { name: "Dasha" };

  obj1.name = "Sasha";
  obj2.name = "Lena";

  obj2 = { name: "kirill" };
  return { name: name, city: city };
};

module.exports = { fn };
