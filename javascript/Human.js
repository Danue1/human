function Human(id, name, age, description) {
  this.id = id === undefined ? "" : id;
  this.name = name === undefined ? "" : name;
  this.age = age === undefined ? 17 : age;
  this.description = description === undefined ? "" : description;
}

var human = new Human("@human", "human", 17, "new Human");

console.log(human);
