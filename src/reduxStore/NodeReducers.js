export const NODE_ACTIONS = {
  NODE_CHANGE: "node_changes",
  NODE_DEFAULT: "node_default",
};

export const NodeReducers = (InitialState = { name: "", qr: "" }, actions) => {
  switch (actions.type) {
    case NODE_ACTIONS.NODE_CHANGE:
      return { ...InitialState, ...actions.payload };
    case NODE_ACTIONS.NODE_DEFAULT:
      return { name: "", qr: "" };
    default:
      return InitialState;
  }
};
