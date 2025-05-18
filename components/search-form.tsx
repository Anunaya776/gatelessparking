'use client';

import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from './ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';

const FormSchema = z.object({
  arrivingon: z.string({ required_error: 'Date is required' }),
  arrivingtime: z.string({ required_error: 'Time is required' }),
  leavingtime: z.string({ required_error: 'Time is required' }),
});

function SearchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      arrivingon: '',
      arrivingtime: '',
      leavingtime: '',
    },
  });

  function onSubmit(formData: z.infer<typeof FormSchema>) {
    console.log(formData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row items-end justify-between w-full bg-gray-50 rounded-md p-4 gap-4 shadow-sm"
      >
        {/* Address */}
        <div className="flex flex-col">
          <Label htmlFor="parkingat">Address</Label>
          <Input id="parkingat" placeholder="Address" className="w-full" />
        </div>

        {/* Arriving on */}
        <FormField
          control={form.control}
          name="arrivingon"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Arriving on</FormLabel>
              <FormControl>
                <Input {...field} placeholder="date" />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Arriving time */}
        <FormField
          control={form.control}
          name="arrivingtime"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Arriving time</FormLabel>
              <FormControl>
                <Input {...field} placeholder="start" />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Leaving time */}
        <FormField
          control={form.control}
          name="leavingtime"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Leaving time</FormLabel>
              <FormControl>
                <Input {...field} placeholder="end" />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="flex">
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default SearchForm;
