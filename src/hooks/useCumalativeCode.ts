import { useTypeSelector } from "../hooks/useTypeSelector";

export const useCumalativeCode = (cellId: string) => {
  return useTypeSelector((state) => {
    const { data, order } = state.cells;
    const orderedCells = order.map((id) => data[id]);

    const showFunc = `
        import _React from 'react';
        import _ReactDOM from 'react-dom';
        var show = (value) => {
          const root = document.querySelector('#root');
    
          if (typeof value === 'object') {
            if (value.$$typeof && value.props) {
              _ReactDOM.render(value, root);
            } else {
              root.innerHTML = JSON.stringify(value);
            }
          } else {
            root.innerHTML = value;
          }
        };
      `;
    const showFuncNoop = "var show = () => {}";
    const cumalativeCode = [];
    for (let c of orderedCells) {
      if (c.type === "code") {
        if (c.id === cellId) {
          cumalativeCode.push(showFunc);
        } else {
          cumalativeCode.push(showFuncNoop);
        }
        cumalativeCode.push(c.content);
      }
      if (c.id === cellId) {
        break;
      }
    }
    return cumalativeCode;
  }).join("\n");
};
