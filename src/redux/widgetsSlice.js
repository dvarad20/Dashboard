import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", text: "Random text for Widget 1" },
        { id: 2, name: "Widget 2", text: "Random text for Widget 2" }
      ]
    },
    {
      id: 2,
      name: "Another Category",
      widgets: [
        { id: 3, name: "Widget A", text: "Random text for Widget A" }
      ]
    }
  ]
};

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, name, text } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      const newWidget = {
        id: Date.now(),
        name,
        text
      };
      category.widgets.push(newWidget);
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
    }
  }
});

export const { addWidget, removeWidget } = widgetsSlice.actions;
export default widgetsSlice.reducer;
