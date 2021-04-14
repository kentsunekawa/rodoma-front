import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import * as styles from './style';
import { IconLink } from 'components/elements/icons';
import { SubjectLabel } from 'types';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

// component root class name
const CLASSNAME = 'Bar';

// declare types
interface ComponentProps {
  linkable?: boolean;
  left: number;
  width: number; 
  label: SubjectLabel | null;
  linkedPostId?: number | null;
  className?: string;
}

interface Props extends ComponentProps {
  barColor: string;
}

// dom component
const Component: React.FC<Omit<Props, 'label'>> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="bar"
      style={{
        width: `calc(${props.width}% + 4px)`,
        background: `${props.barColor}`,
        left: `calc(${props.left}% - 2px)`,
      }}>
      {
        (props.linkedPostId && props.linkable) && (
          <Link to={`/roadmaps/${props.linkedPostId}`} className="icon">
            <IconLink />
          </Link>
        )
      }
      {
        (props.linkedPostId && !props.linkable) && (
          <span className="icon"><IconLink /></span>
        )
      }
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const { label } = componentProps;

  const themeContext = useContext(ThemeContext);
  const barColor = label ? themeContext.colors.subjects[label] : themeContext.colors.subjects[0 ];

  const props = { barColor };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;