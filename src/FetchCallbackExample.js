import React from 'react'
import {useFetchCallback} from "react-ufo"

export const getTodo = async (id, signal) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + id, {signal})
  return response.json()
}

const FetchCallbackExample = ({id = 1}) => {

  const [loading, error, todo, fetchTodo] = useFetchCallback(getTodo)

  const onFetchClick = () => {
    fetchTodo(id)
  }

  const onAbortClick = () => {
    fetchTodo.abort()
  }

  return <>
    <button onClick={onFetchClick}>Fetch</button>
    <button onClick={onAbortClick}>Abort</button>
    <br/>
    {loading && "⏳ Loading..."}
    {error && "😵 An error occurred"}
    {todo && `🥂 Here your data: ${JSON.stringify(todo)}`}
  </>

}

export default FetchCallbackExample