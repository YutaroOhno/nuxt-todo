<template>
  <table>
    <tr>
      <th>ID</th>
      <th>TITLE</th>
      <th>DONE</th>
    </tr>
    <tr v-for="todo in todos" :key="todo.id">
      <td>{{ todo.id }}</td>
      <td>{{ todo.title }}</td>
      <td v-if="todo.done">✔</td>
      <td v-else></td>
    </tr>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Todo } from '~/types/Todo'

@Component
export default class PresentationalTodoList extends Vue {
  // proptypeエラーにならないから意味ないかなー
  @Prop({ type: Array as Vue.PropType<Todo[]>, required: true })
  private readonly todos!: Todo[]
}
</script>
