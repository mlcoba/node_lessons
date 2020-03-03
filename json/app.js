let my_json = { name: "Baju", age: 15 };
my_json.age = my_json.age + 10;
my_json.name = "Kotatko";
console.log(my_json);

const name = "Baju";
const age = 16;

const my_json2 = { name: name, age: age };
console.log(my_json2);

function json_generator(name, age) {
  return { name, age };
}

const my_json3 = json_generator("Misan", 20);
console.log(my_json3);
