<template>
  <div>
    <h1>TODOリスト</h1>
    <AddTodo />
    <TodoList :todos="todos" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TodoList from '@/components/presentational/TodoList.vue'
import AddTodo from '@/components/containers/AddTodo.vue'
import { todosStore } from '~/store'

@Component({
  components: {
    TodoList,
    AddTodo,
  },
})
export default class Index extends Vue {
  get todos() {
    return todosStore.getTodos
  }
}
</script>
