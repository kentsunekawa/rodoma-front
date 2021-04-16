import React from 'react';
import { useSelector } from 'react-redux';

import { categoryTreeSelector } from 'state/modules/app';
import { CategoryTree } from 'types';
import Styled from 'styled-components';
import * as styles from './styles';
import Accordion from 'components/blocks/Accordion';

// component root class name
const CLASSNAME = 'CategoryTree';

// declare types

interface ComponentProps {
  onChange: (category: number, specialty: number) => void;
  className?: string;
}

interface Props extends ComponentProps {
  CategoryTree: CategoryTree;
  onClick: (parentId: number, childId?: number) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <ul className="list">
      {props.CategoryTree.map((category, i) => {
        if (i !== 0) {
          return (
            <li className="item" key={i}>
              <Accordion
                types={['nega']}
                onClick={props.onClick}
                parent={{
                  id: category.id,
                  name: category.name,
                }}
                childList={category.specialties}
              />
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { onChange } = componentProps;

  const CategoryTree = useSelector(categoryTreeSelector);

  const onClick = (parentId: number, childId = 0) => {
    onChange(parentId, childId);
  };

  const props = { CategoryTree, onClick };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
