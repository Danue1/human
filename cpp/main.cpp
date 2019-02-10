#include <string>
#include <iostream>
#include "human"

const ::human human
{
  "Danuel",
  "@Danue1",
  "best code monkey"
};

int main () {
  std::cout << "id: " << human.id << "\n";
  std::cout << "name: " << human.name << "\n";
  std::cout << "age: " << human.age << "\n";
  std::cout << "description: " << human.description << "\n";

  return 0;
}
