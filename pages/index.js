import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'


export default function Home() {
  const queryClient = useQueryClient()
  console.log(queryClient.getQueryCache());



  // This can be extraced to a hook also
  const { isLoading, isError, data, error } = useQuery(['posts'],
    () => axios.get('https://jsonplaceholder.typicode.com/posts'))

  if (isLoading) return 'Loading...'
  if (isError) return error
  console.log(data);
  return (
    <div>
      <Link href={'/create'}>
        <a className='text-blue-700 underline'>Create a Post</a>
      </Link>
      {data.data.map((post) => {
        return (
          <div key={post.id}>
            <p>{post.id} - {post.title}</p>
          </div>
        )
      })}
    </div>
  )
}
