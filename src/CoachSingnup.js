import React from 'react';
import {Table, Label, Input, Button} from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CoachSingnup = () => {
    const navigate = useNavigate();

    const emptyCoachData = {
        "name": "",
        "password": "",
        "gender": "",
        "dateOfBirth": "",
        "mobileNumber": "",
        "speciality": ""
      };

      const [coachData, setCoachData] = useState(emptyCoachData);

    const handleChangeCoachData = (e) => {
        setCoachData({...coachData, [e.target.name] : e.target.value});

    }



    const handleSubmitCoachData = async () => {
        await axios.post('http://localhost:5000/coaches', coachData)
        .then(res => {
            setCoachData(emptyCoachData);
            console.log('Coach is joined successfully')
        })
        .catch(err=>console.log(err.message))
    }


  return (
    <div className='coach-signup-div'>
        <h4> Life coach profile</h4>
        <hr />
        <Table borderless>
                <tbody>
                    <tr>
                        <td> 
                            <Label for="name">Name</Label>
                            <Input id="name" name="name" placeholder="Enter name" type="text" value={coachData.name} onChange={handleChangeCoachData} required minLength={3} maxLength={50}/>
                            
                        </td>
                        <td>
                            <Label for="password">Password</Label>
                            <Input id="password" name="password" placeholder="Enter password" type="password" value={coachData.password} onChange={handleChangeCoachData} required />
                        </td>
                    </tr>
                    <tr>
                        <td> 
                            <Label for="dateOfBirth">Date of birth</Label>
                            <Input id="dateOfBirth" name="dateOfBirth" placeholder="dd/mm/yy" type="text" value={coachData.dateOfBirth} onChange={handleChangeCoachData} required />
                        </td>
                        <td>
                            <Label for="gender">Gender</Label>  
                            <br />          
                            <select name='gender' value={coachData.gender} onChange={handleChangeCoachData} required>
                                <optgroup label="Select gender">
                                    <option value="" disabled selected>Select gender</option>
                                    <option value="M">M</option>
                                    <option value="F">F</option>
                                </optgroup>
                            </select>
            
                        </td>
                    </tr>

                    <tr>
                        <td> 
                            <Label for="mobileNumber">Mobile number</Label>
                            <Input id="mobileNumber" name="mobileNumber" placeholder="Enter mobileNumber" type="text" onChange={handleChangeCoachData} value={coachData.mobileNumber} required />
                        </td>
                        <td>
                            <Label for="speciality">Speciality</Label>
                            <Input id="speciality" name="speciality" placeholder="Enter speciality" type="text" onChange={handleChangeCoachData} value={coachData.speciality} required />
                        </td>
                    </tr>
                </tbody>

        </Table>
        <Button className='Button-class' color='success' onClick={handleSubmitCoachData}>Register</Button>
        <Button className='Button-class' color='warning' onClick={() => navigate('/')}>To home page</Button>

    </div>
  )
}

export default CoachSingnup