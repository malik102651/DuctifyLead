import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material'
import { ArrowRight, CheckCircle, VerifiedUser,    TrendingUp } from '@mui/icons-material'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import MapPin from '@mui/icons-material/LocationOn'
import Snowflake from '@mui/icons-material/AcUnit'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import Wind from '@mui/icons-material/Air'
import Wrench from '@mui/icons-material/Build'

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          py: { xs: 10, md: 16 },
          background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
          color: 'white',
          textAlign: 'center',
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
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2,
            }}
          >
            Dedicated Lead Generation Platform for HVAC Service Providers
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              mb: 5,
              opacity: 0.95,
              maxWidth: '700px',
              mx: 'auto',
              fontWeight: 500,
            }}
          >
            Ductify Leads is a specialized HVAC lead generation company that connects service providers with homeowners and commercial clients actively requesting HVAC-related services in their local ZIP codes.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowRight />}
            sx={{
              backgroundColor: '#ff6b35',
              px: 5,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: 3,
              '&:hover': {
                backgroundColor: '#ff5522',
              },
            }}
          >
            Get Started with Ductify Leads
          </Button>
        </Container>
      </Box>

      {/* KEY HIGHLIGHTS SECTION */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {[
              { icon: CheckCircle, title: '100% Exclusive HVAC Leads', color: '#0066cc' },
              { icon: VerifiedUser, title: 'Human-Verified Customers', color: '#00cc88' },
              { icon: MapPin, title: 'ZIP Code–Based Lead Delivery', color: '#ff6b35' },
              { icon: Wrench, title: 'Residential & Commercial Requests', color: '#6b5bff' },
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Box sx={{ textAlign: 'center', px: 2 }}>
                  <item.icon
                    sx={{
                      fontSize: '3rem',
                      color: item.color,
                      mb: 2,
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: '#1a2332',
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SECTION 1 - What Is Ductify Leads */}
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
                What Is Ductify Leads?
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.05rem',
                  color: '#5a6b7d',
                  mb: 4,
                  lineHeight: 1.8,
                  fontWeight: 600,
                }}
              >
                Ductify Leads is a specialized HVAC lead generation company.
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#5a6b7d',
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                We do not provide HVAC services ourselves. Instead, we focus on generating and delivering high-intent customer leads to HVAC-related businesses such as duct cleaning companies, heating and cooling contractors, and indoor air quality service providers.
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
                Our job is simple:
              </Typography>
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
                    fontSize: '1.05rem',
                    color: '#1a2332',
                    fontWeight: 700,
                  }}
                >
                  Find customers actively searching for HVAC services and connect them with the right local business.
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
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '3rem',
                      fontWeight: 800,
                      mb: 2,
                    }}
                  >
                    100%
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                    }}
                  >
                    Exclusive Leads
                  </Typography>
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography sx={{ fontWeight: 700, mb: 1, color: '#1a2332' }}>✓ Never Shared</Typography>
                    <Typography sx={{ fontSize: '0.95rem', color: '#5a6b7d' }}>Each lead delivered to your business only</Typography>
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <Typography sx={{ fontWeight: 700, mb: 1, color: '#1a2332' }}>✓ Verified Quality</Typography>
                    <Typography sx={{ fontSize: '0.95rem', color: '#5a6b7d' }}>Human-reviewed before delivery</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, mb: 1, color: '#1a2332' }}>✓ Real-Time Results</Typography>
                    <Typography sx={{ fontSize: '0.95rem', color: '#5a6b7d' }}>Instant access to active customers</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 2 - How Ductify Leads Works */}
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
              How Ductify Leads Works
            </Typography>
            <Typography
              sx={{
                fontSize: '1.1rem',
                color: '#5a6b7d',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Five simple steps to start receiving exclusive HVAC leads
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                step: 1,
                title: 'Choose Your Services & ZIP Codes',
                desc: 'Tell us what HVAC services you provide and which ZIP codes you want leads from.',
              },
              {
                step: 2,
                title: 'We Find Active Customers',
                desc: 'Our marketing systems and lead qualification team identify homeowners and businesses actively requesting HVAC services.',
              },
              {
                step: 3,
                title: 'Lead Verification',
                desc: 'Every lead is reviewed and verified to ensure it matches your selected services and location.',
              },
              {
                step: 4,
                title: 'Exclusive Lead Delivery',
                desc: 'The verified lead is delivered only to your business — never shared.',
              },
              {
                step: 5,
                title: 'You Contact & Close',
                desc: 'You contact the customer, schedule the job, and get paid.',
              },
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} lg={4} key={idx}>
                <Box sx={{ position: 'relative', height: '100%' }}>
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
                      },
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 8,
                        left: 20,
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 800,
                        fontSize: '1.5rem',
                        boxShadow: '0 4px 15px rgba(0,102,204,0.3)',
                      }}
                    >
                      {item.step}
                    </Box>
                    <CardContent sx={{ p: 3, pt: 8 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: '#1a2332',
                          fontSize: '1.1rem',
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: '#5a6b7d', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SECTION 3 - Types of Leads We Provide */}
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
              Types of Leads We Provide
            </Typography>
            <Typography
              sx={{
                fontSize: '1.1rem',
                color: '#5a6b7d',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              We generate leads based on the specific services your business offers
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              { icon: Wind, title: 'Air Duct Cleaning Leads', color: '#0066cc' },
              { icon: Wrench, title: 'HVAC Repair & Maintenance Leads', color: '#ff6b35' },
              { icon: LocalFireDepartmentIcon, title: 'Heating Service Leads', color: '#ff4444' },
              { icon: Snowflake, title: 'Air Conditioning Installation & Repair', color: '#00aaff' },
              { icon: TrendingUp, title: 'Ventilation & Blower Service Leads', color: '#6b5bff' },
              { icon: WaterDropIcon, title: 'Indoor Air Quality Service Leads', color: '#00cc88' },
              { icon: Wrench, title: 'Residential & Commercial HVAC Leads', color: '#ffaa00' },
            ].map((item, idx) => (
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
                    <item.icon
                      sx={{
                        fontSize: '2.5rem',
                        color: item.color,
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1a2332',
                        fontSize: '1rem',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              mt: 8,
              p: 4,
              backgroundColor: '#f0f4ff',
              borderRadius: 3,
              textAlign: 'center',
              border: '2px solid #d0dce7',
            }}
          >
            <Typography sx={{ color: '#1a2332', fontSize: '1rem', fontWeight: 600 }}>
              If your company only offers one service (e.g., air duct cleaning), you will receive leads only for that service.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* SECTION 4 - Who We Help */}
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
              Who We Help
            </Typography>
            <Typography
              sx={{
                fontSize: '1.1rem',
                color: '#5a6b7d',
                maxWidth: '700px',
                mx: 'auto',
                mb: 1,
              }}
            >
              We work with:
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ mb: 6 }}>
            {[
              'Air Duct Cleaning Companies',
              'HVAC Repair & Maintenance Businesses',
              'Heating & Cooling Contractors',
              'Indoor Air Quality Service Providers',
              'Residential HVAC Companies',
              'Commercial HVAC Companies',
            ].map((business, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    height: '100%',
                    backgroundColor: 'white',
                    border: '2px solid #d0dce7',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                    textAlign: 'center',
                    minHeight: '120px',
                    '&:hover': {
                      borderColor: '#0066cc',
                      boxShadow: '0 8px 25px rgba(0,102,204,0.15)',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: '#1a2332',
                        fontSize: '1rem',
                      }}
                    >
                      {business}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Card
            sx={{
              borderRadius: 3,
              boxShadow: '0 8px 30px rgba(0,102,204,0.15)',
              backgroundColor: 'white',
              border: '1px solid #e0e7ff',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
                p: { xs: 3, md: 5 },
                color: 'white',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                }}
              >
                Built for HVAC Success
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  lineHeight: 2,
                  opacity: 0.95,
                }}
              >
                Ductify Leads is built to help HVAC businesses grow with confidence and consistency. By combining service-specific targeting, ZIP code exclusivity, and human-verified leads, we remove the uncertainty from lead generation. Whether you specialize in air duct cleaning, heating and cooling, or full HVAC services, our system connects you with customers who are ready to take action — so you can focus on closing jobs and expanding your business.
              </Typography>
            </Box>
          </Card>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
          color: 'white',
          textAlign: 'center',
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
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 4,
              fontSize: { xs: '2.2rem', md: '3rem' },
              lineHeight: 1.2,
            }}
          >
            Secure Your ZIP Codes Today
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, mb: 6, opacity: 0.95, fontWeight: 500 }}>
            Start receiving exclusive HVAC leads designed to support long-term growth. Join HVAC service providers who are already closing more jobs with Ductify Leads.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowRight />}
            sx={{
              backgroundColor: '#ff6b35',
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: 3,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#ff5522',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 30px rgba(255,107,53,0.3)',
              },
            }}
          >
            Get Started with Ductify Leads
          </Button>
        </Container>
      </Box>
    </>
  )
}

export default Home

