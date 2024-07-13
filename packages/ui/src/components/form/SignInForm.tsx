import * as React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ZodSchema, z } from 'zod';

import { Button } from '@components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form';
import { Input } from '@components/ui/input';

interface SignInFormProps {
  defaultValues?: {
    id: string;
    password: string;
  };
  onSubmit: (data: z.infer<typeof FormSchema>) => void;
  customFormSchema?:
    | ZodSchema<{
        id: string;
        password: string;
      }>
    | undefined;
}

const FormSchema = z.object({
  id: z.string().min(2, {
    message: 'ID must be at least 2 characters.',
  }),
  password: z.string().min(6).max(100), // Adjust max length if needed
});

const SignInForm = (props: SignInFormProps) => {
  const {
    defaultValues = {
      id: '',
      password: '',
    },
    onSubmit,
    customFormSchema,
  } = props;

  const formSchema = customFormSchema || FormSchema;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">id</FormLabel>
              <FormControl>
                <Input
                  type="id"
                  placeholder="Enter your id"
                  className="h-20 text-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="h-20 text-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full items-center justify-end">
          <Button type="submit" size={'xl'} className="w-full text-lg">
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
