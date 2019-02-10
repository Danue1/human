#[derive(Debug)]
pub struct Human {
  pub id: &'static str,
  pub name: &'static str,
  pub age: u8,
  pub description: &'static str
}
