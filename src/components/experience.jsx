import { useState } from 'react'
// import './App.css'
// import { Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Row, Col, CardHeader, CardBody, CardFooter, Container } from 'react-bootstrap';


function Experience() {


    const experience_static = [
        {
            'Company': 'MNW',
            'Role': 'Process Executive',
            'Description': 'Description',
            'from': '14-11-2022',
            'to': '24-07-2023'
        },
        {
            'Company': 'Mahima',
            'Role': 'Software Developer',
            'Description': 'Description',
            'from': '14-11-2022',
            'to': '24-07-2023'
        },
    ]
    const [experience, setExperience] = useState(experience_static)
    const [company, setCompany] = useState('')
    const [role, setRole] = useState('')
    const [description, setDescription] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')


    const handleCompany = (event) => {
        setCompany(event.target.value)
    }
    const handleRole = (event) => {
        setRole(event.target.value)
    }
    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleFrom = (event) => {
        setFrom(event.target.value)
    }
    const handleTo = (event) => {
        setTo(event.target.value)
    }

    const handleAdd = (event) => {
        console.log('button clicked')
        if (company == '' || role == '' || description == '' || from == '' || to == '') {
            alert('Enter all value')
            return false

        }
        setExperience([...experience,
        {
            'Company': company,
            'Role': role,
            'Description': description,
            'from': from,
            'to': to
        }]);
        setCompany('')
        setRole('')
        setDescription('')
        setFrom('')
        setTo('')
    }

    const handleClear = (event) => {
        setCompany('')
        setRole('')
        setDescription('')
        setFrom('')
        setTo('')
    }


    return (
        <>
            <Row>
                <Col xs={12} md={8} lg={8}>
                    <Card className='m-5' style={{ minHeight: "30rem" }}>
                        <CardHeader>
                            <h3>Experience</h3>
                        </CardHeader>
                        <CardBody>
                            {experience.map((season) => (
                                <Container key={season.Company} className='border-bottom'>
                                    <Row>
                                        <Col xs={12} md={6} lg={8}><h4>{season.Company}</h4></Col>
                                        <Col xs={12} md={3} lg={2}>{season.from}</Col>
                                        <Col xs={12} md={3} lg={2}>{season.to}</Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={12} lg={12}><h6>{season.Role}</h6></Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={12} lg={12}>{season.Description}</Col>
                                    </Row>
                                </Container>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <Card className='m-5' style={{ minHeight: "30rem" }}>
                        <CardHeader>
                            <h3>Add Experience</h3>
                        </CardHeader>
                        <CardBody>
                            <Row className='mt-3'>
                                <Col>
                                    <Form.Control type="text" placeholder="Enter Company Name" value={company} onChange={handleCompany} />
                                </Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col>
                                    <Form.Control type="text" placeholder="Enter Role" value={role} onChange={handleRole} />
                                </Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col xs={12} md={6} lg={6}>
                                    <Form.Control type="date" value={from} onChange={handleFrom} />
                                </Col>
                                <Col xs={12} md={6} lg={6}>
                                    <Form.Control type="date" value={to} onChange={handleTo} />
                                </Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col>
                                    <Form.Control as="textarea" value={description} onChange={handleDescription} />
                                </Col>
                            </Row>
                            <div className="d-flex flex-row-reverse">
                                <Button className='p-2 m-2' variant="primary" onClick={handleClear}>Clear</Button>
                                <Button className='p-2 m-2' variant="success" onClick={handleAdd}>Add</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Experience