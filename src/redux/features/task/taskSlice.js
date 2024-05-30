import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  task: [
    {
      id: 1,
      status: 'pending',
      title: 'First Item Check',
      description:
        'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
      date: '2023-08-28',
      assignedTo: 'Md. Al Amin Mollik',
      priority: 'high',
    },
  ],
  userSpecificTasks: [],
}

export const TasksSlice = createSlice({
  name: 'TasksSlice',
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.task.length === 0) {
        state.task.push({ id: 1, status: "pending", ...payload });
      } else {
        const LastElement = state.task.at(-1);
        state.task.push({ id: LastElement.id + 1, status: "pending", ...payload });
      }
    },
    removeTask: (state, { payload }) => {
      state.task = state.task.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.task.find((item) => item.id === payload.id);
      target.status = payload.status;
    },
    setUserTasks: (state, {payload}) =>{
      state.userSpecificTasks = state.task.filter((item)=> item.assignedTo === payload);
    }
  },
})

export const { addTask, removeTask, updateStatus,setUserTasks } = TasksSlice.actions

export default TasksSlice.reducer