import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Chip,
} from '@mui/material'
import {
  VerifiedUser,
  LocalShipping,
  School,
  Nature,
  Star,
  Groups,
  CheckCircle,
  TrendingUp,
} from '@mui/icons-material'

function AboutUs() {
  const features = [
    {
      icon: <VerifiedUser />,
      title: '20+ Years Experience',
      description:
        'With over two decades in the cleaning industry, our reputation has only grown stronger through exceptional service.',
      color: '#1a73e8',
    },
    {
      icon: <Groups />,
      title: 'Tens of Thousands of Happy Customers',
      description:
        'We value each and every client, never giving up on tough stains and training only the best cleaning specialists.',
      color: '#34a853',
    },
    {
      icon: <TrendingUp />,
      title: 'Expert Cleaning & Competitive Pricing',
      description:
        'Get the best of both worlds: highly trained technicians delivering exceptional results at fair, reasonable prices.',
      color: '#ea4335',
    },
    {
      icon: <LocalShipping />,
      title: 'Advanced Truck-Mounted Equipment',
      description:
        'Our advanced systems achieve shorter cleaning times, more affordable prices, and deeper, more thorough results.',
      color: '#fbbc04',
    },
    {
      icon: <School />,
      title: 'Certified Cleaning Technicians',
      description:
        'All technicians complete a two-month intensive training program with full background checks for honesty and reliability.',
      color: '#9c27b0',
    },
    {
      icon: <Nature />,
      title: 'Exclusive Green Products',
      description:
        'We use only exclusive green cleaning products designed together with US manufacturers for a healthier, safer clean.',
      color: '#00bcd4',
    },
  ]

  const stats = [
    { number: '20+', label: 'Years Experience', icon: <VerifiedUser /> },
    { number: '10K+', label: 'Happy Customers', icon: <Groups /> },
    { number: '100%', label: 'Satisfaction Rate', icon: <Star /> },
    { number: '2', label: 'Month Training Program', icon: <School /> },
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
              label="About USA Clean Master"
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
              Customer Satisfaction Is The Foundation Of Any Successful Business
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.7,
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              With over 20 years of experience in the cleaning industry, our reputation has only
              grown stronger. We owe it all to you, our clients.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    borderRadius: 4,
                    backgroundColor: 'background.default',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 30px rgba(26, 115, 232, 0.2)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      fontSize: 40,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Our Story
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
              Over the years, we have served tens of thousands of happy, satisfied customers. How do
              we do it? Simple—we value each and every client, we never give up on a tough stain,
              and we train only the best cleaning specialists.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              Our ongoing commitment to training means our team stays current with the latest
              cleaning techniques and safety standards. This ensures you receive consistent,
              high-quality results every time.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                backgroundColor: 'primary.main',
                color: 'white',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'white',
                }}
              >
                Everything You Need For Good & Clean Results
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  'Certified, Licensed & Insured',
                  'Background Checked Technicians',
                  'Two-Month Intensive Training',
                  'Latest Cleaning Techniques',
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle sx={{ fontSize: 28 }} />
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Features Grid */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            What Sets Us Apart
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
            Discover the key features that make USA Clean Master your trusted cleaning partner
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
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
                      borderColor: feature.color,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 3,
                        backgroundColor: `${feature.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <Box sx={{ color: feature.color, fontSize: 32 }}>{feature.icon}</Box>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Additional Info Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            mb: 8,
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
                All Your Home Services From One Trusted Provider
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
                With USA Clean Master, you don't have to juggle multiple contractors. Our
                experienced team delivers a full range of residential and commercial services under
                one roof, from deep carpet and upholstery care to indoor air quality improvements
                and beyond.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                We also provide restoration services, including handling moisture-related issues and
                removing harmful mold growth that can develop after leaks or flooding.
              </Typography>
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
                  See What Others Say & Learn From the Experts
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    lineHeight: 1.8,
                  }}
                >
                  Our clients' reviews are the simplest proof of our experts' professionalism and
                  experience. You can also gain a lot of useful information by reading our blog
                  where our certified experts regularly share knowledge.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                  }}
                >
                  For more in-depth guides, methods, and FAQs, our Knowledge Base is always
                  available to home and business owners alike.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'white',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
            }}
          >
            Ready to Experience the Difference?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Join tens of thousands of satisfied customers who trust USA Clean Master for all their
            cleaning needs.
          </Typography>
          <Chip
            label="Call Now: 888-396-5195"
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              fontSize: '1.1rem',
              fontWeight: 600,
              px: 3,
              py: 3,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default AboutUs

