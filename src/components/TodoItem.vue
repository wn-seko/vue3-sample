<template>
  <div class="todo-item">
    <input type="checkbox" :checked="complete" @change="changeTodoStatus(id)" />
    <div class="todo-item__title">{{ title }}</div>
    <button @click="removeTodo(id)">X</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "TodoItem",
  props: {
    id: {
      type: Number,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    complete: {
      type: Boolean,
      require: true,
    },
  },
  setup(props) {
    const store = useStore();

    function removeTodo(id) {
      store.dispatch("removeTodo", id);
    }

    function changeTodoStatus(id) {
      console.log({ complete: props.complete });
      store.dispatch("editTodo", {
        id: id,
        complete: !props.complete,
        title: props.title,
      });
    }

    return {
      changeTodoStatus,
      removeTodo,
    };
  },
});
</script>

<style>
.todo-item {
  max-width: 300px;
  margin: 6px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
