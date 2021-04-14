import React, { useContext } from 'react';
import Styled from 'styled-components';

import { PostData } from 'types';
import Chart from 'components/modules/Chart';

import { PostContext } from '..';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'PostChart';

// declare types
interface ComponentProps {
  childRef: React.Ref<HTMLDivElement>;
  className?: string;
}

interface Props extends ComponentProps {
  post: PostData | undefined | null;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`} ref={props.childRef}>
    {
      props.post && <Chart
        subjects={props.post.subjects}
      />
    }
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const {state, contextDispatch} = useContext(PostContext);

  const props = { post: state.post };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;