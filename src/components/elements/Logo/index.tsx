import React from 'react';

interface Props {
  type?: 'default' | 'gradient';
}

// dom component
const Component: React.FC<Props> = props => (
  <>
    {
      (() => {
        switch(props.type){
          case 'gradient':
            return (
              <img src="/img/logo_g.svg" alt=""/>
            );
          default:
            return (
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100">
                <path d="M19.974,5v30.105v29.947V95h59.895L49.921,65.053H50c16.583,0,30.026-13.443,30.026-30.026
                  C80.026,18.443,66.583,5,50,5H19.974"/>
              </svg>
            );
        }
      })()
    }
  </>
);

export default Component;