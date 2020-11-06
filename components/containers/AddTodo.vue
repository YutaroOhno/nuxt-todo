<template>
  <input placeholder="Todo を入力" @keyup.enter="addTodo" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { todosStore } from '~/store'

@Component
export default class AddTodo extends Vue {
  addTodo(e: any) {
    if (e.target instanceof HTMLInputElement && e.target.value !== '') {
      todosStore.createTodo(e.target.value)
      e.target.value = ''
    }
  }
}
</script>
