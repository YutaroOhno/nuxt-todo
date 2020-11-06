import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Todo } from '~/types/Todo'

@Module({
  name: 'todos',
  stateFactory: true,
  namespaced: true,
})
export default class Todos extends VuexModule {
  private todos: Todo[] = [
    {
      id: 1,
      title: 'aaa',
      done: false,
    },
  ]

  public get getTodos() {
    return this.todos
  }

  public get getTodo() {
    return (id: Number) => this.todos.find((todo) => todo.id === id)
  }

  public get getTodoCount() {
    return this.todos.length
  }

  @Mutation
  private add(todo: Todo) {
    this.todos.push(todo)
  }

  @Mutation
  private remove(id: Number) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  @Action
  public createTodo(payload: Todo['title']) {
    this.add({
      id: this.getTodoCount + 1,
      title: payload,
      done: false,
    })
  }

  @Action
  public deleteTodo(id: Number) {
    this.remove(id)
  }
}
