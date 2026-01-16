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
  Button,
} from '@mui/material'
import {
  Bolt,
  VerifiedUser,
  HandshakeOutlined,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Lightbulb,
} from '@mui/icons-material'
import Eye from '@mui/icons-material/Visibility'
import MapPin from '@mui/icons-material/LocationOn'
import Target from '@mui/icons-material/Adjust'


function About() {
  const whatSetsUsApart = [
    {
      icon: <Lightbulb />,
      title: 'Lead Generation Only',
      description: 'We do not provide HVAC services. Our sole focus is generating and delivering leads.',
      color: '#0066cc',
    },
    {
      icon: <Target />,
      title: 'Service-Specific Targeting',
      description: 'Clients receive leads only for the services they offer.',
      color: '#ff6b35',
    },
    {
      icon: <MapPin />,
      title: 'ZIP Code Exclusivity',
      description: 'One business per ZIP code to avoid competition.',
      color: '#00cc88',
    },
    {
      icon: <VerifiedUser />,
      title: 'Human Verification',
      description: 'Every lead is reviewed by our team.',
      color: '#6b5bff',
    },
    {
      icon: <HandshakeOutlined />,
      title: 'Real Support',
      description: 'Ongoing communication and campaign optimization.',
      color: '#ff4444',
    },
  ]

  const stats = [
    { number: '2+', label: 'Years in Lead Generation', icon: <Star /> },
    { number: '1000+', label: 'Verified Leads Generated', icon: <CheckCircle /> },
    { number: '100%', label: 'Human Verified', icon: <VerifiedUser /> },
    { number: '6/6', label: 'Services Supported', icon: <Bolt /> },
  ]

  const keyPrinciples = [
    'Relevance',
    'Exclusivity',
    'Verification',
    'Long-term Partnerships',
  ]
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#ffffff', pt: 10 }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
          py: { xs: 10, md: 16 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
            <Chip
              label="About Ductify Leads"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                mb: 3,
                fontSize: '0.95rem',
                fontWeight: 700,
                px: 2,
                py: 2.5,
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                color: 'white',
                mb: 4,
                lineHeight: 1.2,
              }}
            >
              Solving Real Problems for HVAC Businesses
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                maxWidth: '800px',
                mx: 'auto',
                fontWeight: 500,
              }}
            >
              Ductify Leads was created to help HVAC businesses grow consistently with exclusive, verified, and service-specific leads from customers actively searching for their services.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* STATS SECTION */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f5f7fa' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    borderRadius: 3,
                    backgroundColor: 'white',
                    border: '2px solid #e0e7ff',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      borderColor: '#0066cc',
                      boxShadow: '0 8px 25px rgba(0,102,204,0.12)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: '#0066cc',
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: '#0066cc',
                      mb: 1,
                      fontSize: '2.2rem',
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography sx={{ color: '#5a6b7d', fontWeight: 600, fontSize: '0.95rem' }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* OUR STORY SECTION */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 4,
                  color: '#1a2332',
                  fontSize: { xs: '2.2rem', md: '2.8rem' },
                  lineHeight: 1.3,
                }}
              >
                Our Story
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#5a6b7d',
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                Ductify Leads was created after years of working closely with HVAC-related businesses and seeing the same challenges repeated across the industry.
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#5a6b7d',
                  mb: 4,
                  lineHeight: 1.8,
                  fontWeight: 600,
                }}
              >
                Many companies were spending heavily on ads, relying on shared lead platforms, or waiting on referrals, yet still facing:
              </Typography>
              <Box sx={{ mb: 4 }}>
                {[
                  'Inconsistent lead flow',
                  'Poor-quality or unqualified inquiries',
                  'Leads shared with multiple competitors',
                  'High marketing costs with unpredictable results',
                ].map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#0066cc',
                        borderRadius: '50%',
                      }}
                    />
                    <Typography sx={{ color: '#5a6b7d', fontSize: '0.95rem' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  backgroundColor: '#f0f4ff',
                  borderLeft: '4px solid #0066cc',
                  p: 3,
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    color: '#1a2332',
                    fontWeight: 700,
                    lineHeight: 1.6,
                  }}
                >
                  We realized that HVAC businesses didn't need more advertising — they needed better, more reliable leads.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 10px 40px rgba(0,102,204,0.1)',
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  border: '1px solid #e0e7ff',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
                    p: 4,
                    color: 'white',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      mb: 3,
                    }}
                  >
                    The Ductify Leads Solution
                  </Typography>
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    sx={{
                      fontSize: '0.95rem',
                      color: '#5a6b7d',
                      mb: 3,
                      lineHeight: 1.7,
                      fontWeight: 600,
                    }}
                  >
                    That insight led to the creation of Ductify Leads: a company focused entirely on generating and delivering exclusive, service-specific HVAC leads to local businesses.
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {[
                      'Exclusive leads, never shared',
                      'Service-specific targeting',
                      'ZIP code exclusivity',
                      'Human-verified inquiries',
                    ].map((item, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <CheckCircle sx={{ color: '#0066cc', flexShrink: 0, mt: 0.3 }} />
                        <Typography sx={{ color: '#1a2332', fontWeight: 500, fontSize: '0.95rem' }}>
                          {item}
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

      {/* WHY WE STARTED SECTION */}
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
              Why We Started Ductify Leads
            </Typography>
            <Typography
              sx={{
                fontSize: '1.1rem',
                color: '#5a6b7d',
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              The HVAC industry is essential, but the lead generation options available to contractors often fall short.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {keyPrinciples.map((principle, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    height: '100%',
                    backgroundColor: 'white',
                    border: '1px solid #e0e7ff',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 30px rgba(0,102,204,0.15)',
                      transform: 'translateY(-5px)',
                      borderColor: '#0066cc',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          color: 'white',
                          fontWeight: 800,
                          fontSize: '1.8rem',
                        }}
                      >
                        {idx + 1}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1a2332',
                        fontSize: '1.1rem',
                      }}
                    >
                      {principle}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, p: 4, backgroundColor: 'white', borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <Typography sx={{ color: '#5a6b7d', fontSize: '1rem', lineHeight: 1.8 }}>
              We saw an opportunity to do things differently. Instead of selling ads or shared leads, we built a lead generation system focused on these core principles. Ductify Leads was designed to help HVAC businesses spend less time chasing leads and more time serving customers and growing revenue.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* EXPERIENCE SECTION */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 10px 40px rgba(0,102,204,0.1)',
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  border: '1px solid #e0e7ff',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff4444 100%)',
                    p: 4,
                    color: 'white',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      mb: 3,
                    }}
                  >
                    Experience You Can Trust
                  </Typography>
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    sx={{
                      fontSize: '0.95rem',
                      color: '#5a6b7d',
                      mb: 4,
                      lineHeight: 1.7,
                    }}
                  >
                    Ductify Leads has been operating in the lead generation space for over two years, working across multiple service-based industries.
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {[
                      'Generated thousands of verified service inquiries',
                      'Refined targeting based on real performance data',
                      'Built processes that prioritize quality over quantity',
                    ].map((item, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <CheckCircle sx={{ color: '#ff6b35', flexShrink: 0, mt: 0.3 }} />
                        <Typography sx={{ color: '#1a2332', fontWeight: 500, fontSize: '0.95rem' }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: '#fff4f0',
                      borderLeft: '4px solid #ff6b35',
                      p: 3,
                      borderRadius: 2,
                      mt: 4,
                    }}
                  >
                    <Typography sx={{ color: '#1a2332', fontSize: '0.95rem', fontWeight: 600 }}>
                      Our experience allows us to understand what makes a lead valuable and what does not.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 6,
                  color: '#1a2332',
                  fontSize: { xs: '2.2rem', md: '2.5rem' },
                  lineHeight: 1.3,
                }}
              >
                Our Mission & Vision
              </Typography>

              <Box sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                  <Lightbulb
                    sx={{
                      fontSize: '2rem',
                      color: '#0066cc',
                      flexShrink: 0,
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a2332' }}>
                    Our Mission
                  </Typography>
                </Box>
                <Typography sx={{ color: '#5a6b7d', fontSize: '0.95rem', lineHeight: 1.7, ml: 7 }}>
                  To help HVAC-related businesses grow consistently by providing exclusive, verified, and service-specific leads, while maintaining transparency, reliability, and long-term value. We aim to become a trusted growth partner, not just a lead provider.
                </Typography>
              </Box>

              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                  <Eye
                    sx={{
                      fontSize: '2rem',
                      color: '#ff6b35',
                      flexShrink: 0,
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a2332' }}>
                    Our Vision
                  </Typography>
                </Box>
                <Typography sx={{ color: '#5a6b7d', fontSize: '0.95rem', lineHeight: 1.7, ml: 7 }}>
                  To build one of the most reliable HVAC lead generation platforms by expanding ZIP code coverage responsibly, improving lead quality through data and feedback, and creating sustainable partnerships with HVAC businesses. We believe long-term success comes from mutual growth.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* WHAT SETS US APART SECTION */}
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
              What Sets Us Apart
            </Typography>
            <Typography
              sx={{
                fontSize: '1.1rem',
                color: '#5a6b7d',
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              Ductify Leads is built on principles that many lead platforms overlook
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {whatSetsUsApart.map((item, idx) => (
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
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      height: '80px',
                      background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box sx={{ color: item.color, fontSize: '2.5rem' }}>
                      {item.icon}
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
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: '#5a6b7d', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* LONG-TERM PARTNERSHIPS SECTION */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
                <HandshakeOutlined sx={{ fontSize: '2.5rem', color: '#0066cc' }} />
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    color: '#1a2332',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    m: 0,
                  }}
                >
                  Built for Long-Term Partnerships
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#5a6b7d',
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                We understand that lead generation is not a one-size-fits-all solution. Markets change, demand shifts, and businesses evolve.
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#5a6b7d',
                  mb: 4,
                  lineHeight: 1.8,
                  fontWeight: 600,
                }}
              >
                That's why we work closely with our clients to:
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 6 }}>
                {[
                  'Improve targeting',
                  'Adjust lead flow',
                  'Maintain performance standards',
                ].map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
              <Box
                sx={{
                  backgroundColor: '#f0f4ff',
                  borderLeft: '4px solid #0066cc',
                  p: 3,
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ color: '#1a2332', fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.6 }}>
                  Our goal is not short-term transactions, but long-term partnerships built on results.
                </Typography>
              </Box>
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
                  <Lightbulb sx={{ fontSize: '3rem', mb: 2 }} />
                  <Typography
                    sx={{
                      fontSize: '1.3rem',
                      fontWeight: 800,
                    }}
                  >
                    Performance-Driven Growth
                  </Typography>
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Typography sx={{ color: '#5a6b7d', fontSize: '0.95rem', lineHeight: 1.7, mb: 3 }}>
                    We continuously optimize our targeting systems and lead qualification processes to ensure you receive the most relevant, high-intent leads for your HVAC business.
                  </Typography>
                  <Typography sx={{ color: '#5a6b7d', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Your success is our success. We're invested in helping you grow revenue and scale your operations sustainably.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
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
              Ready to Grow with Ductify Leads?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.15rem' },
                mb: 6,
                opacity: 0.95,
                lineHeight: 1.6,
              }}
            >
              Join hundreds of HVAC service providers who trust Ductify Leads for exclusive, verified leads.
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
              Get Started with Ductify Leads
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default About
