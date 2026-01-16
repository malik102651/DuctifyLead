import React from 'react'
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material'
import { Phone, Email, Facebook, Twitter, LinkedIn } from '@mui/icons-material'

function Footer() {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#1a2332',
        color: 'rgba(255, 255, 255, 0.8)',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, mb: 4 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: '#ff6b35',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Ductify Leads
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7, maxWidth: '300px' }}>
              The #1 lead generation platform for AC duct cleaning businesses across the USA and Canada.
              Get exclusive, verified leads delivered to your dashboard in real-time.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#ff6b35',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Facebook sx={{ fontSize: 20 }} />
              </Box>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#ff6b35',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Twitter sx={{ fontSize: 20 }} />
              </Box>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#ff6b35',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <LinkedIn sx={{ fontSize: 20 }} />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'white' }}>
              Product
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {['Features', 'Pricing', 'How It Works', 'Dashboard'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#ff6b35' },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'white' }}>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {['About Us', 'Blog', 'Careers', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#ff6b35' },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'white' }}>
              Get In Touch
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone sx={{ fontSize: 20, color: '#ff6b35', flexShrink: 0 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontSize: '0.85rem', opacity: 0.7 }}>
                    Phone
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    +1 (800) 555-0123
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email sx={{ fontSize: 20, color: '#ff6b35', flexShrink: 0 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontSize: '0.85rem', opacity: 0.7 }}>
                    Email
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    support@ductifyleads.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 4 }} />

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © 2025 Ductify Leads. All Rights Reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link
              href="#"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                '&:hover': { color: '#ff6b35' },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                '&:hover': { color: '#ff6b35' },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

