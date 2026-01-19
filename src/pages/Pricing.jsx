import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import { CheckCircle, Close, ArrowRight, TrendingUp  } from '@mui/icons-material'
import Target from '@mui/icons-material/Adjust'
import Zap from '@mui/icons-material/Bolt'



function Pricing() {
  const navigate = useNavigate()
  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 299,
      sixMonthPrice: 1600,
      sixMonthSavings: '12%',
      features: {
        'No. of Leads': { monthly: '2-3', period: '12-15' },
        'Referral Fee': { monthly: '25%', period: '25%' },
        'AI Verified': { monthly: true, period: true },
        'ISA Verified': { monthly: false, period: false },
        'Live Transfer': { monthly: false, period: false },
        'Service Area Targeting': { monthly: '4 ZIP Codes', period: '4 ZIP Codes' },
        'Online Marketing': { monthly: true, period: true },
        'Customer Support': { monthly: 'Standard', period: 'Standard' },
        'Agent Profile': { monthly: false, period: false },
        'CRM': { monthly: false, period: false },
      },
      highlighted: false,
      bestFor: 'Single-service businesses starting out',
    },
    {
      name: 'Standard',
      monthlyPrice: 499,
      sixMonthPrice: 2600,
      sixMonthSavings: '14%',
      features: {
        'No. of Leads': { monthly: '3-5', period: '18-30' },
        'Referral Fee': { monthly: '20%', period: '20%' },
        'AI Verified': { monthly: true, period: true },
        'ISA Verified': { monthly: true, period: true },
        'Live Transfer': { monthly: false, period: false },
        'Service Area Targeting': { monthly: '4 ZIP Codes', period: '4 ZIP Codes' },
        'Online Marketing': { monthly: true, period: true },
        'Customer Support': { monthly: 'Priority', period: 'Priority' },
        'Agent Profile': { monthly: true, period: true },
        'CRM': { monthly: false, period: false },
      },
      highlighted: true,
      bestFor: 'Growing HVAC companies seeking steady lead flow',
    },
    {
      name: 'Premium',
      monthlyPrice: 899,
      annualPrice: 9000,
      annualSavings: '17%',
      features: {
        'No. of Leads': { monthly: '5-8', period: '60-90' },
        'Referral Fee': { monthly: '15%', period: '15%' },
        'AI Verified': { monthly: true, period: true },
        'ISA Verified': { monthly: true, period: true },
        'Live Transfer': { monthly: true, period: true },
        'Service Area Targeting': { monthly: 'Custom Areas', period: 'Custom Areas' },
        'Online Marketing': { monthly: true, period: true },
        'Customer Support': { monthly: 'Dedicated', period: 'Dedicated' },
        'Agent Profile': { monthly: true, period: true },
        'CRM': { monthly: true, period: true },
      },
      highlighted: false,
      bestFor: 'Established businesses scaling aggressively',
    },
  ]

  const featureKeys = [
    'No. of Leads',
    'Referral Fee',
    'AI Verified',
    'ISA Verified',
    'Service Area Targeting',
    'Online Marketing',
    'Customer Support',
    'Live Transfer',
    'Agent Profile',
    'CRM',
  ]

  return (
    <Box sx={{ pt: 10 }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
          position: 'relative',
          overflow: 'hidden',
          color: 'white',
          py: { xs: 8, md: 12 },
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
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Chip
              label="Transparent Pricing"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontWeight: 600,
                mb: 3,
                fontSize: '0.9rem',
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
              Simple & Transparent HVAC Lead Pricing
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.15rem' },
                mb: 3,
                opacity: 0.95,
                maxWidth: '750px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Flexible pricing plans for HVAC businesses that want consistent, exclusive service leads without the uncertainty of shared platforms or expensive advertising.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* PRICING INTRO SECTION */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#f5f7fa' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: '#1a2332',
                  fontSize: { xs: '2rem', md: '2.3rem' },
                }}
              >
                Pricing Built for Growth
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#5a6b7d',
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                Pricing varies based on the number of leads, selected ZIP codes, service types, and contract duration. This allows businesses of all sizes to choose a plan that aligns with their growth goals and budget.
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#5a6b7d',
                  lineHeight: 1.8,
                }}
              >
                Plans are available on a Monthly, 6-Month, or Yearly basis. Longer-term plans provide better overall value, improved ZIP code availability, and a lower cost per lead—making them ideal for businesses looking to scale predictably.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                {[
                  { icon: <Target />, title: 'Service-Specific', desc: 'Leads matching your services' },
                  { icon: <Zap />, title: 'Exclusive Targeting', desc: 'One business per ZIP code' },
                  { icon: <TrendingUp />, title: 'Flexible Terms', desc: 'Month, 6-month, or yearly' },
                ].map((item, idx) => (
                  <Grid item xs={12} key={idx}>
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                      <Box
                        sx={{
                          width: '50px',
                          height: '50px',
                          borderRadius: 2,
                          backgroundColor: '#0066cc15',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Box sx={{ color: '#0066cc', fontSize: '1.5rem' }}>
                          {item.icon}
                        </Box>
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, color: '#1a2332', mb: 0.5 }}>
                          {item.title}
                        </Typography>
                        <Typography sx={{ color: '#5a6b7d', fontSize: '0.9rem' }}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* PRICING CARDS */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
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
              Choose Your HVAC Lead Plan
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                color: '#5a6b7d',
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              Each plan is designed to support different stages of business growth
            </Typography>
          </Box>

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
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'visible',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: plan.highlighted
                        ? '0 16px 50px rgba(0, 102, 204, 0.25)'
                        : '0 8px 30px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  {plan.highlighted && (
                    <Chip
                      label="Most Popular"
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#ff6b35',
                        color: 'white',
                        fontWeight: 700,
                        height: 32,
                        fontSize: '0.85rem',
                      }}
                    />
                  )}

                  <CardContent sx={{ p: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Header */}
                    <Box sx={{ p: 4, pb: 3, borderBottom: '1px solid #e0e7ff' }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          mb: 1,
                          color: '#1a2332',
                          fontSize: '1.3rem',
                        }}
                      >
                        {plan.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.85rem',
                          color: '#0066cc',
                          fontWeight: 600,
                        }}
                      >
                        {plan.bestFor}
                      </Typography>
                    </Box>

                    {/* Pricing Table Header */}
                    <Box sx={{ p: 2, backgroundColor: '#f5f7fa', borderBottom: '1px solid #e0e7ff' }}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '0.7rem', color: '#5a6b7d', fontWeight: 700 }}>
                              Monthly
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '1.1rem',
                                fontWeight: 800,
                                color: '#1a2332',
                                mt: 0.5,
                              }}
                            >
                              ${plan.monthlyPrice}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ textAlign: 'center', borderLeft: '1px solid #e0e7ff' }}>
                            <Typography sx={{ fontSize: '0.7rem', color: '#5a6b7d', fontWeight: 700 }}>
                              {plan.annualPrice ? 'Annually' : '6 Months'}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '1rem',
                                fontWeight: 800,
                                color: '#1a2332',
                                mt: 0.5,
                              }}
                            >
                              ${plan.annualPrice || plan.sixMonthPrice}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '0.65rem',
                                color: '#10b981',
                                fontWeight: 700,
                                mt: 0.3,
                              }}
                            >
                              save {plan.annualSavings || plan.sixMonthSavings}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>

                    {/* CTA Button */}
                    <Box sx={{ p: 4, pt: 3, borderBottom: '1px solid #e0e7ff' }}>
                      <Button
                        variant={plan.highlighted ? 'contained' : 'outlined'}
                        fullWidth
                        onClick={() => navigate(`/plan-details/${plan.name.toLowerCase()}`)}
                        endIcon={<ArrowRight />}
                        sx={{
                          backgroundColor: plan.highlighted ? '#0066cc' : 'transparent',
                          color: plan.highlighted ? 'white' : '#0066cc',
                          borderColor: '#0066cc',
                          py: 1.5,
                          fontWeight: 700,
                          borderRadius: 2,
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: plan.highlighted ? '#004499' : 'rgba(0, 102, 204, 0.08)',
                          },
                        }}
                      >
                        Choose Plan
                      </Button>
                    </Box>

                    {/* Features List - Side by Side */}
                    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 0 }}>
                      <Grid container spacing={0}>
                        {/* Monthly Column Header */}
                        <Grid item xs={6} sx={{ borderRight: '1px solid #e0e7ff', pb: 2, mb: 2 }}>
                          <Typography sx={{ fontSize: '0.7rem', color: '#5a6b7d', fontWeight: 700, textAlign: 'center' }}>
                            MONTHLY
                          </Typography>
                        </Grid>
                        {/* 6-Month/Annual Column Header */}
                        <Grid item xs={6} sx={{ pl: 2, pb: 2, mb: 2 }}>
                          <Typography sx={{ fontSize: '0.7rem', color: '#5a6b7d', fontWeight: 700, textAlign: 'center' }}>
                            {plan.annualPrice ? 'ANNUALLY' : '6 MONTHS'}
                          </Typography>
                        </Grid>

                        {/* Features Rows */}
                        {featureKeys.map((key, feaIdx) => {
                          const monthlyVal = plan.features[key].monthly;
                          const periodVal = plan.features[key].period;
                          return (
                            <React.Fragment key={feaIdx}>
                              {/* Monthly Feature */}
                              <Grid item xs={6} sx={{ borderRight: '1px solid #e0e7ff', borderBottom: '1px solid #e0e7ff', py: 1.5, pr: 2 }}>
                                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                                  {monthlyVal === true ? (
                                    <CheckCircle
                                      sx={{
                                        color: '#10b981',
                                        fontSize: '0.9rem',
                                        flexShrink: 0,
                                        mt: 0.15,
                                      }}
                                    />
                                  ) : monthlyVal === false ? (
                                    <Close
                                      sx={{
                                        color: '#d1d5db',
                                        fontSize: '0.9rem',
                                        flexShrink: 0,
                                        mt: 0.15,
                                      }}
                                    />
                                  ) : (
                                    <CheckCircle
                                      sx={{
                                        color: '#10b981',
                                        fontSize: '0.9rem',
                                        flexShrink: 0,
                                        mt: 0.15,
                                      }}
                                    />
                                  )}
                                  <Box>
                                    <Typography
                                      sx={{
                                        color: '#5a6b7d',
                                        fontSize: '0.75rem',
                                        fontWeight: 500,
                                        lineHeight: 1.3,
                                      }}
                                    >
                                      {key}
                                    </Typography>
                                    {typeof monthlyVal === 'string' && (
                                      <Typography
                                        sx={{
                                          color: '#1a2332',
                                          fontSize: '0.7rem',
                                          fontWeight: 600,
                                          mt: 0.15,
                                        }}
                                      >
                                        {monthlyVal}
                                      </Typography>
                                    )}
                                  </Box>
                                </Box>
                              </Grid>

                              {/* 6-Month/Annual Feature */}
                              <Grid item xs={6} sx={{ borderBottom: '1px solid #e0e7ff', py: 1.5, pl: 2 }}>
                                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                                  {periodVal === true ? (
                                    <CheckCircle
                                      sx={{
                                        color: '#10b981',
                                        fontSize: '0.9rem',
                                        flexShrink: 0,
                                        mt: 0.15,
                                      }}
                                    />
                                  ) : periodVal === false ? (
                                    <Close
                                      sx={{
                                        color: '#d1d5db',
                                        fontSize: '0.9rem',
                                        flexShrink: 0,
                                        mt: 0.15,
                                      }}
                                    />
                                  ) : (
                                    <CheckCircle
                                      sx={{
                                        color: '#10b981',
                                        fontSize: '0.9rem',
                                        flexShrink: 0,
                                        mt: 0.15,
                                      }}
                                    />
                                  )}
                                  <Box>
                                    <Typography
                                      sx={{
                                        color: '#5a6b7d',
                                        fontSize: '0.75rem',
                                        fontWeight: 500,
                                        lineHeight: 1.3,
                                      }}
                                    >
                                      {key}
                                    </Typography>
                                    {typeof periodVal === 'string' && (
                                      <Typography
                                        sx={{
                                          color: '#1a2332',
                                          fontSize: '0.7rem',
                                          fontWeight: 600,
                                          mt: 0.15,
                                        }}
                                      >
                                        {periodVal}
                                      </Typography>
                                    )}
                                  </Box>
                                </Box>
                              </Grid>
                            </React.Fragment>
                          )
                        })}
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Pricing Notes */}
          <Card
            sx={{
              backgroundColor: '#f0f4ff',
              border: '1px solid #e0e7ff',
              borderRadius: 2,
              p: 4,
            }}
          >
            <Typography
              sx={{
                color: '#1a2332',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                fontWeight: 500,
              }}
            >
              <strong>How It Works:</strong> All Ductify Leads plans include 100% exclusive, human-verified leads delivered based on availability within selected ZIP codes. Lead volume, pricing, and ZIP coverage may vary depending on location and market demand. Longer-term plans offer priority delivery, better ZIP availability, and cost savings.
            </Typography>
          </Card>
        </Container>
      </Box>

      {/* PLAN COMPARISON TABLE */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f5f7fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: '#1a2332',
                fontSize: { xs: '2rem', md: '2.3rem' },
              }}
            >
              Feature Comparison
            </Typography>
          </Box>

          <TableContainer
            component={Paper}
            sx={{
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #e0e7ff',
              overflowX: 'auto',
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#ffffff' }}>
                  <TableCell
                    sx={{
                      fontWeight: 700,
                      color: '#1a2332',
                      borderBottom: '2px solid #e0e7ff',
                      fontSize: '0.85rem',
                      minWidth: '140px',
                    }}
                  >
                    Features
                  </TableCell>
                  {plans.map((plan, idx) => (
                    <React.Fragment key={idx}>
                      {/* Monthly Column */}
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: 700,
                          color: plan.highlighted ? '#0066cc' : '#1a2332',
                          borderBottom: '2px solid #e0e7ff',
                          fontSize: '0.75rem',
                          backgroundColor: plan.highlighted ? '#f0f4ff' : 'white',
                          borderRight: '1px solid #e0e7ff',
                          minWidth: '90px',
                        }}
                      >
                        <Box>
                          <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', mb: 0.5 }}>
                            {plan.name}
                          </Typography>
                          <Typography sx={{ fontSize: '0.65rem', opacity: 0.8 }}>
                            Monthly
                          </Typography>
                        </Box>
                      </TableCell>

                      {/* 6-Month/Annual Column */}
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: 700,
                          color: plan.highlighted ? '#0066cc' : '#1a2332',
                          borderBottom: '2px solid #e0e7ff',
                          fontSize: '0.75rem',
                          backgroundColor: plan.highlighted ? '#f0f4ff' : 'white',
                          minWidth: '90px',
                        }}
                      >
                        <Box>
                          <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', mb: 0.5 }}>
                            {plan.name}
                          </Typography>
                          <Typography sx={{ fontSize: '0.65rem', opacity: 0.8 }}>
                            {plan.annualPrice ? 'Annually' : '6 Months'}
                          </Typography>
                        </Box>
                      </TableCell>
                    </React.Fragment>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {featureKeys.map((key, rowIdx) => (
                  <TableRow
                    key={rowIdx}
                    sx={{
                      '&:hover': { backgroundColor: '#f9fafb' },
                      '&:last-child td': { borderBottom: 'none' },
                    }}
                  >
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        color: '#1a2332',
                        borderBottom: '1px solid #e0e7ff',
                        fontSize: '0.8rem',
                        minWidth: '140px',
                      }}
                    >
                      {key}
                    </TableCell>
                    {plans.map((plan, colIdx) => {
                      const monthlyVal = plan.features[key].monthly;
                      const periodVal = plan.features[key].period;
                      return (
                        <React.Fragment key={colIdx}>
                          {/* Monthly Feature Cell */}
                          <TableCell
                            align="center"
                            sx={{
                              borderBottom: '1px solid #e0e7ff',
                              borderRight: '1px solid #e0e7ff',
                              backgroundColor: plan.highlighted ? '#f0f4ff' : 'white',
                              minWidth: '90px',
                            }}
                          >
                            {monthlyVal === true ? (
                              <CheckCircle sx={{ color: '#10b981', fontSize: '1.2rem' }} />
                            ) : monthlyVal === false ? (
                              <Close sx={{ color: '#d1d5db', fontSize: '1.2rem' }} />
                            ) : (
                              <Typography
                                sx={{
                                  color: '#5a6b7d',
                                  fontSize: '0.75rem',
                                  fontWeight: 600,
                                }}
                              >
                                {monthlyVal}
                              </Typography>
                            )}
                          </TableCell>

                          {/* 6-Month/Annual Feature Cell */}
                          <TableCell
                            align="center"
                            sx={{
                              borderBottom: '1px solid #e0e7ff',
                              backgroundColor: plan.highlighted ? '#f0f4ff' : 'white',
                              minWidth: '90px',
                            }}
                          >
                            {periodVal === true ? (
                              <CheckCircle sx={{ color: '#10b981', fontSize: '1.2rem' }} />
                            ) : periodVal === false ? (
                              <Close sx={{ color: '#d1d5db', fontSize: '1.2rem' }} />
                            ) : (
                              <Typography
                                sx={{
                                  color: '#5a6b7d',
                                  fontSize: '0.75rem',
                                  fontWeight: 600,
                                }}
                              >
                                {periodVal}
                              </Typography>
                            )}
                          </TableCell>
                        </React.Fragment>
                      )
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* COMMITMENT SECTION */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 4,
                color: '#1a2332',
                fontSize: { xs: '2rem', md: '2.3rem' },
              }}
            >
              Our Commitment to You
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                color: '#5a6b7d',
                maxWidth: '750px',
                mx: 'auto',
                mb: 6,
                lineHeight: 1.8,
              }}
            >
              Ductify Leads is committed to building long-term partnerships through transparency, lead quality, and reliable support. Availability is limited by ZIP code to maintain exclusivity, and spaces are offered on a first-come basis.
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                color: '#5a6b7d',
                maxWidth: '750px',
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              If you're ready to receive exclusive HVAC service leads tailored to your business, now is the time to secure your plan.
            </Typography>
          </Box>
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
              Get Started Today
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.15rem' },
                mb: 6,
                opacity: 0.95,
                lineHeight: 1.6,
              }}
            >
              Take the next step toward predictable, sustainable HVAC business growth with exclusive leads.
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
              Secure Your Plan Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Pricing
