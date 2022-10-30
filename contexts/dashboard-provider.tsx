import { createContext, Reducer, useContext, useMemo, useReducer } from "react";

interface DashboardProps {
  savedQueries?: string[];
  history?: string[];
  currentEditorValue?: string;
  addToHistory?: (query: string) => void;
  saveQuery?: (query: string) => void;
  updateEditorValue?: (query: string) => void;
  clearEditor?: () => void;
  children?: any;
}
//create context
export const DashboardContext = createContext<DashboardProps>(
  {} as DashboardProps
);

const initialState: DashboardProps = {
  currentEditorValue: "// insert query here",
  savedQueries: ["Select top 10 from orders", "Select top 5 from products"],
};

export const DashboardManager = ({ children }: DashboardProps): JSX.Element => {
  const [state, setState] = useReducer<Reducer<DashboardProps, any>>(
    (originalState, newState) => {
      return { ...originalState, ...newState };
    },
    initialState
  );
  const dashboardContext = useMemo(() => {
    const updateState = state;
    const addToHistory = (query: string) => {
      const history = [...(state.history || []), query];
      updateState.history = history;
      setState({ ...state, history });
    };
    const saveQuery = (query: string) => {
      const savedQueries = [...(state.savedQueries || []), query];
      updateState.savedQueries = savedQueries;
      setState({ ...state, savedQueries });
    };
    const updateEditorValue = (value: string) => {
      updateState.currentEditorValue = value;
      setState({ ...state, currentEditorValue: value });
    };
    const clearEditor = () => {
      updateState.currentEditorValue = '// insert query here';
     
      
      setState({
        ...state,
        currentEditorValue: '// insert query here'
      });
    };
    return {
      ...updateState,
      addToHistory,
      saveQuery,
      updateEditorValue,
      clearEditor,
    };
  }, [state, state.history, state.savedQueries, state.currentEditorValue]);
  return (
    <DashboardContext.Provider value={dashboardContext}>
      {children}
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
