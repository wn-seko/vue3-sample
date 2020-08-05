import { createStore } from "vuex";

const state = {
  todoList: [],
};

const mutations = {
  addTodo(state, todo) {
    state.todoList.push(todo);
  },
  updateTodo(state, todo) {
    const index = state.todoList.findIndex((item) => item.id === todo.id);
    state.todoList[index] = todo;
  },
  deleteTodo(state, id) {
    state.todoList = state.todoList.filter((item) => item.id !== id);
  },
};

const actions = {
  createTodo(context, todo) {
    context.commit("addTodo", todo);
  },
  editTodo(context, todo) {
    context.commit("updateTodo", todo);
  },
  removeTodo(context, id) {
    context.commit("deleteTodo", id);
  },
};

export const store = createStore({ state, actions, mutations });
