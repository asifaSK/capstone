import React from 'react';
import {Table, Label, Input, Button} from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserSignup = () => {
    const navigate = useNavigate();

    const emptyUserData = {
        "name": "",
        "password": "",
        "gender": "",
        "dateOfBirth": "",
        "mobileNumber": "",
        "email": "",
        "pincode" : "",
        "city" : "",
        "state" : "",
        "country" : ""
      };

      const [userData, setUserData] = useState(emptyUserData);

    const handleChangeUserData = (e) => {
        setUserData({...userData, [e.target.name] : e.target.value});

    }



    const handleSubmitUserData = async () => {
        await axios.post('http://localhost:5000/users', userData)
        .then(res => {
            setUserData(emptyUserData);
            console.log('User is joined successfully')
        })
        .catch(err=>console.log(err.message))
    }




  return (
    <div className='user-signup-div'>
        <h4> Life user profile</h4>
        <hr />
        <Table borderless>
                <tbody>
                    <tr>
                        <td> 
                            <Label for="name">Name</Label>
                            <Input id="name" name="name" placeholder="Enter name" type="text" value={userData.name} onChange={handleChangeUserData} />
                        </td>
                        <td>
                            <Label for="password">Password</Label>
                            <Input id="password" name="password" placeholder="Enter password" type="password" value={userData.password} onChange={handleChangeUserData} />
                        </td>
                    </tr>

                    <tr>
                        <td> 
                            <Label for="mobilenumber">Mobile number</Label>
                            <Input id="mobilenumber" name="mobilenumber" placeholder="Enter mobilenumber" type="text" value={userData.mobileNumber} onChange={handleChangeUserData} />
                        </td>
                        <td>
                            <Label for="email">Email</Label>
                            <Input id="email" name="email" placeholder="Enter email" type="text" value={userData.email} onChange={handleChangeUserData} />
                        </td>
                    </tr>

                    <tr>
                        <td> 
                            <Label for="DOB">Date of birth</Label>
                            <Input id="DOB" name="DOB" placeholder="dd/mm/yy" type="text" value={userData.dateOfBirth} onChange={handleChangeUserData} />
                        </td>
                        <td>
                            <Label for="gender">Gender</Label>  
                            <br />          
                            <select name='gender' value={userData.gender} onChange={handleChangeUserData} required>
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
                            <Label for="pincode">Pincode</Label>
                            <Input id="pincode" name="pincode" placeholder="Enter pincode" type="text" value={userData.pincode} onChange={handleChangeUserData} />
                        </td>
                        <td>
                            <Label for="city">City</Label>
                            <Input id="city" name="city" placeholder="Enter city" type="text" value={userData.city} onChange={handleChangeUserData} />
                        </td>
                    </tr>

                    <tr>
                        <td> 
                            <Label for="state">State</Label>
                            <Input id="state" name="state" placeholder="Enter state" type="text" value={userData.state} onChange={handleChangeUserData} />
                        </td>
                        <td>
                            <Label for="country">Country</Label>
                            <Input id="country" name="country" placeholder="Enter country" type="text" value={userData.country} onChange={handleChangeUserData} />
                        </td>
                    </tr>
                </tbody>

        </Table>
        <Button className='Button-class' color='success' onClick={handleSubmitUserData}>Register</Button>
        <Button className='Button-class' color='warning' onClick={() => navigate('/')}>To home page</Button>

    </div>
  )
}

export default UserSignup