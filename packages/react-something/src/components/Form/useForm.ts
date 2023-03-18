import { useRef } from 'react';

type Store = Record<string, string>;
export type FormType = {
  getFieldValue: (name: string) => string;
  getFieldsValue: () => {
    [x: string]: string;
  };
  setFieldsValue: (newStore: Store) => void;
};
class FormStore {
  store: Store = {};
  getFieldsValue = () => {
    return { ...this.store };
  };
  getFieldValue = (name: string) => {
    return this.store[name];
  };

  setFieldsValue = (newStore: Store) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
  };
  getForm: () => FormType = () => {
    const { getFieldsValue, getFieldValue, setFieldsValue } = this;

    return {
      getFieldValue,
      getFieldsValue,
      setFieldsValue,
    };
  };
}
export const useForm = () => {
  const formInstance = useRef<null | FormType>(null);
  if (!formInstance.current) {
    const store = new FormStore();
    formInstance.current = store.getForm();
  }
  return [formInstance.current];
};
