import Foundation

struct Human {
    let name: String
    let id: String
    let age: Int
    let description: String
    
    init(name: String, id: String, age: Int, description: String) {
        self.name = name
        self.id = id
        self.age = age
        self.description = description
    }
}

let human = Human(name: "@human", id: "human", age: 17, description: "New Human")
print(human)
