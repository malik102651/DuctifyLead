import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
} from '@mui/material'
import {
  HealthAndSafety,
  Speed,
  Bolt,
  Air,
  Shield,
  SupportAgent,
} from '@mui/icons-material'

const benefits = [
  {
    icon: <HealthAndSafety />,
    title: 'Improved Air Quality',
    description:
      'Remove dust, allergens, and pollutants from your air ducts to breathe cleaner, healthier air.',
  },
  {
    icon: <Bolt />,
    title: 'Increased Efficiency',
    description:
      'Clean ducts allow your HVAC system to work more efficiently, reducing energy costs.',
  },
  {
    icon: <Speed />,
    title: 'Better Airflow',
    description:
      'Remove blockages and debris to restore optimal airflow throughout your home.',
  },
  {
    icon: <Air />,
    title: 'Mold Prevention',
    description:
      'Eliminate mold and moisture issues that can affect your health and home structure.',
  },
  {
    icon: <Shield />,
    title: 'Fire Safety',
    description:
      'Regular dryer vent cleaning prevents dangerous lint buildup that can cause fires.',
  },
  {
    icon: <SupportAgent />,
    title: 'Expert Service',
    description:
      'Trained professionals with years of experience in air duct and HVAC cleaning.',
  },
]

function Benefits() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6,  } }}>
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
            Why Choose Air Duct Cleaning?
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
            Discover the many benefits of professional air duct cleaning for your home and family
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 4,
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0,0,0,0.05)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 2,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  {benefit.icon}
                </Box>
                <Typography
                  variant="h6"
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
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Benefits

