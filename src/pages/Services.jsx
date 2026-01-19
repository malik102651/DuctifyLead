import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material'
import {
  CheckCircle,
  Air,
  FilterAlt,
  Home,
  Domain,
  ArrowRight,
  Verified,
  LocationOn,
  TrendingUp,
  PersonAdd,
} from '@mui/icons-material'
import Flame from '@mui/icons-material/LocalFireDepartment'
import Snowflake from '@mui/icons-material/AcUnit'
import Wind from '@mui/icons-material/Air'
import Wrench from '@mui/icons-material/Build'





function Services() {
  const hvacLeadCategories = [
    {
      icon: <Wind />,
      title: 'Air Duct Cleaning Leads',
      description: 'Homeowners and commercial clients actively seeking HVAC duct cleaning, vent cleaning, and airflow system maintenance.',
      color: '#0066cc',
    },
    {
      icon: <Flame />,
      title: 'Heating Service Leads',
      description: 'Customers needing furnace repair, heat pump services, boiler maintenance, and seasonal heating upgrades.',
      color: '#ff6b35',
    },
    {
      icon: <Snowflake />,
      title: 'Air Conditioning Installation & Repair Leads',
      description: 'AC installation, repair, and maintenance requests from customers experiencing cooling issues or planning upgrades.',
      color: '#00cc88',
    },
    {
      icon: <Wrench />,
      title: 'HVAC Repair & Maintenance Leads',
      description: 'Full-service HVAC needs including diagnostics, system repairs, tune-ups, and ongoing maintenance contracts.',
      color: '#6b5bff',
    },
    {
      icon: <Air />,
      title: 'Ventilation & Blower Service Leads',
      description: 'Airflow optimization, blower motor services, ventilation upgrades, and system component improvements.',
      color: '#ff4444',
    },
    {
      icon: <FilterAlt />,
      title: 'Indoor Air Quality Service Leads',
      description: 'Leads for air purification, filtration systems, humidity control, and indoor air quality solutions.',
      color: '#ffaa00',
    },
    {
      icon: <Home />,
      title: 'Residential HVAC Leads',
      description: 'Service requests from homeowners with houses, apartments, and residential properties needing HVAC services.',
      color: '#10b981',
    },
    {
      icon: <Domain />,
      title: 'Commercial HVAC Leads',
      description: 'Service requests from offices, retail spaces, apartment buildings, and commercial facilities.',
      color: '#ec4899',
    },
  ]

  const leadDeliverySteps = [
    {
      number: '1',
      title: 'Customers Submit Service Requests',
      description: 'Homeowners and businesses submit HVAC service requests online or through our platform.',
    },
    {
      number: '2',
      title: 'Team Verification',
      description: 'Our team verifies the request for accuracy, legitimacy, and intent to move forward.',
    },
    {
      number: '3',
      title: 'Service & ZIP Code Matching',
      description: 'Leads are assigned based on service type and your selected service areas.',
    },
    {
      number: '4',
      title: 'Exclusive Delivery',
      description: 'Each lead is delivered exclusively to one business. No shared leads. No competition.',
    },
    {
      number: '5',
      title: 'Real-Time Dashboard Access',
      description: 'Track lead status, customer details, and conversion metrics in your personal dashboard.',
    },
  ]

  const whyConvertBetter = [
    {
      icon: <PersonAdd />,
      title: 'High-Intent Customers',
      description: 'Active leads actively searching for your specific services',
    },
    {
      icon: <LocationOn />,
      title: 'ZIP Code Exclusivity',
      description: 'One business per service area eliminates competition',
    },
    {
      icon: <Verified />,
      title: 'Human-Verified Inquiries',
      description: 'Every lead verified for accuracy and service intent',
    },
    {
      icon: <TrendingUp />,
      title: 'Service-Specific Targeting',
      description: 'Leads match exactly what your business offers',
    },
  ]

  return (
    <Box sx={{ pt: 10 }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
          position: 'relative',
          overflow: 'hidden',
          color: 'white',
          py: { xs: 8, md: 12 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Chip
              label="Our Services"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontWeight: 600,
                mb: 3,
                fontSize: '0.9rem',
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
              Exclusive, Service-Specific HVAC Leads
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                mb: 3,
                opacity: 0.95,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              We don't perform HVAC services — we connect your business with customers actively searching for those services. Every lead is exclusive to you, verified, and matched to your specific service offerings.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* WHAT WE OFFER */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: '#1a2332',
                fontSize: { xs: '2.2rem', md: '2.8rem' },
              }}
            >
              What We Offer
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                color: '#5a6b7d',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Ductify Leads provides exclusive, service-specific HVAC leads to local businesses. Each business receives leads only for the services they offer and only within their selected ZIP codes.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              'High-intent customers actively seeking service',
              'ZIP code exclusivity — no competition',
              'Human-verified inquiries and intent',
              'Service-specific targeting',
              'Faster response opportunities',
              'Transparent delivery system',
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <CheckCircle
                    sx={{
                      color: '#0066cc',
                      fontSize: '1.5rem',
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  />
                  <Typography
                    sx={{
                      color: '#1a2332',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      lineHeight: 1.5,
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

      {/* HVAC LEAD CATEGORIES */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f5f7fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: '#1a2332',
                fontSize: { xs: '2.2rem', md: '2.8rem' },
              }}
            >
              HVAC Lead Categories We Provide
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                color: '#5a6b7d',
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              8 specialized service categories to match your business expertise
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {hvacLeadCategories.map((category, idx) => (
              <Grid item xs={12} sm={6} md={6} key={idx}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    height: '100%',
                    backgroundColor: 'white',
                    border: '1px solid #e0e7ff',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                      transform: 'translateY(-8px)',
                    },
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      height: '80px',
                      background: `linear-gradient(135deg, ${category.color}20, ${category.color}05)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box sx={{ color: category.color, fontSize: '2.5rem' }}>
                      {category.icon}
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1a2332',
                        mb: 1,
                        fontSize: '1rem',
                      }}
                    >
                      {category.title}
                    </Typography>
                    <Typography sx={{ color: '#5a6b7d', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {category.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SERVICE-SPECIFIC LEAD MATCHING */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 4,
                  color: '#1a2332',
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Service-Specific Lead Matching
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#5a6b7d',
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                Every lead is matched based on the exact service type you offer, your selected ZIP codes, and whether you serve residential or commercial customers.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {[
                  'The exact service type you offer',
                  'Your selected ZIP codes',
                  'Residential or commercial preference',
                  'Customer intent and urgency level',
                ].map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <CheckCircle sx={{ color: 'white', fontSize: '0.9rem' }} />
                    </Box>
                    <Typography sx={{ color: '#1a2332', fontWeight: 500, fontSize: '0.95rem' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  color: '#5a6b7d',
                  mt: 6,
                  fontStyle: 'italic',
                  borderLeft: '4px solid #0066cc',
                  pl: 3,
                }}
              >
                If your business only offers one service, you will only receive leads relevant to that service. No irrelevant inquiries.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 10px 40px rgba(0,102,204,0.1)',
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  border: '1px solid #e0e7ff',
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
                    p: 4,
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      mb: 2,
                    }}
                  >
                    100% Relevant Leads
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.95rem',
                      opacity: 0.95,
                      lineHeight: 1.6,
                    }}
                  >
                    Every lead matches your service offerings exactly. No time wasted on irrelevant inquiries.
                  </Typography>
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {[
                      { label: 'Service Match', value: '100%' },
                      { label: 'ZIP Code Accuracy', value: 'Verified' },
                      { label: 'Customer Intent', value: 'Pre-Qualified' },
                      { label: 'Exclusivity', value: 'One Per Area' },
                    ].map((item, idx) => (
                      <Box key={idx} sx={{ borderBottom: '1px solid #e0e7ff', pb: 2, '&:last-child': { borderBottom: 'none' } }}>
                        <Typography sx={{ color: '#5a6b7d', fontSize: '0.85rem', fontWeight: 600 }}>
                          {item.label}
                        </Typography>
                        <Typography sx={{ color: '#0066cc', fontSize: '1.1rem', fontWeight: 700, mt: 0.5 }}>
                          {item.value}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* HOW LEAD DELIVERY WORKS */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f5f7fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: '#1a2332',
                fontSize: { xs: '2.2rem', md: '2.8rem' },
              }}
            >
              How Our Lead Delivery Works
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {leadDeliverySteps.map((step, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    height: '100%',
                    backgroundColor: 'white',
                    border: '1px solid #e0e7ff',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                      transform: 'translateY(-8px)',
                    },
                    position: 'relative',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        color: 'white',
                        fontWeight: 800,
                        fontSize: '1.5rem',
                      }}
                    >
                      {step.number}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1a2332',
                        mb: 2,
                        fontSize: '1rem',
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography sx={{ color: '#5a6b7d', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* WHY LEADS CONVERT BETTER */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: '#1a2332',
                fontSize: { xs: '2.2rem', md: '2.8rem' },
              }}
            >
              Why Our HVAC Leads Convert Better
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                color: '#5a6b7d',
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              Our system is designed to deliver quality over quantity. Higher conversion rates mean more closed jobs and better ROI.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {whyConvertBetter.map((item, idx) => (
              <Grid item xs={12} sm={6} md={6} key={idx}>
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: '56px',
                      height: '56px',
                      borderRadius: 2,
                      backgroundColor: '#0066cc15',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Box sx={{ color: '#0066cc', fontSize: '1.8rem' }}>
                      {item.icon}
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1a2332',
                        mb: 1,
                        fontSize: '1rem',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: '#5a6b7d', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CLOSING SECTION */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f5f7fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 4,
                color: '#1a2332',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Built for Consistent Growth
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                color: '#5a6b7d',
                maxWidth: '700px',
                mx: 'auto',
                mb: 6,
                lineHeight: 1.8,
              }}
            >
              Ductify Leads is built to support HVAC businesses with a consistent flow of exclusive, service-specific leads designed to drive real results. With transparent processes, ZIP code exclusivity, and a focus on long-term partnerships, we help you grow with confidence and predictability.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* CTA SECTION */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 8, md: 10 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-30%',
            left: '-30%',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 60%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2.2rem', md: '3rem' },
                lineHeight: 1.2,
              }}
            >
              Ready to Start Receiving Exclusive HVAC Leads?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.15rem' },
                mb: 6,
                opacity: 0.95,
                lineHeight: 1.6,
              }}
            >
              Choose your services, select your service areas, and start receiving verified, exclusive leads today.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowRight />}
              sx={{
                backgroundColor: '#ff6b35',
                color: 'white',
                fontWeight: 700,
                px: 5,
                py: 1.8,
                fontSize: '1rem',
                borderRadius: 2,
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#ff5522',
                  transform: 'translateX(4px)',
                  boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)',
                },
              }}
            >
              Get Started Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Services
