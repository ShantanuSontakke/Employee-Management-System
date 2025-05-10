import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = (props) => {
  const [userData] = useContext(AuthContext)

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers  data={props.data} /> 
      <TaskList  data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
