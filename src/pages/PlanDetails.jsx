import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Select,
  MenuItem,
  FormControl,
  Paper,
  Grid,
} from '@mui/material'
import { CheckCircle, Close, ArrowBack } from '@mui/icons-material'

function PlanDetails() {
  const { planName } = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [billingPeriod, setBillingPeriod] = useState(searchParams.get('period') || 'monthly')
  const savingsAmount = parseInt(searchParams.get('savings')) || 0
  const selectedPrice = parseInt(searchParams.get('price')) || 0
  const paymentUrl = decodeURIComponent(searchParams.get('paymentUrl') || '')

  const plansData = {
    basic: {
      name: 'Basic',
      monthlyPrice: 299,
      sixMonthPrice: 1600,
      sixMonthSavings: '12%',
      annualPrice: 3200,
      annualSavings: '11%',
      leadsPerMonth: '2-3',
      description: 'Perfect for getting started with lead generation',
      features: {
        'No. of Leads': '2-3',
        'Referal Fee': '25%',
        'AI Verified': true,
        'Service Area Targeting': '4 Zip Codes',
        'Online Marketing': true,
        'Customer Support': 'Standard',
        'Live Transfer': false,
        'ISA Verified': false,
        'Agent Profile': false,
        'CRM': false,
      },
    },
    standard: {
      name: 'Standard',
      monthlyPrice: 499,
      sixMonthPrice: 2600,
      sixMonthSavings: '14%',
      annualPrice: 5400,
      annualSavings: '10%',
      leadsPerMonth: '3-5',
      description: 'Most popular plan for growing businesses',
      features: {
        'No. of Leads': '3-5',
        'Referal Fee': '20%',
        'AI Verified': true,
        'Service Area Targeting': '4 Zip Codes',
        'Online Marketing': true,
        'Customer Support': 'Priority',
        'ISA Verified': true,
        'Agent Profile': true,
        'Live Transfer': false,
        'CRM': false,
      },
    },
    premium: {
      name: 'Premium',
      monthlyPrice: 899,
      sixMonthPrice: 5100,
      sixMonthSavings: '6%',
      annualPrice: 9000,
      annualSavings: '17%',
      leadsPerMonth: '5-8',
      description: 'Enterprise-grade solution with advanced features',
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
    },
  }

  const plan = plansData[planName] || plansData.standard

  const getPriceDisplay = () => {
    switch (billingPeriod) {
      case 'monthly':
        return { price: plan.monthlyPrice, period: 'month', savingsText: '' }
      case 'sixMonth':
        return {
          price: plan.sixMonthPrice,
          period: '6 months',
          savingsText: `Save ${plan.sixMonthSavings}`,
          totalMonths: 6,
        }
      case 'annual':
        return {
          price: plan.annualPrice,
          period: 'year',
          savingsText: `Save ${plan.annualSavings}`,
          totalMonths: 12,
        }
      default:
        return { price: plan.monthlyPrice, period: 'month', savingsText: '' }
    }
  }

  const priceDisplay = getPriceDisplay()
  const monthlyEquivalent =
    billingPeriod === 'monthly'
      ? plan.monthlyPrice
      : Math.round(priceDisplay.price / (priceDisplay.totalMonths || 1))

  return (
    <Box sx={{ pt: 10 }}>
      {/* Header with Back Button */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0066cc 0%, #003d99 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/pricing')}
            sx={{
              color: 'white',
              mb: 3,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Back to Plans
          </Button>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            {plan.name} Plan
          </Typography>
          <Typography
            sx={{
              fontSize: '1.1rem',
              fontWeight: 400,
              lineHeight: 1.8,
              maxWidth: '600px',
            }}
          >
            {plan.description}
          </Typography>
        </Container>
      </Box>

      {/* Billing Period Selector and Price Display */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="flex-start">
            {/* Left Column - Billing Period Selector */}
            <Grid item xs={12} md={5}>
              <Card sx={{ borderRadius: 3, boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1a2332',
                      mb: 3,
                    }}
                  >
                    Your Selected Plan
                  </Typography>

                  <Box sx={{ mb: 4, p: 3, backgroundColor: '#f0f4ff', borderRadius: 2, border: '2px solid #0066cc' }}>
                    <Typography sx={{ fontSize: '0.9rem', color: '#5a6b7d', mb: 1 }}>
                      Billing Period: <strong>{billingPeriod === 'monthly' ? 'Monthly' : billingPeriod === 'sixMonth' ? '6 Months' : 'Annual'}</strong>
                    </Typography>
                    <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: '#0066cc', mb: 1 }}>
                      ${selectedPrice}
                    </Typography>
                    {savingsAmount > 0 && (
                      <Typography sx={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600 }}>
                        You save ${savingsAmount} on this plan
                      </Typography>
                    )}
                    {savingsAmount === 0 && (
                      <Typography sx={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600 }}>
                        No commitment required
                      </Typography>
                    )}
                  </Box>

                  {/* Additional Info */}
                  <Box sx={{ backgroundColor: '#f0f4ff', borderRadius: 2, p: 3, mb: 3 }}>
                    <Typography sx={{ fontSize: '0.9rem', color: '#1a2332', lineHeight: 1.7 }}>
                      <strong>Monthly Equivalent:</strong> ${monthlyEquivalent}/month
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: '#5a6b7d', mt: 1 }}>
                      {billingPeriod !== 'monthly' && priceDisplay.savingsText && (
                        <>You're saving {priceDisplay.savingsText} with this plan</>
                      )}
                      {billingPeriod === 'monthly' && 'No commitment required'}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => {
                      if (paymentUrl) {
                        window.location.href = paymentUrl
                      }
                    }}
                    sx={{
                      backgroundColor: '#0066cc',
                      py: 2,
                      fontWeight: 700,
                      borderRadius: 2,
                      fontSize: '1rem',
                      '&:hover': {
                        backgroundColor: '#004499',
                      },
                    }}
                  >
                    Continue to Checkout
                  </Button>

                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#5a6b7d',
                      textAlign: 'center',
                      mt: 3,
                    }}
                  >
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Right Column - Plan Benefits & Support */}
            <Grid item xs={12} md={7}>
              {/* Expected ROI Section */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#1a2332',
                    mb: 3,
                  }}
                >
                  What You'll Get
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Card
                      sx={{
                        backgroundColor: '#f0f7ff',
                        border: '2px solid #0066cc',
                        borderRadius: 2,
                        p: 3,
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '2.5rem',
                          fontWeight: 800,
                          color: '#0066cc',
                          mb: 1,
                        }}
                      >
                        {plan.leadsPerMonth}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: '#1a2332',
                        }}
                      >
                        Leads Per Month
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Card
                      sx={{
                        backgroundColor: '#f0fff5',
                        border: '2px solid #10b981',
                        borderRadius: 2,
                        p: 3,
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '2.5rem',
                          fontWeight: 800,
                          color: '#10b981',
                          mb: 1,
                        }}
                      >
                        100%
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: '#1a2332',
                        }}
                      >
                        Verified Leads
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Box>

              {/* Support & Services */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#1a2332',
                    mb: 3,
                  }}
                >
                  Support & Services
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box
                    sx={{
                      p: 2.5,
                      backgroundColor: '#f9fafb',
                      borderRadius: 2,
                      borderLeft: '4px solid #0066cc',
                    }}
                  >
                    <Typography sx={{ fontWeight: 600, color: '#1a2332', mb: 0.5 }}>
                      {plan.features['Customer Support']} Customer Support
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: '#5a6b7d' }}>
                      Dedicated support team available to assist with your account and questions
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      backgroundColor: '#f9fafb',
                      borderRadius: 2,
                      borderLeft: '4px solid #0066cc',
                    }}
                  >
                    <Typography sx={{ fontWeight: 600, color: '#1a2332', mb: 0.5 }}>
                      Service Area: {plan.features['Service Area Targeting']}
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: '#5a6b7d' }}>
                      Targeted lead delivery in your preferred geographic locations
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2.5,
                      backgroundColor: '#f9fafb',
                      borderRadius: 2,
                      borderLeft: '4px solid #0066cc',
                    }}
                  >
                    <Typography sx={{ fontWeight: 600, color: '#1a2332', mb: 0.5 }}>
                      Referral Commission: {plan.features['Referal Fee']}
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: '#5a6b7d' }}>
                      Earn additional income by referring other businesses to our platform
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Key Advantages */}
              <Paper
                sx={{
                  backgroundColor: '#f0f4ff',
                  border: 'none',
                  borderRadius: 2,
                  p: 3.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#0066cc',
                    mb: 2,
                  }}
                >
                  Why Choose This Plan?
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <CheckCircle
                      sx={{
                        color: '#10b981',
                        fontSize: '1.2rem',
                        flexShrink: 0,
                        mt: 0.3,
                      }}
                    />
                    <Typography sx={{ fontSize: '0.95rem', color: '#1a2332', lineHeight: 1.6 }}>
                      Exclusive leads - never shared with competitors in your area
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <CheckCircle
                      sx={{
                        color: '#10b981',
                        fontSize: '1.2rem',
                        flexShrink: 0,
                        mt: 0.3,
                      }}
                    />
                    <Typography sx={{ fontSize: '0.95rem', color: '#1a2332', lineHeight: 1.6 }}>
                      Human-verified quality ensures high conversion potential
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <CheckCircle
                      sx={{
                        color: '#10b981',
                        fontSize: '1.2rem',
                        flexShrink: 0,
                        mt: 0.3,
                      }}
                    />
                    <Typography sx={{ fontSize: '0.95rem', color: '#1a2332', lineHeight: 1.6 }}>
                      No long-term contracts - cancel anytime risk-free
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
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
            Ready to Get Started?
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.95 }}>
            Start receiving qualified leads in your area today with no commitment.
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
            Begin Your Free Trial
          </Button>
        </Container>
      </Box>
    </Box>
  )
}

export default PlanDetails
