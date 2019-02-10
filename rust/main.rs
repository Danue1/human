mod human;

const HUMAN: human::Human = human::Human {
  name: "Danuel",
  id: "@_danuel_",
  age: 17,
  description: "best code monkey"
};

fn main () {
  println!("{:?}", HUMAN);
}
