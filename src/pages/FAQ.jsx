import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
} from '@mui/material'
import {
  ExpandMore,
  HelpOutline,
  MessageOutlined,
  Phone,
  Mail,
  ArrowRight,
} from '@mui/icons-material'

function FAQ() {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const faqCategories = [
    {
      category: 'About Ductify Leads',
      icon: <HelpOutline />,
      questions: [
        {
          id: 'panel1',
          question: 'What is Ductify Leads?',
          answer: 'Ductify Leads is a HVAC lead generation company. We specialize in finding and delivering exclusive, service-specific HVAC leads to local businesses. We do not provide HVAC services ourselves. Our role is to connect businesses with customers actively searching for those services.',
        },
        {
          id: 'panel2',
          question: 'What types of leads do you provide?',
          answer: 'We provide leads for a wide range of HVAC-related services, including air duct cleaning, heating services, air conditioning installation and repair, HVAC maintenance, ventilation, blower services, and indoor air quality solutions. Businesses receive leads only for the services they offer.',
        },
        {
          id: 'panel3',
          question: 'What makes Ductify Leads different from other lead companies?',
          answer: 'Ductify Leads focuses on quality, exclusivity, and service-specific targeting. Unlike shared lead platforms, we prioritize long-term partnerships, human verification, and ZIP code protection.',
        },
      ],
    },
    {
      category: 'Lead Information',
      icon: <ExpandMore />,
      questions: [
        {
          id: 'panel4',
          question: 'Are the leads exclusive?',
          answer: 'Yes. All leads are 100% exclusive and delivered to only one business per ZIP code. We do not share or resell leads to multiple companies.',
        },
        {
          id: 'panel5',
          question: 'How are the leads generated?',
          answer: 'Leads are generated through targeted digital marketing campaigns and are reviewed by our verification team. Each inquiry is matched to the appropriate business based on service type and ZIP code before delivery.',
        },
        {
          id: 'panel6',
          question: 'How are leads delivered?',
          answer: 'Leads are delivered in real time through email, CRM access, or other agreed-upon delivery methods, allowing businesses to contact customers quickly.',
        },
        {
          id: 'panel7',
          question: 'How many leads will I receive?',
          answer: 'The number of leads depends on the plan you choose, service demand, and ZIP code availability. Lead volume estimates are outlined clearly in the pricing section.',
        },
      ],
    },
    {
      category: 'Plans & Customization',
      icon: <ExpandMore />,
      questions: [
        {
          id: 'panel8',
          question: 'Can I choose the services and ZIP codes I want leads for?',
          answer: 'Yes. You select the specific HVAC services you offer and the ZIP codes you want to target. Lead delivery is based strictly on those selections.',
        },
        {
          id: 'panel9',
          question: 'What if my business only offers one service?',
          answer: 'That\'s perfectly fine. If your company only offers a single service, such as air duct cleaning, you will receive leads only for that service.',
        },
        {
          id: 'panel10',
          question: 'Do you work with multiple businesses in the same area?',
          answer: 'No. To maintain exclusivity and lead quality, we work with only one business per ZIP code for the same service category.',
        },
      ],
    },
    {
      category: 'Contracts & Billing',
      icon: <ExpandMore />,
      questions: [
        {
          id: 'panel11',
          question: 'Is there a minimum contract?',
          answer: 'Monthly plans do not require a long-term commitment. Six-month and yearly plans are contract-based and run for the full duration once activated.',
        },
        {
          id: 'panel12',
          question: 'What is your refund policy?',
          answer: 'Six-month and yearly plans are non-refundable once the contract begins. However, if lead quality does not meet expectations, clients may contact our support team to request lead optimization or improvements during the contract period.',
        },
      ],
    },
    {
      category: 'Getting Started',
      icon: <ExpandMore />,
      questions: [
        {
          id: 'panel13',
          question: 'How quickly can I start receiving leads?',
          answer: 'Once your account is set up and ZIP codes are confirmed, lead delivery can begin within a short setup period, depending on availability.',
        },
        {
          id: 'panel14',
          question: 'How do I get started?',
          answer: 'You can get started by choosing a plan from our pricing page or contacting our team directly. We\'ll guide you through setup and ensure your campaign is aligned with your services and target areas.',
        },
        {
          id: 'panel15',
          question: 'Do you provide support after sign-up?',
          answer: 'Yes. Our support team is available to assist with onboarding, lead delivery questions, and optimization requests throughout your partnership with us.',
        },
      ],
    },
    {
      category: 'Comparison & Strategy',
      icon: <ExpandMore />,
      questions: [
        {
          id: 'panel16',
          question: 'Is this better than Google Ads or referrals?',
          answer: 'Many of our clients use Ductify Leads alongside Google Ads or referrals. The advantage of our system is predictable lead flow, exclusivity, and lower competition.',
        },
      ],
    },
  ]

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f7fa', pt: 10 }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                px: 3,
                py: 1,
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                mb: 3,
              }}
            >
              <HelpOutline sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography sx={{ fontSize: '0.9rem', fontWeight: 600 }}>
                Common Questions Answered
              </Typography>
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                opacity: 0.95,
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Find answers to common questions about Ductify Leads, our services, pricing, and how to get started.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* FAQ CONTENT */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={3}>
          {faqCategories.map((categoryData, categoryIndex) => (
            <Grid item xs={12} key={categoryIndex}>
              <Box sx={{ mb: 6 }}>
                {/* Category Header */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 4,
                    pb: 2,
                    borderBottom: '2px solid #e5e7eb',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 50,
                      height: 50,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #0066cc 0%, #3399ff 100%)',
                      color: 'white',
                      mr: 2,
                      fontSize: '1.5rem',
                    }}
                  >
                    {categoryData.icon}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      fontWeight: 700,
                      color: '#1a2332',
                    }}
                  >
                    {categoryData.category}
                  </Typography>
                </Box>

                {/* FAQ Items */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {categoryData.questions.map((faqItem) => (
                    <Accordion
                      key={faqItem.id}
                      expanded={expanded === faqItem.id}
                      onChange={handleChange(faqItem.id)}
                      sx={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '10px !important',
                        boxShadow: expanded === faqItem.id ? '0 4px 20px rgba(0, 102, 204, 0.1)' : 'none',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 4px 20px rgba(0, 102, 204, 0.08)',
                          borderColor: '#0066cc',
                        },
                        '&:before': {
                          display: 'none',
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{
                          py: 2.5,
                          px: 3,
                          '&:hover': {
                            backgroundColor: 'rgba(0, 102, 204, 0.02)',
                          },
                          '& .MuiAccordionSummary-content': {
                            margin: 0,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            fontWeight: 600,
                            color: '#1a2332',
                            lineHeight: 1.5,
                          }}
                        >
                          {faqItem.question}
                        </Typography>
                      </AccordionSummary>
                      <Divider />
                      <AccordionDetails
                        sx={{
                          py: 3,
                          px: 3,
                          backgroundColor: 'rgba(0, 102, 204, 0.02)',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            color: '#5a6b7d',
                            lineHeight: 1.8,
                          }}
                        >
                          {faqItem.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CONTACT CTA SECTION */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e8eef7 100%)',
          py: { xs: 6, md: 10 },
          borderTop: '1px solid #e5e7eb',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontWeight: 700,
                  color: '#1a2332',
                  mb: 2,
                }}
              >
                Still Have Questions?
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#5a6b7d',
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                If you need more information or have specific questions about your business, our expert team is here to help. Don't hesitate to reach out to us through the Contact Us page.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px rgba(0, 102, 204, 0.3)',
                  },
                }}
                href="/contact"
              >
                Contact Our Team <ArrowRight sx={{ ml: 1 }} />
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 24px rgba(0, 102, 204, 0.15)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, #0066cc 0%, #3399ff 100%)',
                            color: 'white',
                          }}
                        >
                          <MessageOutlined />
                        </Box>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: '#1a2332',
                          textAlign: 'center',
                          mb: 1,
                        }}
                      >
                        Email Us
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.9rem',
                          color: '#5a6b7d',
                          textAlign: 'center',
                        }}
                      >
                        support@ductifyleads.com
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 24px rgba(0, 102, 204, 0.15)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, #ff6b35 0%, #ff9966 100%)',
                            color: 'white',
                          }}
                        >
                          <Phone />
                        </Box>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: '#1a2332',
                          textAlign: 'center',
                          mb: 1,
                        }}
                      >
                        Call Us
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.9rem',
                          color: '#5a6b7d',
                          textAlign: 'center',
                        }}
                      >
                        +1 (555) 123-4567
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default FAQ
