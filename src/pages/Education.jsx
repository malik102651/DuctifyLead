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
  Tabs,
  Tab,
} from '@mui/material'
import {
  School,
  VerifiedUser,
  LocalHospital,
  Home,
  Business,
  TrendingUp,
  CheckCircle,
  Schedule,
  Star,
} from '@mui/icons-material'

function Education() {
  const [selectedTab, setSelectedTab] = React.useState(0)

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  const certifications = [
    {
      icon: <Home />,
      title: 'Residential Cleaning Certification',
      description:
        'Comprehensive training for residential cleaning professionals covering all aspects of home cleaning.',
      duration: '40 hours',
      level: 'Beginner',
      color: '#1a73e8',
    },
    {
      icon: <Business />,
      title: 'Commercial Cleaning Specialist',
      description:
        'Advanced certification for commercial cleaning operations and facility management.',
      duration: '60 hours',
      level: 'Intermediate',
      color: '#34a853',
    },
    {
      icon: <LocalHospital />,
      title: 'Healthcare Facility Cleaning',
      description:
        'Specialized training for cleaning in healthcare environments with focus on infection control.',
      duration: '80 hours',
      level: 'Advanced',
      color: '#ea4335',
    },
    {
      icon: <VerifiedUser />,
      title: 'Certified Cleaning Manager',
      description:
        'Leadership and management certification for cleaning business owners and supervisors.',
      duration: '100 hours',
      level: 'Expert',
      color: '#fbbc04',
    },
  ]

  const courses = [
    {
      title: 'Carpet Cleaning Mastery',
      category: 'Specialty Cleaning',
      duration: '8 hours',
      rating: 4.9,
      students: 1250,
      price: '$199',
    },
    {
      title: 'Air Duct Cleaning Techniques',
      category: 'HVAC Cleaning',
      duration: '12 hours',
      rating: 4.8,
      students: 980,
      price: '$249',
    },
    {
      title: 'Mold Remediation Basics',
      category: 'Restoration',
      duration: '16 hours',
      rating: 4.9,
      students: 750,
      price: '$299',
    },
    {
      title: 'Green Cleaning Practices',
      category: 'Sustainability',
      duration: '6 hours',
      rating: 4.7,
      students: 2100,
      price: '$149',
    },
    {
      title: 'Business Management for Cleaners',
      category: 'Business',
      duration: '20 hours',
      rating: 4.9,
      students: 650,
      price: '$349',
    },
    {
      title: 'Advanced Stain Removal',
      category: 'Specialty Cleaning',
      duration: '10 hours',
      rating: 4.8,
      students: 1100,
      price: '$179',
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
              label="Professional Development"
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
              Education & Certification
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
              Boost your career with professional certifications and training programs designed for
              cleaning industry professionals
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, py: { xs: 8, md: 12 } }}>
        {/* Certifications Section */}
        <Box sx={{ mb: 12 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: 'text.primary',
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Become a Certified Professional
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
              Professional certifications tailored for varied career levels
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {certifications.map((cert, index) => (
              <Grid item xs={12} md={6} key={index}>
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
                      borderColor: cert.color,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 3,
                        backgroundColor: `${cert.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <Box sx={{ color: cert.color, fontSize: 32 }}>{cert.icon}</Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      <Chip
                        label={cert.level}
                        size="small"
                        sx={{
                          backgroundColor: `${cert.color}15`,
                          color: cert.color,
                          fontWeight: 600,
                        }}
                      />
                      <Chip
                        icon={<Schedule />}
                        label={cert.duration}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary',
                      }}
                    >
                      {cert.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        mb: 3,
                      }}
                    >
                      {cert.description}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: cert.color,
                        '&:hover': {
                          backgroundColor: cert.color,
                          opacity: 0.9,
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Courses Section */}
        <Box>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: 'text.primary',
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Specialty Courses & Programs
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
              Explore our comprehensive library of training courses
            </Typography>
          </Box>

          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
            <Tabs value={selectedTab} onChange={handleTabChange}>
              <Tab label="All Courses" />
              <Tab label="Specialty Cleaning" />
              <Tab label="Business" />
              <Tab label="Sustainability" />
            </Tabs>
          </Box>

          <Grid container spacing={4}>
            {courses.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Chip
                      label={course.category}
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        mb: 2,
                        fontWeight: 600,
                      }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary',
                      }}
                    >
                      {course.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Star sx={{ color: '#fbbc04', fontSize: 20 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {course.rating} ({course.students} students)
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <Schedule sx={{ fontSize: 16, verticalAlign: 'middle', mr: 0.5 }} />
                        {course.duration}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {course.price}
                      </Typography>
                    </Box>
                    <Button variant="outlined" fullWidth>
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Learning Resources */}
        <Box
          sx={{
            mt: 12,
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
                Learning Tools & Resources
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
                Access a comprehensive library of learning materials, guides, and resources to
                support your professional development journey.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  'Online Learning Center',
                  'Video Training Library',
                  'Interactive AR Training',
                  'Industry Best Practices Guides',
                  'Certification Exam Prep Materials',
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle sx={{ color: 'primary.main', fontSize: 24 }} />
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
                  Why Choose Our Training?
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      10,000+
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      Professionals Trained
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      98%
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      Certification Pass Rate
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      24/7
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      Online Access to Courses
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

export default Education

