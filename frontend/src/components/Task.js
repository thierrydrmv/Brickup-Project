import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

export default function Task() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pendente');
  const [imageData, setImageData] = useState(null);

  const { id } = useParams();
  const data = useSelector((state) => state.task)
  
  const handleAddNewTask = () => {
    fetch("http://localhost:8080/task",{
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body:JSON.stringify({name, description, status})
  })
  }

  const handleEditTask = () => {
    fetch(`http://localhost:8080/task/${id}`,{
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body:JSON.stringify({name, description, status, imageData})
  })
  }

    
  const handleImage = ({ target }) => {
    const file = new FormData();
    file.append('file', target.files[0]);
    setImageData(file);
  }


  useEffect(() => {
  if(Number(id)) {
    const task = data.filter((item) => String(item.id) === id)[0]
    if (task) {
      setName(task.name);
      setDescription(task.description);
      setStatus(task.status);
    }
  }
  }, [id, data])
  
  return (
    <div className='d-flex justify-content-center align-content-center'>
      <form className="w-50 p-3">
        <div className="form-group">
          <label className='m-3'>
            Name:
            <input type="text" name="nome" value={ name || '' } onChange={({ target }) => setName(target.value)} />
          </label>
          <label className='m-3'>
            Description:
            <input required type="text" name="description" value={description || ''} onChange={({ target }) => setDescription(target.value)} />
          </label>
          <select className='m-3' value={status || ''} onChange={({ target }) => setStatus(target.value)}>
            <option value="pendente" >Pendente</option>
            <option value="finalizada" >Finalizada</option>
          </select>
          <div className="m-3'">
            <input className='m-3' type="file" accept='image/*' onChange={handleImage}/>
          </div>
          <Button variant='dark' type="button" disabled={ description.length < 1 ? true : false} onClick={ !id ? handleAddNewTask : handleEditTask}><Link className='text-decoration-none text-white' to="/">Salvar</Link></Button>
        </div>
      </form>
    </div>
  )
}
