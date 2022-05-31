import React from 'react'
import { Col, Row, Button, InputGroup, FormControl } from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import { DesktopOutlined } from '@ant-design/icons'
import { PieChartOutlined } from '@ant-design/icons'
// import { AiFillLinkedin } from "react-icons/ai";
// import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai"
import { Carousel } from 'antd';
import Container from 'react-bootstrap/Container'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = () => {
  return (
    <div>
        <div color="blue" className="font-small pt-4  " style={{ color: "#ffff", backgroundColor: "#001f41" }}>
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="4">
              <h5 className="title">About Me</h5>
              <p className='para'>
                “Self-motivated, highly passionate and hardworking and work in a challenging organization 
                to utilize my skills and knowledge to work for the growth of the organization.

                My specialties include quickly learning new skills and programming languages, 
                problem solving, responsive design principles.
              </p>

            </Col>
            <Col md="4">
              <h5 className="title">Newsletter</h5>
              <p className='para1'>Stay updated with our latest trends</p>
              <InputGroup size="sm" className="mb-3">
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                <span className='icon3'>
                    {/* <AiOutlineArrowRight /> */}
                    <ArrowForwardIcon/>
                    </span>
              </InputGroup>
            </Col>
            <Col md="4">
              <h5 className="title">Follow Me</h5>
              <p className='para1'>on social Media</p>
              <FacebookSharpIcon/>
              <GoogleIcon/>
              <TwitterIcon/>
              {/* <AiFillLinkedin />
              <AiFillGithub /> */}
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:#########
          </Container>
        </div>
      </div>
{/* ============== */}
    </div>
  )
}

export default Footer