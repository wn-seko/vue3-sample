<template>
  <div class="todo-list">
    <TodoItem
      v-for="{ id, title, complete } in todoList"
      :key="id"
      :id="id"
      :title="title"
      :complete="complete"
    ></TodoItem>
    <input v-model="title" />
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import TodoItem from "./TodoItem.vue";

export default defineComponent({
  name: "TodoList",
  components: {
    TodoItem,
  },
  setup() {
    const store = useStore();
    const todoList = computed(() => store.state.todoList);
    const latestId = computed(() => {
      const { length } = store.state.todoList;
      if (length > 0) {
        return store.state.todoList[length - 1]?.id + 1;
      }
      return 0;
    });
    const title = ref("");

    function addTodo() {
      store.dispatch("createTodo", {
        id: latestId.value,
        complete: false,
        title: title.value,
      });
    }
    return {
      title,
      todoList,
      addTodo,
    };
  },
});
</script>

<style></style>
