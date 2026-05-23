"use strict"
let base = { role: "user" };

let user = Object.create(base, {
role: { value: "admin", writable: false, configurable: false }
});

delete user.role;
console.log(user.role);
