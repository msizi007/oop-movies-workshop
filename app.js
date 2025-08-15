let sentence = "Hello World, I am Msizi";

for (let i = 0; i < 6; i++) {
  // console.log(sentence[i]);
}

let books = ["danger", "success", "warning", "speed", "primary", "primal"];

for (x of sentence) {
  // console.log(x);
}
console.log();

for (x of books) {
  // console.log(x);
}
console.log();

// objects => in
let marks = {
  tim: 87,
  steve: 76,
  jack: 84,
  wanbi: 62,
  gibben: 65,
};

for (x in marks) {
  // console.log(marks[x]);
}
console.log();

let i = 0;
while (i < 6) {
  console.log(i);
  i++;
}
