import { Link } from 'react-router-dom'
import { taskList } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';


export default function Appbar() {
  
  // useDispatch Dispatch actions to reducer
  const dispatch = useDispatch();
  // useSelector for getting the actual state from de store
  const data = useSelector((state) => state.task);
  useEffect(() => {
    dispatch(taskList());
  }, [dispatch, data])

  const handleTaskStatus = (id) => {
    const { name, description, image } = data.filter((item) => item.id === id)[0]
    fetch(`http://localhost:8080/task/${id}`,{
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body:JSON.stringify({name, description, status: 'finalizada', image})
  })
  }
  
  return (
    <div className='d-flex justify-content-center'>
      <div className='w-75 m-5 d-block'>
        <Link className='d-flex justify-content-end text-decoration-none mx-5' to="newTask">
          <Button variant='dark'>Nova Tarefa</Button>
        </Link>
        <Table striped hover size="sm">
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(({id, name, status}) => {
              return (
              <tr key={id}>
              <td>{name}</td>
              <td>{status}</td>
              <td className='d-flex justify-content-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-card-image mx-3 my-auto" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
              </svg>
                {
                  status === 'pendente' &&
                  <Link className='text-decoration-none' to={`${id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-pencil-fill mx-3 my-auto" viewBox="0 0 16 16">
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                    </svg>
                </Link>
                }
                <Button variant='dark' className='mx-3' onClick={() => handleTaskStatus(id)} disabled={status === 'finalizada' ? true : false}>{status === 'finalizada' ? 'Concluída' : 'Concluir'}</Button>
              </td>
            </tr>)
              })
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}
