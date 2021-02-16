import { createSlice } from '@reduxjs/toolkit';

export interface ReminderState {
  timeSet: number;
}

const initialState: ReminderState = {
  timeSet: 0,
};

const reminderSlice = createSlice({
  name: 'reminder',
  initialState,
  reducers: {
    setReminderTime: (state) => {
      const timeSet = new Date(Date.now() + 2 * 3600 * 1000).getMilliseconds();
      state.timeSet = timeSet;
    },
  },
});

export const { setReminderTime } = reminderSlice.actions;

export default reminderSlice.reducer;
