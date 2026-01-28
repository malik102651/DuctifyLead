import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from '@mui/material'
import { Phone, Mail, LocationOn, CheckCircle  } from '@mui/icons-material'
import Calendar from '@mui/icons-material/CalendarMonth';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    message: '',
  })

  const [openModal, setOpenModal] = useState(false)
  const [scheduleFormData, setScheduleFormData] = useState({
    name: '',
    contact: '',
    email: '',
    callScheduleTime: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success', // 'success', 'error', 'info', 'warning'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleScheduleChange = (e) => {
    setScheduleFormData({
      ...scheduleFormData,
      [e.target.name]: e.target.value,
    })
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setScheduleFormData({
      name: '',
      contact: '',
      email: '',
      callScheduleTime: '',
    })
  }

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({
      open: true,
      message,
      severity,
    })
  }

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    showSnackbar('Thank you! We\'ll be in touch soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      location: '',
      message: '',
    })
  }

  const handleScheduleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace with your Google Apps Script Web App URL
      const GOOGLE_SHEET_URL = 'https://sheetdb.io/api/v1/zo7qs07wnrh8w'

      const response = await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: scheduleFormData.name,
          Contact: scheduleFormData.contact,
          Email: scheduleFormData.email,
          "Call Schedule Time": scheduleFormData.callScheduleTime,
          // timestamp: new Date().toLocaleString(),
        }),
      })

      if (response.ok) {
        showSnackbar('Thank you! Your call has been scheduled. We will contact you shortly.')
        handleCloseModal()
      } else {
        showSnackbar('There was an error submitting your request. Please try again.', 'error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      showSnackbar('Error submitting form. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box sx={{ pt: 10 }}>
      {/* Hero Banner */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0066cc 0%, #003d99 100%)',
          color: 'white',
          py: { xs: 6, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 400,
              mb: 4,
            }}
          >
            Have questions? Our team is here to help you grow your duct cleaning business.
          </Typography>
          <Button
            onClick={handleOpenModal}
            variant="contained"
            size="large"
            startIcon={<Calendar />}
            sx={{
              backgroundColor: '#ff6b35',
              px: 5,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#ff5522',
              },
            }}
          >
            Schedule a Call With Expert
          </Button>
        </Container>
      </Box>

      {/* Contact Content */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={6}>
            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: '#0066cc15',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0066cc',
                      }}
                    >
                      <Phone />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1a2332',
                      }}
                    >
                      Phone
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#5a6b7d', ml: 8 }}>+1 (800) 555-0123</Typography>
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: '#ff6b3515',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ff6b35',
                      }}
                    >
                      <Mail />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1a2332',
                      }}
                    >
                      Email
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#5a6b7d', ml: 8 }}>support@ductifyleads.com</Typography>
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: '#10b98115',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#10b981',
                      }}
                    >
                      <LocationOn />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1a2332',
                      }}
                    >
                      Address
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#5a6b7d', ml: 8 }}>
                    123 Lead Street, Chicago, IL 60610, USA
                  </Typography>
                </Box>

                {/* Response Time */}
                <Card
                  sx={{
                    borderRadius: 2,
                    backgroundColor: '#f5f7fa',
                    border: '1px solid rgba(0,0,0,0.05)',
                    mt: 2,
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                      <CheckCircle sx={{ color: '#10b981' }} />
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: '#1a2332',
                        }}
                      >
                        Response Time
                      </Typography>
                    </Box>
                    <Typography sx={{ color: '#5a6b7d', fontSize: '0.95rem' }}>
                      We typically respond within 2-4 hours during business hours (Mon-Fri, 9AM-6PM CST).
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 4,
                      color: '#1a2332',
                    }}
                  >
                    Send us a message
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              '&:hover fieldset': {
                                borderColor: '#0066cc',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              '&:hover fieldset': {
                                borderColor: '#0066cc',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              '&:hover fieldset': {
                                borderColor: '#0066cc',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              '&:hover fieldset': {
                                borderColor: '#0066cc',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <InputLabel>Service Area</InputLabel>
                          <Select
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            label="Service Area"
                            sx={{
                              borderRadius: 2,
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#0066cc',
                              },
                            }}
                          >
                            <MenuItem value="">Select a state</MenuItem>
                            <MenuItem value="CA">California</MenuItem>
                            <MenuItem value="TX">Texas</MenuItem>
                            <MenuItem value="FL">Florida</MenuItem>
                            <MenuItem value="NY">New York</MenuItem>
                            <MenuItem value="PA">Pennsylvania</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          multiline
                          rows={5}
                          variant="outlined"
                          placeholder="Tell us about your duct cleaning business and what you're looking for..."
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              '&:hover fieldset': {
                                borderColor: '#0066cc',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: '#0066cc',
                            py: 1.5,
                            fontWeight: 700,
                            fontSize: '1rem',
                            borderRadius: 2,
                            '&:hover': {
                              backgroundColor: '#004499',
                            },
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      {/* <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, #0066cc 0%, #003d99 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.8rem' },
            }}
          >
            Can't Wait? Start Now
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.95 }}>
            Get your first exclusive leads within 24 hours of signing up.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#ff6b35',
              px: 5,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#ff5522',
              },
            }}
          >
            Start Your Free Trial
          </Button>
        </Container>
      </Box> */}

      {/* Schedule Call Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
          },
        }}
      >
        <DialogTitle
          sx={{
            background: 'linear-gradient(135deg, #0066cc 0%, #003d99 100%)',
            color: 'white',
            fontWeight: 700,
            fontSize: '1.5rem',
          }}
        >
          Schedule Your Expert Call
        </DialogTitle>
        <DialogContent sx={{ pt: 4 }}>
          <form onSubmit={handleScheduleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={scheduleFormData.name}
                  onChange={handleScheduleChange}
                  required
                  variant="outlined"
                  sx={{
                    marginTop: 4,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '&:hover fieldset': {
                        borderColor: '#0066cc',
                      },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Contact (Phone)"
                  name="contact"
                  value={scheduleFormData.contact}
                  onChange={handleScheduleChange}
                  required
                  variant="outlined"
                  placeholder="Enter your phone number"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '&:hover fieldset': {
                        borderColor: '#0066cc',
                      },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={scheduleFormData.email}
                  onChange={handleScheduleChange}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '&:hover fieldset': {
                        borderColor: '#0066cc',
                      },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Call Schedule Time"
                  name="callScheduleTime"
                  type="datetime-local"
                  value={scheduleFormData.callScheduleTime}
                  onChange={handleScheduleChange}
                  required
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '&:hover fieldset': {
                        borderColor: '#0066cc',
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions sx={{ p: 3, gap: 2 }}>
          <Button
            onClick={handleCloseModal}
            variant="outlined"
            sx={{
              borderColor: '#0066cc',
              color: '#0066cc',
              borderRadius: 2,
              '&:hover': {
                borderColor: '#004499',
                backgroundColor: 'rgba(0, 102, 204, 0.05)',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleScheduleSubmit}
            variant="contained"
            disabled={isSubmitting}
            sx={{
              backgroundColor: '#0066cc',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#004499',
              },
            }}
          >
            {isSubmitting ? 'Scheduling...' : 'Schedule Call'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%', borderRadius: 2 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Contact
