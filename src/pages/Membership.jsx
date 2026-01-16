import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import {
  CheckCircle,
  Business,
  School,
  Event,
  Discount,
  SupportAgent,
  Star,
  Groups,
  TrendingUp,
} from '@mui/icons-material'

function Membership() {
  const benefits = [
    {
      icon: <Business />,
      title: 'Business Resources',
      description:
        'Access exclusive business tools, templates, and resources to help grow and manage your cleaning business effectively.',
      color: '#1a73e8',
    },
    {
      icon: <School />,
      title: 'Education & Training',
      description:
        'Get access to professional training programs, certifications, and continuing education opportunities.',
      color: '#34a853',
    },
    {
      icon: <Event />,
      title: 'Industry Events',
      description:
        'Attend exclusive member-only events, workshops, and networking opportunities with industry leaders.',
      color: '#ea4335',
    },
    {
      icon: <Discount />,
      title: 'Member Discounts',
      description:
        'Enjoy exclusive discounts on equipment, supplies, insurance, and other business essentials.',
      color: '#fbbc04',
    },
    {
      icon: <SupportAgent />,
      title: '24/7 Support',
      description:
        'Get priority customer support and access to our expert team for business advice and troubleshooting.',
      color: '#9c27b0',
    },
    {
      icon: <TrendingUp />,
      title: 'Industry Research',
      description:
        'Access the latest industry reports, market trends, and research data to stay ahead of the competition.',
      color: '#00bcd4',
    },
  ]

  const membershipTypes = [
    {
      title: 'Basic Membership',
      price: '$99',
      period: '/year',
      features: [
        'Access to member resources',
        'Monthly newsletter',
        'Basic training materials',
        'Member directory access',
        '10% discount on supplies',
      ],
      popular: false,
    },
    {
      title: 'Professional Membership',
      price: '$249',
      period: '/year',
      features: [
        'Everything in Basic',
        'Advanced training programs',
        'Certification courses',
        'Priority support',
        '20% discount on supplies',
        'Event invitations',
        'Industry reports access',
      ],
      popular: true,
    },
    {
      title: 'Enterprise Membership',
      price: '$499',
      period: '/year',
      features: [
        'Everything in Professional',
        'Unlimited training access',
        'Dedicated account manager',
        'Custom training programs',
        '30% discount on supplies',
        'VIP event access',
        'Business consulting',
        'Marketing support',
      ],
      popular: false,
    },
  ]

  return (
    <Box sx={{ pt: 10, pb: 8, minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Chip
              label="Join USA Clean Master"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                mb: 3,
                fontSize: '0.9rem',
                fontWeight: 600,
                px: 2,
                py: 2.5,
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                color: 'white',
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Membership Opens Doors to Opportunities
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.7,
                maxWidth: '700px',
                mx: 'auto',
                mb: 4,
              }}
            >
              Become a USA Clean Master member today and join thousands of companies and
              professionals committed to excellence in the cleaning industry.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 3,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Join Today
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Membership Benefits
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Improve your operations, boost your profits, and make valuable connections
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 12 }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  border: '1px solid transparent',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    borderColor: benefit.color,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      backgroundColor: `${benefit.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <Box sx={{ color: benefit.color, fontSize: 32 }}>{benefit.icon}</Box>
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: 'text.primary',
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Membership Plans */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Choose Your Membership Plan
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
              mb: 6,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Select the plan that best fits your business needs
          </Typography>

          <Grid container spacing={4}>
            {membershipTypes.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    height: '100%',
                    border: plan.popular ? '3px solid' : '2px solid',
                    borderColor: plan.popular ? 'primary.main' : 'divider',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  {plan.popular && (
                    <Chip
                      label="Most Popular"
                      sx={{
                        position: 'absolute',
                        top: -12,
                        right: 20,
                        backgroundColor: 'primary.main',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  )}
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: 'text.primary',
                    }}
                  >
                    {plan.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 4 }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                      }}
                    >
                      {plan.price}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', ml: 1 }}>
                      {plan.period}
                    </Typography>
                  </Box>
                  <List>
                    {plan.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircle sx={{ color: 'primary.main', fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            sx: { fontSize: '0.95rem', color: 'text.primary' },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant={plan.popular ? 'contained' : 'outlined'}
                    fullWidth
                    sx={{
                      mt: 4,
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    Get Started
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Additional Benefits */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            borderRadius: 4,
            p: { xs: 4, md: 6 },
          }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'text.primary',
                }}
              >
                Lifetime Benefits
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                As a USA Clean Master member, you'll enjoy lifetime benefits that continue to grow
                with your business. Our community of professionals is committed to helping each other
                succeed.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  'Access to exclusive member-only content',
                  'Priority booking for training sessions',
                  'Networking opportunities at events',
                  'Industry recognition and awards',
                  'Continuous professional development',
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Star sx={{ color: 'primary.main', fontSize: 24 }} />
                    <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: 'white',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: 'text.primary',
                  }}
                >
                  Join Thousands of Members
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      5,000+
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      Active Members
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      95%
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      Member Satisfaction Rate
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      50+
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      Training Programs Available
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Membership

