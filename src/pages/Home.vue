<template>
  <div>
    Home Page
    <br />
    <TodoList />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TodoList from "../components/TodoList.vue";
export default defineComponent({
  name: "Home",
  components: {
    TodoList,
  },
});
</script>

<style></style>
