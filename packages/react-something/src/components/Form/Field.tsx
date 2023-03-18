import React, { ChangeEvent } from 'react';
import { useContext } from 'react';
import FieldContext from './FieldContext';
import { FormType } from './useForm';

// const Field = (
//   props: React.PropsWithChildren<{
//     name?: string;
//   }>,
// ) => {
//   const { children } = props;
//   const context = useContext(FieldContext);
//   const { getFieldValue } = context || {};
//   const getControlled = () => {
//     console.log('props');
//     return {
//       value: '1111',
//     };
//   };
//   const child = React.cloneElement(children as any, getControlled);
//   // child.props.value = 'xxxx';
//   console.log(child, 'child');
//   return child;
// };

class Field extends React.Component<
  React.PropsWithChildren<{
    name: string;
  }>
> {
  static contextType: React.Context<FormType | null> = FieldContext;
  getControlled = () => {
    if (!this.context) {
      return {};
    }
    const { getFieldValue, setFieldsValue } = this.context as any;
    const { name } = this.props;
    return {
      value: getFieldValue(name), // get state
      onChange(e: ChangeEvent<HTMLInputElement>) {
        setFieldsValue({
          [name]: e.target.value,
        });
      },
    };
  };

  render() {
    const { children } = this.props;

    const returnChildNode = React.cloneElement(
      children as any,
      this.getControlled(),
    );
    return returnChildNode;
  }
}
export default Field;
