import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import './App.css'
// import { GoRocket } from 'react-icons/go'
import { DesktopOutlined } from '@ant-design/icons'
import { PieChartOutlined } from '@ant-design/icons'
// import { AiFillLinkedin } from "react-icons/ai";
// import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai"

const Service = () => {
  return (
    <div>
        <div className='offered' >
        <h1>My Offered Services</h1>
        <p>At about this time of year, some months after
          New Year’s resolutions have been made and kept, or made and neglected.</p>
        <CardGroup data-aos="fade-up">
          <Card>
            <Card.Body>
              <span className='icon'><PieChartOutlined /></span>
              <Card.Title>Web Design</Card.Title>
              <Card.Text>
                Web design is the process of planning, conceptualizing, and
                arranging content online.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <span className='icon'><DesktopOutlined /></span>
              <Card.Title>Web development</Card.Title>
              <Card.Text>
                Web development is everything involved in the creation of a website.
                Typically it refers to the coding and programming side of web site production{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <span className='icon'><PieChartOutlined /></span>
              <Card.Title>Software Testing</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup data-aos="fade-up">
          <Card>
            <Card.Body>
              <span className='icon'><PieChartOutlined /></span>
              <Card.Title>Web Design</Card.Title>
              <Card.Text>
                Web design is the process of planning, conceptualizing, and
                arranging content online.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <span className='icon'><DesktopOutlined /></span>
              <Card.Title>Web development</Card.Title>
              <Card.Text>
                Web development is everything involved in the creation of a website.
                Typically it refers to the coding and programming side of web site production{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <span className='icon'><PieChartOutlined /></span>
              <Card.Title>Software Testing</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  )
}

export default Service