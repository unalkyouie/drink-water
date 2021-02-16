import { createSlice } from '@reduxjs/toolkit';

export interface ReminderState {
  timeSet: Date;
}

const initialState: ReminderState = {
  timeSet: new Date(),
};

const reminderSlice = createSlice({
  name: 'reminder',
  initialState,
  reducers: {
    setReminderTime: (state) => {
      const timeSet = new Date(Date.now() + 60 * 1000);
      state.timeSet = timeSet;
    },
  },
});

export const { setReminderTime } = reminderSlice.actions;

export default reminderSlice.reducer;
