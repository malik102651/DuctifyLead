import React from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  TextField,
} from '@mui/material'
import { Phone, Email, LocationOn, Send } from '@mui/icons-material'

function ContactSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'white',
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Ready to Improve Your Air Quality?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 4,
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.7,
              }}
            >
              Contact us today for a free consultation and estimate. Our team is ready to help you
              breathe easier with professional air duct cleaning services.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                  }}
                >
                  <Phone />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Call Us
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    888-396-5195
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                  }}
                >
                  <Email />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Email Us
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    info@usacleanmaster.com
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                  }}
                >
                  <LocationOn />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Service Areas
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    Nationwide Coverage
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={8}
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
                Request a Free Estimate
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    },
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<Send />}
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactSection

