import React from 'react'
import { Box, Container, Typography, Button, Grid } from '@mui/material'
import { ArrowRight, CheckCircle } from '@mui/icons-material'

function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 12,
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #0066cc 0%, #003d99 50%, #1a2332 100%)',
          zIndex: 0,
        }}
      />

      {/* Animated background shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255, 107, 53, 0.1)',
          zIndex: 1,
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-30px)' },
          },
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, px: { xs: 3, md: 6 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
              Stop Chasing. Start Cleaning.
            </Typography>

            <Typography
              variant="h1"
              sx={{
                color: '#ff6b35',
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
              Get Exclusive AC Duct Cleaning Leads
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 4,
                fontSize: '1.1rem',
                fontWeight: 400,
                maxWidth: '600px',
              }}
            >
              Join Ductify Leads — a premium lead generation network connecting duct cleaning
              businesses with verified homeowners & commercial clients across the USA & Canada.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5 }}>
              <Button
                variant="contained"
                endIcon={<ArrowRight />}
                sx={{
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  px: 4,
                  py: 1.8,
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#ff5522',
                    transform: 'translateX(5px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Learn More
              </Button>

              <Button
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  px: 4,
                  py: 1.8,
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white',
                  },
                }}
              >
                Get Started Free
              </Button>
            </Box>

            {/* Trust badges */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ color: '#10b981', fontSize: '1.5rem', flexShrink: 0 }} />
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>
                  100% Exclusive Leads
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ color: '#10b981', fontSize: '1.5rem', flexShrink: 0 }} />
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>
                  Human-Verified
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ color: '#10b981', fontSize: '1.5rem', flexShrink: 0 }} />
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>
                  Real-Time Delivery
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ color: '#10b981', fontSize: '1.5rem', flexShrink: 0 }} />
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>
                  USA & Canada Coverage
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero

