import React, { FC, useEffect } from 'react'
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const UserList:FC = () => {
  const {users, error, loading} = useTypedSelector(state => state.user)
  const { fetchUsers } = useActions()

  useEffect (() => {
    fetchUsers()
  }, [])

  if(loading) {
    return <h1>Загрузка...</h1>
  }

  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user =>
        <div key={user.id}>{user.name}</div>
      )}
    </div>
  )
}
