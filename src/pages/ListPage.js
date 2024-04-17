import { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { DataContext } from '../context/DataContext';

function ListPage(props) {
    let {employees} = useContext(DataContext)
    const navigate = useNavigate();
const [search, setSearch] = useState('');

    const handleSearch = (e) =>{
        setSearch(e.target.value)
    }

    return (
        <div className='container'>
            <h1>List Employees</h1>
            <button className='btn btn-primary'
            onClick={()=>navigate('/create')}>Create a new Employee</button>
            <br/>
            <input type='text' onChange={(e)=>handleSearch(e)}/>

            <select>
                <option></option>
            </select>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((item, index) => {
                        return (
                            item.name.toUpperCase().includes(search.toUpperCase()) &&
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.gender? 'male':'female'}</td>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListPage;