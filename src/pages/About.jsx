import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material'
import { CheckCircle, GpsFixed, Lightbulb, EmojiEvents } from '@mui/icons-material'

function About() {
  return (
    <Box sx={{ pt: 10 }}>
      {/* Hero Banner */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0066cc 0%, #003d99 100%)',
          color: 'white',
          py: { xs: 6, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            About Ductify Leads
          </Typography>
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 400,
            }}
          >
            Leading the Future of AC Duct Cleaning Lead Generation
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  color: '#1a2332',
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                }}
              >
                Who We Are
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#5a6b7d',
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                Ductify Leads is a specialized B2B lead generation company that connects AC duct
                cleaning businesses with real homeowners, commercial clients, and property managers
                actively looking for duct cleaning services across the USA and Canada.
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#5a6b7d',
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                We combine advanced digital marketing, GpsFixeded outreach, and human-verified lead
                qualification to deliver exclusive, high-intent leads directly to our partners.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  backgroundColor: '#f5f7fa',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      color: '#0066cc',
                    }}
                  >
                    The Problem We Solve
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {[
                      'Shared leads sold to multiple companies',
                      'Fake or unverified inquiries',
                      'Low-quality call center leads',
                      'Wasting time on non-serious customers',
                      'Unpredictable monthly workload',
                    ].map((item, idx) => (
                      <Box key={idx} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            minWidth: 24,
                            minHeight: 24,
                            backgroundColor: '#ff6b35',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </Box>
                        <Typography sx={{ color: '#5a6b7d' }}>{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Story */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f5f7fa' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 6,
              color: '#1a2332',
              textAlign: 'center',
              fontSize: { xs: '1.8rem', md: '2.2rem' },
            }}
          >
            Our Story
          </Typography>
          <Typography
            sx={{
              fontSize: '1.05rem',
              color: '#5a6b7d',
              maxWidth: '800px',
              mx: 'auto',
              mb: 4,
              lineHeight: 1.8,
              textAlign: 'center',
            }}
          >
            Ductify Leads was created to solve a major problem in the duct cleaning industry: companies
            spend too much time and money chasing low-quality leads that never convert. So, we built a
            system that flips the script. At Ductify Leads, every lead is exclusive, verified, and ready
            for contact.
          </Typography>
          <Typography
            sx={{
              fontSize: '1.05rem',
              color: '#5a6b7d',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.8,
              textAlign: 'center',
            }}
          >
            Today, we help duct cleaning companies of all sizes — from small local providers to multi-state
            commercial contractors — grow faster, smoother, and more consistently.
          </Typography>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: 5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <GpsFixed sx={{ fontSize: '2rem', color: '#0066cc' }} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: '#1a2332',
                      }}
                    >
                      Our Mission
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      color: '#5a6b7d',
                      lineHeight: 1.8,
                    }}
                  >
                    To empower duct cleaning companies with reliable, exclusive, and verified customer
                    leads that help them scale with confidence. We aim to become the most trusted and
                    effective lead generation partner for AC duct cleaning businesses across North America.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: 5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Lightbulb sx={{ fontSize: '2rem', color: '#ff6b35' }} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: '#1a2332',
                      }}
                    >
                      Our Vision
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      color: '#5a6b7d',
                      lineHeight: 1.8,
                    }}
                  >
                    A future where duct cleaning companies never struggle to find customers. We envision a
                    system where service providers focus on delivering great service, while we handle
                    customer outreach, lead generation, lead verification, and appointment scheduling.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* What Sets Us Apart */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f5f7fa' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 8,
              color: '#1a2332',
              textAlign: 'center',
              fontSize: { xs: '1.8rem', md: '2.2rem' },
            }}
          >
            What Sets Us Apart
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <CheckCircle />,
                title: '100% Exclusive Leads',
                desc: 'No shared leads. Every customer inquiry is yours only.',
              },
              {
                icon: <EmojiEvents />,
                title: 'Human-Verified Leads',
                desc: 'Our ISA team verifies customer interest, service type, address, and availability.',
              },
              {
                icon: <Lightbulb />,
                title: 'Real-Time Delivery',
                desc: 'Leads are delivered instantly through email and dashboard.',
              },
              {
                icon: <GpsFixed />,
                title: 'Full USA & Canada Coverage',
                desc: 'Pick your states, cities, or ZIP codes.',
              },
              {
                icon: <CheckCircle />,
                title: 'Flexible Plans',
                desc: 'Choose monthly or yearly packages tailored to your business size.',
              },
              {
                icon: <EmojiEvents />,
                title: 'Dependable Support',
                desc: 'Dedicated support team to help you at every step.',
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
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ color: '#0066cc', mb: 2, fontSize: '2rem' }}>
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
                    <Typography sx={{ color: '#5a6b7d', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
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
            Ready to Partner with Ductify Leads?
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.95 }}>
            Join the network of successful duct cleaning businesses growing with exclusive leads.
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
            Get Started Free
          </Button>
        </Container>
      </Box>
    </Box>
  )
}

export default About
