import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { DataContext } from '../context/DataContext';

function CreatePage(props) {
    let {setEmployees} = useContext(DataContext)
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        name: '',
        age: '',
        gender: true,
    })

    const [errors,setErrors] = useState({nameError:'', ageError: ''});

    const handleChangeInput = (e) => {
        let { name, value } = e.target
        if (name === 'age') {
            value = +value;
        }
        if (name === 'gender') {
            value = value === 'true'
        }

        handleValidate(name, value)
        setEmployee({ ...employee, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if(Object.keys(errors).length == 0){
            setEmployees(pre => [...pre, { ...employee, id: uuidv4() }])
            navigate('/');
        }else{
            alert('All field is required!')
        }
       
    }

    const handleValidate = (name, value) => {
        switch (name) {
            case 'name':
                if (value === '') {
                    errors.nameError = 'Name is required';

                }else if(value.length < 3 || value.length > 15){
                    errors.nameError = 'Name must be between [3-15] characters';
                }
                else{
                    delete errors.nameError;
                }
                break;

            case 'age':
                if (value == '') {
                    // console.log(typeof(value));
                    errors.ageError = 'Age is required';
                }else if(value < 0 || value > 100){
                    errors.ageError = 'Age must be between [1-100]';
                }
                else{
                    delete errors.ageError;
                }
                break;
            default:

        }
    }

    return (
        <div>
            <h1>Create a new Employee</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name">Name:</label>
                    <input onChange={(e) => handleChangeInput(e)} type="text" className="form-control" id="name" placeholder="Enter name" name="name" />
                <p className='text-danger'>{errors?.nameError}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="age">Age:</label>
                    <input onChange={(e) => handleChangeInput(e)} type="number" className="form-control" id="age" placeholder="Enter age" name="age" />
                    <p className='text-danger'>{errors?.ageError}</p>
               
                </div>
                <div className="form-check">
                    <input onChange={(e) => handleChangeInput(e)} type="radio" className="form-check-input" id="male" name="gender" value="true" defaultChecked />
                    <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check">
                    <input onChange={(e) => handleChangeInput(e)} type="radio" className="form-check-input" id="female" name="gender" value="false" />
                    <label className="form-check-label" htmlFor="female">Female</label>
                </div>

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
}

export default CreatePage;