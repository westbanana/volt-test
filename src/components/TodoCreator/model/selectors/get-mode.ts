import { RootState } from '../../../../app/store.ts'
import { CreatorMode } from '../todo-creator.type.ts'

export const getMode = (state:RootState):CreatorMode => state.todoCreator.mode
