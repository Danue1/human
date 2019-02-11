package java;

public final class Human {
  private final String id;
  private final String name;
  private final int age;
  private final String description;

  public Human(String id, String name, int age, String description) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.description = description;
  }

  public String getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public String getDescription() {
    return description;
  }

  @Override
  public String toString() {
    return String.format("Human(id=%s, name=%s, age=%d, description=%s)", id, name, age, description);
  }
}
