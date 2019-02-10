function Human(name, id, age, description) {
  this.name = name === undefined ? "" : name;
  this.id = id === undefined ? "" : id;
  this.age = age === undefined ? 17 : age;
  this.description = description === undefined ? "" : description;
}

var human = new Human("Danuel", "@Danue1", 17, "new Human");

console.log(human);
