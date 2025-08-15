let sentence = "Hello World, I am Msizi";

for (let i = 0; i < 6; i++) {
  // console.log(sentence[i]);
}

let i = 0;
for (; i < 6; ) {
  // console.log(i);
  i++;
}

let books = ["danger", "success", "warning", "speed", "primary", "primal"];

for (x of sentence) {
  // console.log(x);
}

for (x of books) {
  // console.log(x);
}

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

i = 0;

while (i < 6) {
  console.log(i);
  i++;
}

let condition = false;

do {
  console.log("Do while is running...");
  condition = false;
} while (condition);

let j = 10;

do {
  console.log("This is another do while running...");
  j++;
} while (j < 6);
