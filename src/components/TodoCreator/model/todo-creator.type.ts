import { ITodo } from '../../Todo/todo.type.ts'

export enum CreatorMode {
  CREATE_MODE = 'CREATE_MODE',
  EDIT_MODE = 'EDIT_MODE',
}
export enum CreatorLabel {
  CREATE = 'type your task',
  EDIT = 'edit your task',

}

export type TodoCreatorState = {
  mode: CreatorMode
  todo: ITodo | undefined
}

export type ToggleResponseProps<T> = {
  mode: CreatorMode
  todo: T | undefined
}
