import { QueryCache, QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios'
import { useQueryClient } from '@tanstack/react-query'


const Create = () => {
    const queryClient = useQueryClient()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const mutation = useMutation((data) =>
        () => axios.post('https://jsonplaceholder.typicode.com/posts', data),
        {
            onSettled: () => {
                queryClient.invalidateQueries('posts');
                queryClient.setQueryData('posts',)
            },
            onMutate: variables => {
                // A mutation is about to happen!
                // Optionally return a context containing data to use when for example rolling back
            },
            onError: (error, variables, context) => {
                // An error happened!
            },
            onSuccess: (data, variables, context) => {
                // Succesful request
            },
            onSettled: (data, error, variables, context) => {
                // Error or success... doesn't matter!
            },
        }
    )


    return (
        <div className='flex flex-col max-w-lg items-center'>
            <Link href={'/'}>
                <a className='text-blue-500 underline'>Back to home</a>
            </Link>
            <input onChange={(e) => setTitle(e.target.value)} placeholder='title'></input>
            <input placeholder='text' onChange={(e) => setBody(e.target.value)} />
            <button onClick={() => mutation.mutate({
                title: title,
                body: body,
                userId: 1000
            })}>Add Post</button>
            {mutation.isLoading && 'Loading....'}
            {mutation.isSuccess && 'Done!, revalidate queries here to make sure frontend is in sync with backend'}
            {mutation.isError && `An error has occured ${mutation.error.message}`}
        </div>
    )
}

export default Create