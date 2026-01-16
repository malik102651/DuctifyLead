import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { CheckCircle, Star, Groups, VerifiedUser } from '@mui/icons-material'

function WhyChooseUs() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Why Choose USA Clean Master?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              We are a licensed and insured air duct cleaning service with years of experience
              serving homeowners and businesses. Our team is highly trained and equipped with
              professional-grade tools to ensure your HVAC system is cleaned thoroughly and safely.
            </Typography>
            <List>
              {[
                'Licensed and fully insured professionals',
                'Expert in mold removal and treatment',
                'Comprehensive dryer vent cleaning',
                'Tailored service for your HVAC system',
                'Free consultations and estimates',
                'Large, loyal customer base',
              ].map((item, index) => (
                <ListItem key={index} sx={{ px: 0, py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircle sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: { fontSize: '1.1rem', color: 'text.primary' },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {[
                {
                  icon: <VerifiedUser />,
                  number: '15+',
                  label: 'Years Experience',
                  color: '#1a73e8',
                },
                {
                  icon: <Groups />,
                  number: '10K+',
                  label: 'Happy Customers',
                  color: '#34a853',
                },
                {
                  icon: <Star />,
                  number: '4.9',
                  label: 'Average Rating',
                  color: '#fbbc04',
                },
                {
                  icon: <CheckCircle />,
                  number: '100%',
                  label: 'Satisfaction',
                  color: '#ea4335',
                },
              ].map((stat, index) => (
                <Grid item xs={6} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      borderRadius: 4,
                      backgroundColor: `${stat.color}10`,
                      border: `2px solid ${stat.color}30`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        backgroundColor: `${stat.color}20`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: stat.color,
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: stat.color,
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default WhyChooseUs

