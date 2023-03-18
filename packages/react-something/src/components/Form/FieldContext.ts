import { createContext } from 'react';
import { FormType } from './useForm';

const FieldContext = createContext<FormType | null>(null);

export default FieldContext;
