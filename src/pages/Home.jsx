import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material'
import { ArrowRight, BarChart, Bolt, People } from '@mui/icons-material'
import Hero from '../components/Hero'
import Services from '../components/Services'

function Home() {
  return (
    <>
      <Hero />
      <Services />

      {/* SECTION 1 - What We Do */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  color: '#1a2332',
                  fontSize: { xs: '2.2rem', md: '2.8rem' },
                }}
              >
                What We Do
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.1rem',
                  color: '#5a6b7d',
                  mb: 3,
                  lineHeight: 1.8,
                  fontWeight: 500,
                }}
              >
                Ductify Leads specializes in generating high-intent, exclusive leads for AC duct cleaning
                businesses.
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#5a6b7d',
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                Our team finds real customers who actively need duct cleaning, verifies every inquiry,
                and delivers them straight to your dashboard in real-time — no shared leads, no
                competition.
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowRight />}
                sx={{
                  backgroundColor: '#0066cc',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#004499',
                  },
                }}
              >
                Get Your Leads Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 3,
                }}
              >
                {[
                  {
                    title: 'Real Customers',
                    desc: 'Homeowners and businesses actively searching for duct cleaning services',
                  },
                  {
                    title: 'Verified Details',
                    desc: 'Every lead verified for legitimacy and service requirements',
                  },
                  {
                    title: 'Real-Time Delivery',
                    desc: 'Get leads instantly to your dashboard without delays',
                  },
                ].map((item, idx) => (
                  <Card
                    key={idx}
                    sx={{
                      borderRadius: 2,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                      backgroundColor: '#f5f7fa',
                      border: '1px solid #e0e7ff',
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: '#0066cc',
                        }}
                      >
                        ✓ {item.title}
                      </Typography>
                      <Typography sx={{ color: '#5a6b7d', fontSize: '0.95rem' }}>
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 2 - Who We Help */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f5f7fa' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: '#1a2332',
                fontSize: { xs: '2.2rem', md: '2.8rem' },
              }}
            >
              Who We Help
            </Typography>
            <Typography
              sx={{
                fontSize: '1.1rem',
                color: '#5a6b7d',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              If you provide duct cleaning services, Ductify Leads brings you customers.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: <BarChart sx={{ fontSize: '2.5rem' }} />,
                title: 'Local AC Duct Cleaning Companies',
                desc: 'Scale your local business with steady lead flow',
              },
              {
                icon: <People sx={{ fontSize: '2.5rem' }} />,
                title: 'Commercial Duct Cleaning Contractors',
                desc: 'Target commercial clients and property managers',
              },
              {
                icon: <Bolt sx={{ fontSize: '2.5rem' }} />,
                title: 'HVAC Cleaning Businesses',
                desc: 'Expand your service offerings with qualified leads',
              },
              {
                icon: <BarChart sx={{ fontSize: '2.5rem' }} />,
                title: 'Multi-location Providers',
                desc: 'Manage leads across multiple service areas',
              },
              {
                icon: <People sx={{ fontSize: '2.5rem' }} />,
                title: 'Startups & Growing Providers',
                desc: 'Jump-start your business with immediate customer leads',
              },
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box
                      sx={{
                        color: '#0066cc',
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: '#1a2332',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: '#5a6b7d', fontSize: '0.95rem' }}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #0066cc 0%, #003d99 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.8rem' },
            }}
          >
            Ready to Scale Your Duct Cleaning Business?
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.95 }}>
            Join hundreds of duct cleaning companies that trust Ductify Leads for exclusive,
            verified customer leads.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#ff6b35',
              px: 5,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#ff5522',
              },
            }}
          >
            Start Free Trial Today
          </Button>
        </Container>
      </Box>
    </>
  )
}

export default Home

