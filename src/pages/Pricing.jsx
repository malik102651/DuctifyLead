import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { CheckCircle, Close } from '@mui/icons-material'

function Pricing() {
  const navigate = useNavigate()
  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 299,
      sixMonthPrice: 1600,
      sixMonthSavings: '12%',
      leadsPerMonth: '2-3',
      leadsPerSixMonth: '12-15',
      features: {
        'No. of Leads': '2-3',
        'Referal Fee': '25%',
        'AI Verified': true,
        'ISA Verified': false,
        'Live Transfer': false,
        'Service Area Targeting': '4 Zip Codes',
        'Online Marketing': true,
        'Customer Support': 'Standard',
        'Agent Profile': false,
        'CRM': false,
      },
      highlighted: false,
    },
    {
      name: 'Standard',
      monthlyPrice: 499,
      sixMonthPrice: 2600,
      sixMonthSavings: '14%',
      leadsPerMonth: '3-5',
      leadsPerSixMonth: '18-30',
      features: {
        'No. of Leads': '3-5',
        'Referal Fee': '20%',
        'AI Verified': true,
        'ISA Verified': true,
        'Live Transfer': false,
        'Service Area Targeting': '4 Zip Codes',
        'Online Marketing': true,
        'Customer Support': 'Priority',
        'Agent Profile': true,
        'CRM': false,
      },
      highlighted: true,
    },
    {
      name: 'Premium',
      monthlyPrice: 899,
      annualPrice: 9000,
      annualSavings: '17%',
      leadsPerMonth: '5-8',
      leadsPerYear: '60-90',
      features: {
        'No. of Leads': '5-8',
        'Referal Fee': '15%',
        'AI Verified': true,
        'ISA Verified': true,
        'Live Transfer': true,
        'Service Area Targeting': 'Custom Areas',
        'Online Marketing': true,
        'Customer Support': 'Dedicated',
        'Agent Profile': true,
        'CRM': true,
      },
      highlighted: false,
    },
  ]

  const featureKeys = [
    'No. of Leads',
    'Referal Fee',
    'AI Verified',
    'Service Area Targeting',
    'Online Marketing',
    'Customer Support',
    'Live Transfer',
    'ISA Verified',
    'Agent Profile',
    'CRM',
  ]

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
            Choose a Plan That Fits Your Business Growth
          </Typography>
          <Typography
            sx={{
              fontSize: '1.1rem',
              fontWeight: 400,
              lineHeight: 1.8,
            }}
          >
            LM Duct offers flexible pricing plans designed for duct cleaning companies of all sizes. All plans include exclusive, verified leads and access to our lead delivery system. No shared leads. No hidden fees.
          </Typography>
        </Container>
      </Box>

      {/* Pricing Cards */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {plans.map((plan, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card
                  sx={{
                    borderRadius: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    border: plan.highlighted ? '2px solid #0066cc' : '1px solid rgba(0,0,0,0.08)',
                    boxShadow: plan.highlighted
                      ? '0 12px 40px rgba(0, 102, 204, 0.2)'
                      : '0 4px 15px rgba(0,0,0,0.08)',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  {plan.highlighted && (
                    <Chip
                      label="Most Popular"
                      sx={{
                        position: 'absolute',
                        top: 4,
                        right: 16,
                        backgroundColor: '#ff6b35',
                        color: 'white',
                        fontWeight: 700,
                        height: 32,
                        fontSize: '0.85rem',
                      }}
                    />
                  )}

                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 4,
                        color: '#1a2332',
                      }}
                    >
                      {plan.name}
                    </Typography>

                    {plan.name === 'Basic' && (
                      <Box sx={{ mb: 4 }}>
                        <Box sx={{ mb: 2 }}>
                          <Typography sx={{ fontSize: '0.85rem', color: '#5a6b7d', mb: 0.5 }}>
                            Monthly
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '2.5rem',
                              fontWeight: 800,
                              color: '#1a2332',
                            }}
                          >
                            ${plan.monthlyPrice}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography sx={{ fontSize: '0.85rem', color: '#5a6b7d', mb: 0.5 }}>
                            6 Months
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '2.5rem',
                              fontWeight: 800,
                              color: '#1a2332',
                            }}
                          >
                            ${plan.sixMonthPrice}
                            <span style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 600, ml: 1 }}>
                              (save {plan.sixMonthSavings})
                            </span>
                          </Typography>
                        </Box>
                      </Box>
                    )}

                    {plan.name === 'Standard' && (
                      <Box sx={{ mb: 4 }}>
                        <Box sx={{ mb: 2 }}>
                          <Typography sx={{ fontSize: '0.85rem', color: '#5a6b7d', mb: 0.5 }}>
                            Monthly
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '2.5rem',
                              fontWeight: 800,
                              color: '#1a2332',
                            }}
                          >
                            ${plan.monthlyPrice}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography sx={{ fontSize: '0.85rem', color: '#5a6b7d', mb: 0.5 }}>
                            6 Months
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '2.5rem',
                              fontWeight: 800,
                              color: '#1a2332',
                            }}
                          >
                            ${plan.sixMonthPrice}
                            <span style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 600, ml: 1 }}>
                              (save {plan.sixMonthSavings})
                            </span>
                          </Typography>
                        </Box>
                      </Box>
                    )}

                    {plan.name === 'Premium' && (
                      <Box sx={{ mb: 4 }}>
                        <Box sx={{ mb: 2 }}>
                          <Typography sx={{ fontSize: '0.85rem', color: '#5a6b7d', mb: 0.5 }}>
                            Monthly
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '2.5rem',
                              fontWeight: 800,
                              color: '#1a2332',
                            }}
                          >
                            ${plan.monthlyPrice}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography sx={{ fontSize: '0.85rem', color: '#5a6b7d', mb: 0.5 }}>
                            Annually
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '2.5rem',
                              fontWeight: 800,
                              color: '#1a2332',
                            }}
                          >
                            ${plan.annualPrice}
                            <span style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: 600, ml: 1 }}>
                              (save {plan.annualSavings})
                            </span>
                          </Typography>
                        </Box>
                      </Box>
                    )}

                    <Button
                      variant={plan.highlighted ? 'contained' : 'outlined'}
                      fullWidth
                      onClick={() => navigate(`/plan-details/${plan.name.toLowerCase()}`)}
                      sx={{
                        backgroundColor: plan.highlighted ? '#0066cc' : 'transparent',
                        color: plan.highlighted ? 'white' : '#0066cc',
                        borderColor: '#0066cc',
                        py: 1.5,
                        fontWeight: 700,
                        borderRadius: 2,
                        mb: 4,
                        '&:hover': {
                          backgroundColor: plan.highlighted ? '#004499' : 'rgba(0, 102, 204, 0.08)',
                        },
                      }}
                    >
                      Choose Plan
                    </Button>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {featureKeys.map((key, feaIdx) => (
                        <Box key={feaIdx} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                          {plan.features[key] === true ? (
                            <CheckCircle
                              sx={{
                                color: '#10b981',
                                fontSize: '1.2rem',
                                flexShrink: 0,
                              }}
                            />
                          ) : plan.features[key] === false ? (
                            <Close
                              sx={{
                                color: '#d1d5db',
                                fontSize: '1.2rem',
                                flexShrink: 0,
                              }}
                            />
                          ) : (
                            <CheckCircle
                              sx={{
                                color: '#10b981',
                                fontSize: '1.2rem',
                                flexShrink: 0,
                              }}
                            />
                          )}
                          <Box>
                            <Typography
                              sx={{
                                color: '#5a6b7d',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                              }}
                            >
                              {key}
                            </Typography>
                            {typeof plan.features[key] === 'string' && (
                              <Typography
                                sx={{
                                  color: '#1a2332',
                                  fontSize: '0.85rem',
                                  fontWeight: 600,
                                }}
                              >
                                {plan.features[key]}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Features Table */}
          {/* <Box sx={{ mt: 12, mb: 8 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 4,
                color: '#1a2332',
                textAlign: 'center',
              }}
            >
              Detailed Feature Comparison
            </Typography>
            <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
                    <TableCell sx={{ fontWeight: 700, color: '#1a2332', borderBottom: '2px solid #e5e7eb' }}>
                      Features
                    </TableCell>
                    {plans.map((plan, idx) => (
                      <TableCell
                        key={idx}
                        align="center"
                        sx={{
                          fontWeight: 700,
                          color: plan.highlighted ? '#0066cc' : '#1a2332',
                          borderBottom: '2px solid #e5e7eb',
                        }}
                      >
                        {plan.name}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {featureKeys.map((key, rowIdx) => (
                    <TableRow key={rowIdx} sx={{ '&:hover': { backgroundColor: '#f9fafb' } }}>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          color: '#1a2332',
                          borderBottom: '1px solid #e5e7eb',
                        }}
                      >
                        {key}
                      </TableCell>
                      {plans.map((plan, colIdx) => (
                        <TableCell
                          key={colIdx}
                          align="center"
                          sx={{
                            borderBottom: '1px solid #e5e7eb',
                          }}
                        >
                          {plan.features[key] === true ? (
                            <CheckCircle
                              sx={{
                                color: '#10b981',
                                fontSize: '1.5rem',
                              }}
                            />
                          ) : plan.features[key] === false ? (
                            <Close
                              sx={{
                                color: '#d1d5db',
                                fontSize: '1.5rem',
                              }}
                            />
                          ) : (
                            <Typography
                              sx={{
                                color: '#5a6b7d',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                              }}
                            >
                              {plan.features[key]}
                            </Typography>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box> */}

          {/* Info Section */}
          <Card sx={{ backgroundColor: '#f0f4ff', border: 'none', borderRadius: 2, p: 4 }}>
            <Typography
              sx={{
                color: '#1a2332',
                fontSize: '0.95rem',
                lineHeight: 1.8,
              }}
            >
              All LM Duct plans include 100% exclusive, human-verified leads delivered based on availability within selected ZIP codes. Lead volume, pricing, and ZIP coverage may vary depending on location and market demand. Long-term plans offer priority delivery, better ZIP availability, and cost savings, making them ideal for consistent growth. For businesses with multi-location or higher-volume needs, custom plans are available upon request.
            </Typography>
          </Card>
        </Container>
      </Box>

      {/* CTA */}
      <Box
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
            Ready to Start Growing?
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.95 }}>
            Join successful duct cleaning companies that are growing faster with exclusive leads.
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
      </Box>
    </Box>
  )
}

export default Pricing
