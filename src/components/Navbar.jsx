import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from '@mui/material'
import { Phone, Menu, Close } from '@mui/icons-material'

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      ...children.props.sx,
      backgroundColor: trigger ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
      backdropFilter: trigger ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease-in-out',
    },
  })
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact Us', path: '/contact' },
  ]

  const isHomePage = location.pathname === '/'
  const isTransparent = isHomePage && !isScrolled

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" sx={{ 
          backgroundColor: isTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.98)',
          boxShadow: isTransparent ? 'none' : 1,
          transition: 'all 0.3s ease-in-out',
        }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Toolbar sx={{ py: 1 }}>
              <Typography
                component={Link}
                to="/"
                variant="h5"
                sx={{
                  flexGrow: { xs: 1, md: 0 },
                  fontWeight: 700,
                  color: isTransparent ? 'white' : 'primary.main',
                  fontFamily: "'Poppins', sans-serif",
                  textDecoration: 'none',
                  transition: 'color 0.3s ease-in-out',
                }}
              >
                Ductify Leads
              </Typography>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, ml: 4, gap: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: location.pathname === item.path 
                        ? isTransparent ? 'white' : 'primary.main'
                        : isTransparent ? 'white' : 'text.primary',
                      fontWeight: location.pathname === item.path ? 600 : 500,
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'transparent',
                      },
                      transition: 'color 0.3s ease-in-out',
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<Phone />}
                  sx={{
                    backgroundColor: 'primary.main',
                    px: 3,
                    py: 1,
                    borderRadius: 3,
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  display: { md: 'none' }, 
                  color: isTransparent ? 'white' : 'text.primary', 
                  transition: 'color 0.3s ease-in-out' 
                }}
              >
                <Menu />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <Close />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                  fontWeight: location.pathname === item.path ? 600 : 400,
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                m: 2,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              <ListItemText primary="Get Started" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Navbar

