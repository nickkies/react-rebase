import axios from 'axios';
import {
  // makeObservable,
  // observable,
  // computed,
  // action,
  autorun,
  makeAutoObservable,
  flow,
} from 'mobx';

class ObservableTodoStore {
  todos = [];
  pendingRequests = 0;

  constructor() {
    // makeObservable(this, {
    //   todos: observable,
    //   pendingRequests: observable,
    //   completedTodosCount: computed,
    //   report: computed,
    //   addTodo: action,
    //   fetchData: flow,
    // });
    makeAutoObservable(this);
    autorun(() => console.log(this.report));
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }

  get report() {
    if (this.todos.length === 0) return '<none>';
    const nextTodo = this.todos.find((todo) => todo.completed === false);
    return (
      `Next todo: "${nextTodo ? nextTodo.task : '<none>'}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null,
    });
  }

  fetchData = function* () {
    const fetchTodo = async () => {
      const response = await axios.get('/todo');
      return response.data.todo.task;
    };

    try {
      const todo = yield fetchTodo();
      this.addTodo(todo);
    } catch (e) {
      console.log(`error: ${e}`);
    }
  };
}

export const observableTodoStore = new ObservableTodoStore();
