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
  TextField,
  InputAdornment,
} from '@mui/material'
import {
  Search,
  Article,
  VideoLibrary,
  MenuBook,
  Help,
  Description,
  Download,
  TrendingUp,
  Business,
  School,
} from '@mui/icons-material'

function Resources() {
  const resourceCategories = [
    {
      icon: <Article />,
      title: 'Articles & Guides',
      count: '250+',
      description: 'In-depth articles and guides covering all aspects of the cleaning industry',
      color: '#1a73e8',
    },
    {
      icon: <VideoLibrary />,
      title: 'Video Tutorials',
      count: '150+',
      description: 'Step-by-step video tutorials for various cleaning techniques and methods',
      color: '#34a853',
    },
    {
      icon: <MenuBook />,
      title: 'Knowledge Base',
      count: '500+',
      description: 'Comprehensive knowledge base with answers to common questions and issues',
      color: '#ea4335',
    },
    {
      icon: <Description />,
      title: 'Downloadable Resources',
      count: '100+',
      description: 'Templates, checklists, and downloadable resources for your business',
      color: '#fbbc04',
    },
    {
      icon: <Help />,
      title: 'FAQ Section',
      count: '200+',
      description: 'Frequently asked questions with detailed answers from industry experts',
      color: '#9c27b0',
    },
    {
      icon: <TrendingUp />,
      title: 'Industry Reports',
      count: '50+',
      description: 'Latest industry trends, market research, and statistical reports',
      color: '#00bcd4',
    },
  ]

  const featuredResources = [
    {
      title: 'Complete Guide to Air Duct Cleaning',
      category: 'HVAC Cleaning',
      type: 'Article',
      views: '12.5K',
      date: '2024',
      description:
        'A comprehensive guide covering everything you need to know about professional air duct cleaning.',
    },
    {
      title: 'Green Cleaning Best Practices',
      category: 'Sustainability',
      type: 'Video',
      views: '8.3K',
      date: '2024',
      description:
        'Learn how to implement eco-friendly cleaning practices in your business operations.',
    },
    {
      title: 'Business Management Templates',
      category: 'Business',
      type: 'Download',
      views: '15.2K',
      date: '2024',
      description:
        'Professional templates for invoicing, scheduling, and customer management.',
    },
    {
      title: 'Mold Remediation Safety Protocol',
      category: 'Restoration',
      type: 'Guide',
      views: '6.7K',
      date: '2024',
      description:
        'Essential safety protocols and procedures for mold remediation projects.',
    },
  ]

  const popularTopics = [
    'Carpet Cleaning Techniques',
    'HVAC System Maintenance',
    'Green Cleaning Products',
    'Business Growth Strategies',
    'Customer Service Excellence',
    'Equipment Maintenance',
    'Safety & Compliance',
    'Marketing for Cleaners',
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
              label="Knowledge Hub"
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
              Resources & Knowledge Base
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
              Access thousands of articles, guides, videos, and resources to help you succeed in the
              cleaning industry
            </Typography>
            <TextField
              fullWidth
              placeholder="Search resources..."
              variant="outlined"
              sx={{
                maxWidth: '600px',
                mx: 'auto',
                backgroundColor: 'white',
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, py: { xs: 8, md: 12 } }}>
        {/* Resource Categories */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 6,
              textAlign: 'center',
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Browse by Category
          </Typography>

          <Grid container spacing={4}>
            {resourceCategories.map((category, index) => (
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
                      borderColor: category.color,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 3,
                        backgroundColor: `${category.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <Box sx={{ color: category.color, fontSize: 32 }}>{category.icon}</Box>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: 'text.primary',
                      }}
                    >
                      {category.title}
                    </Typography>
                    <Chip
                      label={category.count}
                      size="small"
                      sx={{
                        backgroundColor: `${category.color}15`,
                        color: category.color,
                        fontWeight: 600,
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {category.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Featured Resources */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 6,
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Featured Resources
          </Typography>

          <Grid container spacing={4}>
            {featuredResources.map((resource, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                    <Chip
                      label={resource.category}
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      label={resource.type}
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
                    {resource.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      mb: 3,
                    }}
                  >
                    {resource.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {resource.views} views • {resource.date}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<Download />}
                    >
                      View
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Popular Topics & Quick Links */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'text.primary',
                }}
              >
                Popular Topics
              </Typography>
              <Grid container spacing={2}>
                {popularTopics.map((topic, index) => (
                  <Grid item xs={6} key={index}>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{
                        justifyContent: 'flex-start',
                        textTransform: 'none',
                        borderRadius: 2,
                        py: 1.5,
                      }}
                    >
                      {topic}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'text.primary',
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  { icon: <Business />, label: 'Business Resources', path: '#' },
                  { icon: <School />, label: 'Training Programs', path: '#' },
                  { icon: <Description />, label: 'Download Templates', path: '#' },
                  { icon: <Help />, label: 'Get Support', path: '#' },
                ].map((link, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    startIcon={link.icon}
                    sx={{
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      py: 1.5,
                      borderRadius: 2,
                      backgroundColor: 'white',
                      color: 'text.primary',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Resources

