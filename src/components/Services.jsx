import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material'
import {
  CheckCircle,
  TrendingUp,
  People,
  Speed,
  LocationOn,
  Notifications,
} from '@mui/icons-material'

const features = [
  {
    icon: <CheckCircle />,
    title: 'Exclusive Leads Only',
    description: 'Every lead is one company only — never sold to your competitors.',
    color: '#0066cc',
  },
  {
    icon: <People />,
    title: 'Real Homeowners & Businesses',
    description: 'We generate leads from homeowners, offices, apartments, and commercial spaces needing duct cleaning.',
    color: '#ff6b35',
  },
  {
    icon: <TrendingUp />,
    title: 'High Intent, Verified Leads',
    description: 'Our ISA team verifies customer details before delivering the lead.',
    color: '#10b981',
  },
  {
    icon: <LocationOn />,
    title: 'USA & Canada Coverage',
    description: 'Target specific states, ZIP codes, or entire regions.',
    color: '#6366f1',
  },
  {
    icon: <Speed />,
    title: 'Instant Delivery',
    description: 'Receive leads through email, CRM dashboard, and phone notification.',
    color: '#ec4899',
  },
  {
    icon: <Notifications />,
    title: 'Monthly & Yearly Packages',
    description: 'Choose the plan that fits your business growth goals.',
    color: '#f59e0b',
  },
]

function Services() {
  return (
    <Box sx={{ py: { xs: 10, md: 16 }, backgroundColor: '#f5f7fa' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: '#1a2332',
              fontSize: { xs: '2.2rem', md: '3rem' },
            }}
          >
            Why Companies Choose Ductify Leads
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#5a6b7d',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.15rem' },
              fontWeight: 400,
            }}
          >
            We Help Duct Cleaning Companies Grow Faster With Verified, Exclusive Leads
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0,0,0,0.05)',
                  backgroundColor: 'white',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      backgroundColor: `${feature.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <Box sx={{ color: feature.color, fontSize: 28 }}>{feature.icon}</Box>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: '#1a2332',
                      fontSize: '1.1rem',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#5a6b7d',
                      lineHeight: 1.7,
                      fontSize: '0.95rem',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Services

