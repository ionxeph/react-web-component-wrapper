import React from 'react';

import WebComponentWrapper from './wrapper';

const Mark1Demo = () => {
  const [length, setLength] = React.useState(5);
  const [method, callMethod] = React.useState({
    method: () => {},
    call: false
  });

  const scrollTo = (position) => {
    switch (position) {
      case 'top':
        callMethod({
          call: true,
          method: (comp) => comp.scrollToTop(500)
        });
        break;
      case 'bottom':
        callMethod({
          call: true,
          method: (comp) => comp.scrollToBottom(500)
        });
        break;
      default:
        break;
    }
  }

  return (
    <div style={{ height: '500px' }}>
      <h1>Mark 1: using a badly implemented wrapper component</h1>
      <WebComponentWrapper
        primitiveAttrs={{ color: 'primary' }}
        // not really an object attribute, but I needed something for demo
        objectAttrs={{ scrollY: false }}
        onEvent={{ ionScrollStart: (event) => console.log(event) }}
        callMethod={method}
      >
        <ion-content>
          <button onClick={() => setLength(length + 5)}>add more</button>
          <button onClick={() => scrollTo('bottom')}>scroll to bottom</button>
          <ion-list>
            {Array.from({ length }, (_v, i) => i).map(i =>
              <ion-item key={i}>
                <ion-label>{i}</ion-label>
              </ion-item>
            )}
          </ion-list>
          <button onClick={() => scrollTo('top')}>scroll to top</button>
        </ion-content>
      </WebComponentWrapper>
    </div>
  );
};

export default Mark1Demo;