import { useState } from 'react'
// import './App.css'
// import { Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';

function Skills() {
  const skill = [{
    'tech': 'Django',
    'year': '2',
    'month': '2',
  },
  {
    'tech': 'React',
    'year': '1',
    'month': '0',
  }]
  const [data, setData] = useState(skill)
  const [tech, setTech] = useState('')
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')



  const handleAdd = () => {
    console.log('button clicked')
    setData([...data, {
      'tech': tech,
      'year': year,
      'month': month,
    }]);
    setTech('')
    setYear('')
    setMonth('')
  }

  const handleClear = () => {
    console.log('button clicked')
    setTech('')
    setYear('')
    setMonth('')
  }

  const handleTech = (event) => {
    setTech(event.target.value);
  }
  const handleYear = (event) => {
    setYear(event.target.value);
  }
  const handleMonth = (event) => {
    setMonth(event.target.value);
  }

  return (
    <>
      <Row>
        <Col>
          <Card className='m-5' style={{ minHeight: "10rem" }}>
            <Card.Header className='text-center'><h1 className="color-black">Skills</h1></Card.Header>
            <Card.Body>
              {/* <Card.Title className='text-center'><h3>Skills</h3></Card.Title> */}
              <div className="table-responsive">
                <table id="daily-attendance-list-ca" className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Tech</th>
                      <th>Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.tech}</td>
                        <td>{data.year} years - {data.month} months</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='m-5' style={{ minHeight: "10rem" }}>
            <Card.Header className='text-center'><h1 className="color-black">Add Skill</h1></Card.Header>
            <Card.Body>
              <Form.Control type="text" placeholder="Enter Tech" value={tech} onChange={handleTech} />
              <Row className='mt-4'>
                <Col><Form.Control type="text" placeholder="Enter Year" value={year} onChange={handleYear} /></Col>
                <Col><Form.Control type="text" placeholder="Enter Month" value={month} onChange={handleMonth} /></Col>
              </Row>
              <div className="d-flex flex-row-reverse">
                <Button className='p-2 m-2' variant="primary" onClick={handleClear}>Clear</Button>
                <Button className='p-2 m-2' variant="success" onClick={handleAdd}>Add</Button>
              </div>
            </Card.Body>
          </Card >
        </Col>
      </Row>

    </>
  )
}

export default Skills
