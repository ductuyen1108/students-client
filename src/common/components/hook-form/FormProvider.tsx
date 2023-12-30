import React from 'react';
import { ReactNode } from 'react';
// form
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

// ----------------------------------------------------------------------

type Prop = {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
};

type Props = Prop & React.FormHTMLAttributes<HTMLFormElement>;

export default function FormProvider({ children, onSubmit, methods, ...other }: Props) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} {...other}>
        {children}
      </form>
    </Form>
  );
}
