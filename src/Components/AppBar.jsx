import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Lottie from 'react-lottie';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import * as animationData from '../assests/98629-split-this-logo-animation.json'

const pages = [
    {
     pageName:"Home",
     link:"hjhj"
    },
    {
      pageName:"Servce",
      link:"hjhj"  
    },
    {
      pageName:"Porfolio",
      link:"hjhj" 
    },
    {
      pageName:"Testmonials",
      link:"hjhj"
    },
    {
      pageName:"Contact us",
      link:"hjh"
     },
     {
       pageName:"About us",
       link:"hjhj"
     }];
     var questions = [
      {
        question: " Q#1  Who is the first governer of Pakistan?",
        answer: "Quaid-e-azam",
        options: [
          "Quaid-e-azam",
          "Liaquat ali khan",
          "Iskandar Mirza"
        ]
      },
      {
        question: "Q#2   Who is the first PM of Pakistan?",
        answer: "Liaquat ali khan",
        options: [
          "Quaid-e-azam",
          "Liaquat ali khan",
          "Iskandar Mirza"
        ]
      },
      {
        question: "Q#3   Who is the last messenger of ALLAh?",
        answer: "Hazrat Muhammad (s.A.W.W)",
        options: [
          "Hazrat Adam(A.S) ", "Hazrat Adam(A.S)", "Hazrat Muhammad (s.A.W.W)"]
      },
      {
        question: "Q#4 The sum of 16+9+4 is:",
        answer: "29",
        options: ["25", "30", "29"]
      },
      {
        question: "Q#5 What is the name first virus of computer?",
        answer: "Brain virus",
        options: ["Malware",
          "Brain virus",
          "DOS virus"]
      },
      {
        question: "Q#6 Which supply blood?",
        answer: "arteries",
        options: ["veins",
          "arteries",
          "none of the above"]
      },
      {
        question: "Q#7  using BODMAS rule 2+{(3*6)-9}",
        answer: "11",
        options: ["45", "11", "13"]
      },
      {
        question: "Q#8    Pc stand for?",
        answer: "personal computer",
        options: ["pakistan computer",
          "power computer",
          "personal computer"]
      },
      {
        question: "Q#9  what is the formula of (a<sup>2</sup>+b<sup>2</sup>)",
        answer: "(a+b)(a-b)",
        options: [" a<sup>2</sup>+2ab+b<sup>2</sup>",
          "(a+b)(a-b)",
          "none of the above"]
      },
      {
       pageName:"Home",
       link:"hjhj"
      }
    ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Appbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const defaultOptions = {
    color:"blue",
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <AppBar position="static" className='Appbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        {/* <Lottie options={defaultOptions}
              height={100}
              width={100}
              /> */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,color:'#04E3FF'}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Righteous',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#04E3FF',
              textDecoration: 'none',
            }}
          >
            ENTROLICS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:'#04E3FF'}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page,i) =>  { 
                console.log(page.pageName)
               return(
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.pageName}</Typography>
                </MenuItem>)}
              )}
              {/* {pages.map((page,i)=>{
                console.log(page.pageName)
               
                <h1>{page.pageName}</h1>)
              })} */}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color:'04E3FF' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#04E3FF',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,i) => (
              <Button
              className='appBarBtn'
                key={i}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#04E3FF', display: 'block' }}
              >
                {page.pageName}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} className='appicon'>
                <FacebookSharpIcon sx={{color:'#04E3FF', margin:'0 0.5em'}}/>
                <InstagramIcon sx={{color:'#04E3FF', margin:'0 0.5em'}}/>
                <TwitterIcon sx={{color:'#04E3FF', margin:'0 0.5em'}}/>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Appbar;
