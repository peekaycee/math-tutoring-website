'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Users, User, Zap } from 'lucide-react';
import styles from './Plans.module.css';

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ReactNode;
  features: string[];
  badge?: string;
  featured?: boolean;
}

const plans: Plan[] = [
  {
    id: 'individual',
    name: 'One-on-One Sessions',
    description: 'Personalised, dedicated tutoring just for you',
    price: 60,
    icon: <User size={28} />,
    features: [
      'Customised lesson plans tailored to your needs',
      'Flexible scheduling (weekday & weekend)',
      'Focus on weak areas and exam techniques',
      'Progress tracking and detailed feedback',
      'Direct communication with your tutor',
      'Free first session',
    ],
  },
  {
    id: 'group5',
    name: 'Small Group Classes',
    description: 'Learn with 4 other students in an intimate setting',
    price: 30,
    icon: <Users size={28} />,
    features: [
      'Groups of exactly 5 students',
      'Collaborative learning environment',
      'Cost-effective personalised attention',
      'Peer learning and motivation',
      'Weekly 90-minute sessions',
      'Access to recorded lessons',
    ],
    badge: 'POPULAR',
    featured: true,
  },
  {
    id: 'group10',
    name: 'Standard Group Classes',
    description: 'Comprehensive lessons for larger groups',
    price: 20,
    icon: <Users size={28} />,
    features: [
      'Groups of 10 students',
      'Full curriculum coverage',
      'Structured curriculum following exam boards',
      'Weekly 120-minute sessions',
      'Recorded lessons and notes provided',
      'Monthly progress assessments',
    ],
  },
  {
    id: 'intensive',
    name: 'Exam Intensive Prep',
    description: 'Crash course for upcoming exams (4-6 weeks)',
    price: 150,
    icon: <Zap size={28} />,
    features: [
      '3-4 sessions per week for focused prep',
      'Past papers and exam strategies',
      'Mock exams with marking feedback',
      'Last-minute revision techniques',
      'Priority email/WhatsApp support',
      'Guarantee: 90+ grade or partial refund',
    ],
    badge: 'INTENSIVE',
  },
];

const faqs = [
  {
    question: 'How do I choose the right plan?',
    answer:
      'Consider your learning style, budget, and schedule. One-on-one is best for customised attention, small groups offer great value, and group classes are ideal for collaborative learning. Start with a free consultation.',
  },
  {
    question: 'Can I switch between plans?',
    answer:
      "Absolutely! You can upgrade or downgrade your plan anytime with 2 weeks' notice. We'll ensure a smooth transition and refund any overpayment.",
  },
  {
    question: 'What if I need to cancel?',
    answer:
      'No penalty cancellations up to 7 days before your scheduled session. After that, a 50% fee applies. Annual plans receive a prorated refund.',
  },
  {
    question: 'Are sessions recorded?',
    answer:
      'All group classes are recorded and available for 6 months. One-on-one sessions can be recorded upon request (with consent from both parties).',
  },
  {
    question: 'Do you offer discounts for long-term commitments?',
    answer:
      'Yes! Book 10+ sessions upfront and receive 15% off. Annual commitments get 20% off. Contact us for custom package pricing.',
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "We offer a 100% refund within 48 hours of your first session if you're not satisfied. Your satisfaction is our priority.",
  },
];

export default function Plans() {
  const [emailSent, setEmailSent] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null>(null);

  const handleSendPlan = async (plan: Plan) => {
    setLoading(plan.id);
    try {
      const response = await fetch('/api/send-plan-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planName: plan.name,
          price: plan.price,
          features: plan.features,
          studentEmail: 'student@example.com',
        }),
      });

      if (response.ok) {
        setEmailSent(plan.id);
        setTimeout(() => setEmailSent(null), 3000);
      }
    } catch (error) {
      console.error('Error sending plan:', error);
    } finally {
      setLoading(null);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className={styles.header} variants={itemVariants}>
          <p className={styles.label}>Transparent Pricing</p>
          <h1 className={styles.heading}>
            Plans for <span className={styles.headingAccent}>every student</span>
          </h1>
          <p className={styles.description}>
            Choose the tutoring format that works best for you. All plans include
            comprehensive support and a free consultation.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          className={styles.plansGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`${styles.planCard} ${plan.featured ? styles.featured : ''}`}
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={styles.badgeContainer}>
                  <span className={styles.badge}>{plan.badge}</span>
                </div>
              )}

              {/* Plan Name & Icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ color: '#b8f3e6' }}>{plan.icon}</span>
                <h3 className={styles.planName}>{plan.name}</h3>
              </div>

              <p className={styles.planDescription}>{plan.description}</p>

              {/* Pricing */}
              <div className={styles.pricing}>
                <div className={styles.price}>${plan.price}</div>
                <div className={styles.priceLabel}>per session or per month</div>
              </div>

              {/* Features */}
              <ul className={styles.features}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className={styles.actions}>
                {emailSent === plan.id && (
                  <div className={styles.successMessage}>
                    Plan details sent to your email!
                  </div>
                )}
                <button
                  className={styles.ctaBtn}
                  onClick={() => {
                    // Scroll to contact form
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Book Now
                </button>
                <button
                  className={styles.sendPlanBtn}
                  onClick={() => handleSendPlan(plan)}
                  disabled={loading === plan.id}
                >
                  <Send size={14} />
                  {loading === plan.id ? 'Sending...' : 'Email Plan Details'}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div className={styles.faqSection} variants={itemVariants}>
          <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
          <motion.div
            className={styles.faqGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {faqs.map((faq, idx) => (
              <motion.div key={idx} className={styles.faqItem} variants={itemVariants}>
                <p className={styles.faqQuestion}>{faq.question}</p>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
