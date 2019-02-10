<template>
  <div>
    <div>{{id}}</div>
    <div>{{name}}</div>
    <div>{{age}}</div>
    <div>{{description}}</div>
  </div>
</template>

<script>
export default {
  name: "Human",
  data() {
    return {
      id: "@human",
      name: "human",
      age: 17,
      description: "New Human"
    };
  }
};
</script>
