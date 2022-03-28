import React, { FC, useEffect } from 'react'
import { useActions } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const TodoList:FC = () => {
  const {page,error,limit,loading,todos} = useTypedSelector(state => state.todo)
  const {fetchTodos, setTodoPage} = useActions()
  const pages = [1, 2, 3, 4, 5] 

  useEffect (() => {
    fetchTodos(page, limit)
  }, [page])

  if(loading) {
    return <h1>Загрузка...</h1>
  }

  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {todos.map(todo => 
      <div key={todo.id}>{todo.id} - {todo.title}</div>
      )}
      {pages.map(p =>
        <div style={{display:'flex'}}>
          <div onClick={() => setTodoPage(p)} style={{border:p === page ? '2px solid #ccc' : '1px solid green', padding: 10}}>{p}</div>
        </div>
      )}
    </div>
  )
}
