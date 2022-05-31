import React from "react";
import { Carousel } from 'antd';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import img from "../../assests/about.jpg";
import img1 from "../../assests/aboutoffice.webp";
import './test.css'
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
// import { CardsData } from '../../utils/constants'

const Test = () => {
    const contentStyle = {
      height: 'auto',
      padding:'2em',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#001f41',
      marginBottom:'1em'
    };
  return (
    <div  className="testimonial">
        <h4>Tsetimonials</h4>
        <p className="testimonialPara">What people are saying about company</p>
<Carousel  className="carousel" autoplay>
    <div>
      <div style={contentStyle}>
      <div className='cards' sx={{margin:'auto'}}>
            <Card  sx={{ maxWidth: 700 , margin:'auto'}}>
              <CardContent>
                <div className='avatarContainer'>
                  <Avatar
                    alt='Travis Howard'
                    src={img1}
                  />
                </div>
                <Stack spacing={1}>
                <Rating name="size-large" defaultValue={2} size="small" sx={{margin : 'auto'}} />
              </Stack>
                <Typography
                  gutterBottom
                  variant='h4'
                  component='div'
                  className='cards-head'
                sx={{ textAlign: 'center' }}
                >
                  John Smith 
                </Typography>
                <Typography  /* color='text.secondary' */ sx={{ fontWeight: 'bold', color: 'rgba(0, 0, 0,0.5)' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, culpa? Quo ratione 
                  numquam sint perferendis laudantium nihil, exercitationem suscipit
                   enim totam rem repellat tenetur magnam libero quasi consectetur dignissimos molestias.
                </Typography>
              </CardContent>
            </Card>
          </div>
      </div>
    </div>
    <div>
      <div style={contentStyle}>
      <div className='cards' sx={{margin:'auto'}}>
            <Card  sx={{ maxWidth: 700, margin:'auto' }}>
              <CardContent>
                <div className='avatarContainer'>
                  <Avatar
                    alt='Travis Howard'
                    src={img1}
                  />
                </div>
                <Stack spacing={1}>
                <Rating name="size-large" defaultValue={2} size="small" sx={{margin : 'auto'}} />
              </Stack>
                <Typography
                  gutterBottom
                  variant='h4'
                  component='div'
                  className='cards-head'
                sx={{ textAlign: 'center' }}
                >
                  John Smith 
                </Typography>
                <Typography  /* color='text.secondary' */ sx={{ fontWeight: 'bold', color: 'rgba(0, 0, 0,0.5)' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, culpa? Quo ratione 
                  numquam sint perferendis laudantium nihil, exercitationem suscipit
                   enim totam rem repellat tenetur magnam libero quasi consectetur dignissimos molestias.
                </Typography>
              </CardContent>
            </Card>
          </div>
      </div>
    </div>
    <div>
      <div style={contentStyle}>
      <div className='cards' sx={{margin:'auto'}}>
            <Card  sx={{ maxWidth: 700, margin:'auto' }}>
              <CardContent>
                <div className='avatarContainer'>
                  <Avatar
                    alt='Travis Howard'
                    src={img1}
                  />
                </div>
                <Stack spacing={1}>
                <Rating name="size-large" defaultValue={2} size="small" sx={{margin : 'auto'}} />
              </Stack>
                <Typography
                  gutterBottom
                  variant='h4'
                  component='div'
                  className='cards-head'
                sx={{ textAlign: 'center' }}
                >
                  John Smith 
                </Typography>
                <Typography  /* color='text.secondary' */ sx={{ fontWeight: 'bold', color: 'rgba(0, 0, 0,0.5)' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, culpa? Quo ratione 
                  numquam sint perferendis laudantium nihil, exercitationem suscipit
                   enim totam rem repellat tenetur magnam libero quasi consectetur dignissimos molestias.
                </Typography>
              </CardContent>
            </Card>
          </div>
      </div>
    </div>
    <div>
      <div style={contentStyle}>
      <div className='cards' sx={{margin:'auto'}}>
            <Card  sx={{ maxWidth: 700, margin:'auto' }}>
              <CardContent>
                <div className='avatarContainer'>
                  <Avatar
                    alt='Travis Howard'
                    src={img1}
                  />
                </div>
                <Stack spacing={1}>
                <Rating name="size-large" defaultValue={2} size="small" sx={{margin : 'auto'}} />
              </Stack>
                <Typography
                  gutterBottom
                  variant='h4'
                  component='div'
                  className='cards-head'
                sx={{ textAlign: 'center' }}
                >
                  John Smith 
                </Typography>
                <Typography  /* color='text.secondary' */ sx={{ fontWeight: 'bold', color: 'rgba(0, 0, 0,0.5)' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, culpa? Quo ratione 
                  numquam sint perferendis laudantium nihil, exercitationem suscipit
                   enim totam rem repellat tenetur magnam libero quasi consectetur dignissimos molestias.
                </Typography>
              </CardContent>
            </Card>
          </div>
      </div>
    </div>
  </Carousel>
    </div>
  );
};

export default Test;
