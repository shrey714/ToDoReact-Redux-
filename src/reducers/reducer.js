const initialdata = {
  list: [],
};

const todoreducer = (state = initialdata, action) => {
  switch (action.type) {
    case "ADDTODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETETODO":
      const newlist = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newlist,
      };

    case "REMOVETODO":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
export default todoreducer;
