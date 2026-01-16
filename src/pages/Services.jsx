import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { CheckCircle, People, TrendingUp, LocationOn, Speed, Notifications, DoneAll, LocalShipping, VerifiedUser, LocationCity, CreditCard, Support } from '@mui/icons-material'

function Services() {
  const mainServices = [
    {
      icon: <DoneAll />,
      title: 'Exclusive Lead Generation',
      subtitle: 'High-Intent Customers, One Business Only',
      desc: 'We generate real customer inquiries from homeowners, offices, apartments, and commercial properties actively looking for duct cleaning services.',
      features: [
        '100% exclusive leads',
        'No reselling or shared inquiries',
        'Residential & commercial leads',
        'Local and regional targeting',
      ],
      color: '#0066cc',
    },
    {
      icon: <VerifiedUser />,
      title: 'Lead Verification & Qualification',
      subtitle: 'Only Real, Ready-to-Book Customers',
      desc: 'Before sending a lead to you, our ISA team verifies customer details, service requirements, property type, location, and customer intent.',
      features: [
        'Customer name & contact details',
        'Service requirement (duct cleaning type)',
        'Property type (home, office, commercial)',
        'Service location',
        'Customer intent & availability',
      ],
      color: '#10b981',
    },
    {
      icon: <LocalShipping />,
      title: 'Appointment Scheduling',
      subtitle: 'We Set the Appointment — You Close the Deal',
      desc: 'For businesses that want a hands-off solution, LM Duct offers appointment scheduling services.',
      features: [
        'Scheduled service appointments',
        'Customer availability confirmed',
        'Reduced follow-up time',
        'Higher close rates',
      ],
      color: '#ff6b35',
    },
    {
      icon: <LocationCity />,
      title: 'Lead Delivery System (CRM Dashboard)',
      subtitle: 'All Your Leads in One Secure Portal',
      desc: 'Access a simple and powerful Lead Management Dashboard where you can view, track, and manage all your leads.',
      features: [
        'View new leads in real time',
        'Track lead status (New, Contacted, Scheduled, Closed)',
        'Access customer details instantly',
        'Download lead history',
        'Monitor monthly performance',
      ],
      color: '#6366f1',
    },
    {
      icon: <LocationOn />,
      title: 'Service Area Targeting',
      subtitle: 'Leads From the Locations You Choose',
      desc: 'Choose exactly where you want leads from and we send leads only from the areas you serve.',
      features: [
        'States',
        'Cities',
        'ZIP Codes',
        'Specific service regions',
      ],
      color: '#ec4899',
    },
    {
      icon: <TrendingUp />,
      title: 'Residential & Commercial Leads',
      subtitle: 'Serving All Duct Cleaning Needs',
      desc: 'We generate leads for all types of duct cleaning services. You decide what type of work you want — we deliver accordingly.',
      features: [
        'Residential AC duct cleaning',
        'Commercial duct cleaning',
        'Office buildings',
        'Apartments & complexes',
        'Industrial & warehouse spaces',
      ],
      color: '#f59e0b',
    },
  ]

  const whyChoose = [
    'Exclusive leads only',
    'Human-verified customers',
    'Transparent delivery system',
    'No long-term lock-ins',
    'USA & Canada coverage',
    'Dedicated partner support',
  ]

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
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            OUR SERVICES
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: '1.3rem', md: '1.6rem' },
              color: '#ff6b35',
            }}
          >
            End-to-End Lead Generation Solutions for AC Duct Cleaning Companies
          </Typography>
          <Typography
            sx={{
              fontSize: '1.1rem',
              fontWeight: 400,
              lineHeight: 1.8,
            }}
          >
            LM Duct provides a complete customer acquisition system designed exclusively for AC duct cleaning businesses across the USA and Canada. We don't just generate leads — we deliver verified, exclusive opportunities that help you book more jobs and grow consistently.
          </Typography>
        </Container>
      </Box>

      {/* Main Services */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={6}>
            {mainServices.map((service, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0,0,0,0.05)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 2,
                          backgroundColor: `${service.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Box sx={{ color: service.color, fontSize: 28 }}>
                          {service.icon}
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: '#1a2332',
                            fontSize: '1.1rem',
                            mb: 0.5,
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: service.color,
                            fontWeight: 600,
                            fontSize: '0.9rem',
                          }}
                        >
                          {service.subtitle}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        color: '#5a6b7d',
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                        mb: 3,
                      }}
                    >
                      {service.desc}
                    </Typography>

                    <List sx={{ p: 0 }}>
                      {service.features.map((feature, feaIdx) => (
                        <ListItem key={feaIdx} sx={{ p: 0, mb: 1 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle
                              sx={{
                                color: service.color,
                                fontSize: '1.2rem',
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              sx: {
                                color: '#5a6b7d',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why LM Duct */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f5f7fa' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 8,
              color: '#1a2332',
              textAlign: 'center',
              fontSize: { xs: '2.2rem', md: '2.8rem' },
            }}
          >
            WHY LM DUCT?
          </Typography>

          <Grid container spacing={3}>
            {whyChoose.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <CheckCircle
                    sx={{
                      color: '#0066cc',
                      fontSize: '1.8rem',
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      color: '#1a2332',
                      fontWeight: 600,
                      fontSize: '1rem',
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
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
            Ready to Grow Your Duct Cleaning Business?
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.95 }}>
            Join successful duct cleaning companies across the USA & Canada that are growing faster with exclusive leads.
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
            Get Started Today
          </Button>
        </Container>
      </Box>
    </Box>
  )
}

export default Services
