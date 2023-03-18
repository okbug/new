import React, { ChangeEvent, useEffect, useLayoutEffect } from 'react';
import { useContext, useState } from 'react';
import FieldContext from './FieldContext';

const Field = (props: {
  name: string;
  children: JSX.Element;
  rules?: unknown[];
}) => {
  const { children, name, rules = [] } = props;
  const context = useContext(FieldContext);
  const [, setFlag] = useState(false);
  const { getFieldValue, setFieldsValue, registerFieldEntities } = context!;
  useLayoutEffect(() => {
    return registerFieldEntities({
      props: {
        name,
        rules,
      },
      onStoreChange: () => {
        setFlag(f => !f);
      },
    });
  });

  const child = React.cloneElement(children, {
    value: getFieldValue(name),
    onChange(e: ChangeEvent<HTMLInputElement>) {
      setFieldsValue({
        [name]: e.target.value,
      });
    },
  });

  return child;
};

// class Field extends React.Component<
//   React.PropsWithChildren<{
//     name: string;
//   }>
// > {
//   static contextType: React.Context<FormType | null> = FieldContext;
//   getControlled = () => {
//     if (!this.context) {
//       return {};
//     }
//     const { getFieldValue, setFieldsValue } = this.context as any;
//     const { name } = this.props;
//     return {
//       value: getFieldValue(name), // get state
//       onChange(e: ChangeEvent<HTMLInputElement>) {
//         setFieldsValue({
//           [name]: e.target.value,
//         });
//       },
//     };
//   };

//   render() {
//     const { children } = this.props;

//     const returnChildNode = React.cloneElement(
//       children as any,
//       this.getControlled(),
//     );
//     return returnChildNode;
//   }
// }
export default Field;
