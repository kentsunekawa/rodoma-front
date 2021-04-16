import React, { useEffect, useReducer, createContext } from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'TabChanger';

interface TabChangerState {
  selected: number;
}

type ActionType = 'CHANGE_SELECTED';

interface TabChangerAction {
  type: ActionType;
  payload: number;
}

interface ComponentProps {
  selected: number;
  children: React.ReactNode;
  className?: string;
  trigger?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    keys: any[];
    selectedTab: number;
  };
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`}>{props.children}</div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base} 
`;

// reducer
const reducer: React.Reducer<TabChangerState, TabChangerAction> = (
  state: TabChangerState,
  action: TabChangerAction
) => {
  switch (action.type) {
    case 'CHANGE_SELECTED':
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};

// context
export const TabChengerConext = createContext<{
  state: Partial<TabChangerState>;
  dispatch: (arg0: TabChangerAction) => void;
}>({
  state: { selected: 0 },
  dispatch: () => {
    return;
  },
});

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { selected, trigger } = componentProps;

  const [state, dispatch] = useReducer(reducer, {
    selected,
  });

  useEffect(
    () => {
      if (trigger) {
        dispatch({
          type: 'CHANGE_SELECTED',
          payload: trigger.selectedTab,
        });
      }
    },
    trigger ? trigger.keys : []
  );

  return (
    <TabChengerConext.Provider value={{ state, dispatch }}>
      <StyeldComponent {...componentProps}>{componentProps.children}</StyeldComponent>
    </TabChengerConext.Provider>
  );
};
export default Container;
