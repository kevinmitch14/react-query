import { QueryCache, QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios'
import { useQueryClient } from '@tanstack/react-query'


const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const queryClient = useQueryClient()


    const mutation = useMutation(
        (data) => axios.post('https://jsonplaceholder.typicode.com/posts', data).then((res) => res.data),
        {
            onSettled: (data) => {
                queryClient.invalidateQueries('posts');
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
        </div>
    )
}

export default Create