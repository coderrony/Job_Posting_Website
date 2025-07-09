'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useRouter } from "next/navigation"; 

const jobSchema = z.object({
  title: z.string().min(5, 'Title is required'),
  company: z.string().min(5, 'Company is required'),
  location: z.string().min(5, 'Location is required'),
  type: z.enum(['Full-time', 'Part-time', 'Contract', 'Internship'], {
    errorMap: () => ({ message: 'Job type is required' }),
  }),
  description: z
    .string()
    .min(1, 'Description is required')
    .min(20, 'At least 20 characters long'),
  salary: z.string().optional(),
});

type JobForm = z.infer<typeof jobSchema>;

function PostJobPage() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobForm>({
    resolver: zodResolver(jobSchema),
  });

  const onSubmit = async (data: JobForm) => {


    try {
      startTransition(async () => {
        await fetch('/api/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        router.push('/jobs');
      });
    } catch (error) {
      console.log('error ', error);
    }

  };

  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-2xl font-bold text-gray-900 mb-6'>Post a Job</h1>
      <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor='title'
            className='block text-sm font-medium text-gray-700'
          >
            Job Title
          </label>
          <input
            type='text'
            {...register('title')}
            id='title'
            className='mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900'
          />
          {errors.title && (
            <p className='text-red-600 text-sm'>{errors.title.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor='company'
            className='block text-sm font-medium text-gray-700'
          >
            Company
          </label>
          <input
            type='text'
            {...register('company')}
            id='company'
            className='mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900'
          />
          {errors.company && (
            <p className='text-red-600 text-sm'>{errors.company.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor='location'
            className='block text-sm font-medium text-gray-700'
          >
            Location
          </label>
          <input
            type='text'
            {...register('location')}
            id='location'
            className='mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900'
          />
          {errors.location && (
            <p className='text-red-600 text-sm'>{errors.location.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor='type'
            className='block text-sm font-medium text-gray-700'
          >
            Job Type
          </label>
          <select
            {...register('type')}
            id='type'
            className='mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900'
          >
            <option value=''>Select a type</option>
            <option value='Full-time'>Full-time</option>
            <option value='Part-time'>Part-time</option>
            <option value='Contract'>Contract</option>
            <option value='Internship'>Internship</option>
          </select>
          {errors.type && (
            <p className='text-red-600 text-sm'>{errors.type.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-700'
          >
            Description
          </label>
          <textarea
            {...register('description')}
            id='description'
            rows={6}
            className='mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900'
          />
          {errors.description && (
            <p className='text-red-600 text-sm'>{errors.description.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor='salary'
            className='block text-sm font-medium text-gray-700'
          >
            Salary (optional)
          </label>
          <input
            type='text'
            {...register('salary')}
            id='salary'
            placeholder='e.g., $80,000 - $100,000'
            className='mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900'
          />
          {errors.salary && (
            <p className='text-red-600 text-sm'>{errors.salary.message}</p>
          )}
        </div>

        <button
          disabled={isPending}
          type='submit'
          className={`w-full px-4 py-2 rounded-md transition-colors ${
            isPending
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          } disabled:opacity-50`}
        >
          {isPending ? 'Posting...' : 'Post Job'}
        </button>
      </form>
    </div>
  );
}

export default PostJobPage;
