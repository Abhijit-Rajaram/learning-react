import { useState, useEffect } from 'react'
// import './App.css'
// import { Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Skills() {

  const [data, setData] = useState([])
  const [id, setId] = useState('')
  const [tech, setTech] = useState('')
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/get-skills/'); // Adjust endpoint as necessary
        console.log(response.data, 'data');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only on mount

  const handleAdd = () => {
    console.log('button clicked')
    axios.post('http://localhost:8080/add-skills/', {
      id: id,
      tech: tech,
      year: year,
      month: month
    })
      .then(function (response) {
        console.log(response.data.type);
        if (response.data.type == "create") {
          setData([...data, response.data.data]);
          console.log('Create succesfully')
        } else {
          // Update the existing entry
          const updatedData = data.map(item =>
            item._id === response.data.id ? { ...item, tech, year, month } : item
          );
          console.log(updatedData)
          setData(updatedData);

          // for deleting
          //     const updatedData = data.filter(item => item.id !== id);
          // setData(updatedData);
          console.log('Updated successfully');
        }

      })
      .catch(function (error) {
        console.log(error);
      });
    setId('')
    setTech('')
    setYear('')
    setMonth('')
    document.getElementById('add-update-button').innerText = "Add";
    document.getElementById('header-text').innerText = 'Add Skills';
  }

  const handleClear = () => {
    console.log('button clicked')
    setTech('')
    setYear('')
    setMonth('')
    setId(id);
    document.getElementById('add-update-button').innerText = "Add";
    document.getElementById('header-text').innerText = 'Add Skills';
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
  const handleId = (event) => {
    console.log(event.target.value, 'ID Updated');
  }
  const updateID = (id, tech, year, month) => {
    console.log("got id :  ", id)
    document.getElementById('add-update-button').innerText = "Update";
    document.getElementById('header-text').innerText = "Update " + tech + " details";
    setId(id);
    setTech(tech);
    setYear(year);
    setMonth(month);
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
                      <th>Update</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.tech}</td>
                        <td>{data.year} years - {data.month} months</td>
                        <td><Button className='p-2 m-2' variant="primary" onClick={() => updateID(data._id, data.tech, data.year, data.month)}>Update</Button></td>
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
            <Card.Header className='text-center'><h1 className="color-black" id='header-text'>Add Skill</h1></Card.Header>
            <Card.Body>
              <Form.Control type="text" value={id} hidden onChange={handleId} />
              <Form.Control type="text" placeholder="Enter Tech" value={tech} onChange={handleTech} />
              <Row className='mt-4'>
                <Col><Form.Control type="text" placeholder="Enter Year" value={year} onChange={handleYear} /></Col>
                <Col><Form.Control type="text" placeholder="Enter Month" value={month} onChange={handleMonth} /></Col>
              </Row>
              <div className="d-flex flex-row-reverse">
                <Button className='p-2 m-2' variant="primary" onClick={handleClear}>Clear</Button>
                <Button className='p-2 m-2' id='add-update-button' variant="success" onClick={handleAdd}>Add</Button>
              </div>
            </Card.Body>
          </Card >
        </Col>
      </Row>

    </>
  )
}

export default Skills
