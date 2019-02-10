mod human;

const HUMAN: human::Human = human::Human {
  id: "@human",
  name: "human",
  age: 17,
  description: "New Human"
};

fn main () {
  println!("{:?}", HUMAN);
}
