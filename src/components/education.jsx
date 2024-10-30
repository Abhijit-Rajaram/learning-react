import { useState, useEffect } from 'react';
// import './App.css'
// import { Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Row, Col, CardHeader, CardBody } from 'react-bootstrap';
import axios from 'axios';


const Education = () => {

    const education_static = [
        {
            'name': 'XYZ School',
            'qualification': 'SSLC',
            'passing': '2016',
            'grade': 'A'
        },
        {
            'name': 'ABC School',
            'qualification': 'HSC',
            'passing': '2018',
            'grade': 'A'
        },
    ]


    const [education_va, setEducation] = useState([])
    const [name, setName] = useState('')
    const [qualification, setQualification] = useState('')
    const [passing, setPassing] = useState('')
    const [grade, setGrade] = useState('')
    console.log(education_va,'education_va')
    // Fetch data from API when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/'); // Adjust endpoint as necessary
                console.log(response.data,'data');
                setEducation([...education_va, ...response.data]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures it runs only on mount


    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleQualifiaction = (event) => {
        setQualification(event.target.value)
    }
    const handlePassing = (event) => {
        setPassing(event.target.value)
    }
    const handleGrade = (event) => {
        setGrade(event.target.value)
    }
    const handleAdd = (event) => {
        // setEducation([...education_va, {
        //     'name': name,
        //     'qualification': qualification,
        //     'passing': passing,
        //     'grade': grade
        // }])
        axios.post('http://localhost:8080/', {
            name: name,
            qualification: qualification,
            passing: passing,
            grade: grade
        })
            .then(function (response) {
                console.log(response);
                setEducation([...education_va, response.data]);
            })
            .catch(function (error) {
                console.log(error);
            });
        setName('')
        setQualification('')
        setPassing('')
        setGrade('')
    }
    const handleClear = () => {
        setName('')
        setQualification('')
        setPassing('')
        setGrade('')
    }


    return (
        <Row className='m-5'>
            <Col>
                <Card>
                    <CardHeader><h4>Education Details</h4></CardHeader>
                    <CardBody>
                        <div className="table-responsive">
                            <table id="daily-attendance-list-ca" className="table table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Qualication</th>
                                        <th>Passing Year</th>
                                        <th>Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {education_va.map((data, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{data.name}</td>
                                            <td>{data.qualification}</td>
                                            <td>{data.passing}</td>
                                            <td>{data.grade}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card>
                    <CardHeader><h4>Add Education</h4></CardHeader>
                    <CardBody>

                        <Form.Control className='mt-2' type="text" value={name} onChange={handleName} placeholder="Name" />
                        <Form.Control className='mt-2' type="text" value={qualification} onChange={handleQualifiaction} placeholder="Qualification" />
                        <Form.Control className='mt-2' type="text" value={passing} onChange={handlePassing} placeholder="Passing Year" />
                        <Form.Control className='mt-2' type="text" value={grade} onChange={handleGrade} placeholder="grade" />
                        <div className="d-flex flex-row-reverse">
                            <Button className='p-2 m-2' variant="primary" onClick={handleClear}>Clear</Button>
                            <Button className='p-2 m-2' variant="success" onClick={handleAdd}>Add</Button>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Education