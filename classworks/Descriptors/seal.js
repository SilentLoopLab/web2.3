'use strict';

const room = {
  table: "Red",
  chairs: 4
};

Object.seal(room);

room.table = "Green"; 

room.window = true; // TypeError: Cannot add property window, object is not extensible
delete room.chairs; // TypeError: Cannot delete property 'chairs' of #<Object>
console.log(room); 