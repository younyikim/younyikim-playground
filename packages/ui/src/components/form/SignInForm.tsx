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
    email: string;
    password: string;
  };
  onSubmit: (data: z.infer<typeof FormSchema>) => void;
  customFormSchema?:
    | ZodSchema<{
        email: string;
        password: string;
      }>
    | undefined;
}

const FormSchema = z.object({
  email: z.string().email({
    message: 'Invalid email format.',
  }),
  password: z.string().min(6).max(100), // Adjust max length if needed
});

const SignInForm = (props: SignInFormProps) => {
  const {
    defaultValues = {
      email: '',
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-20 text-2xl"
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
              <FormLabel className="text-2xl">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="h-20 text-2xl"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex w-full items-center justify-end">
          <Button type="submit" size={'xl'} className="w-full text-2xl">
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
