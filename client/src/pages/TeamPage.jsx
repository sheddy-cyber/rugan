import { Linkedin, Mail } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

/* ── Team Data ── */
const TEAM = [
  {
    name:     'Fidel Bethel Nnadi',
    role:     'Founder and Executive Director',
    bio:      'Licensed social worker, researcher, and youth development practitioner committed to advancing opportunities for young people especially girls in rural communities. She holds a first-class degree in Social Work and postgraduate training in Social Work Practice with Children and Youth. Her work integrates research and practice to address structural inequalities affecting young people.',
    image:    '/images/team/fidel.jpg',
    linkedin: '#',
    email:    'fidel@rugan.org',
  },
  {
    name:     'Cynthia Chimarame Ugwu',
    role:     'Co-founder and Chief Operating Officer',
    bio:      "Product manager and operations strategist with years of experience in the technology sector. She brings a systems-driven approach to leadership, combining strategic execution, operational excellence, and stakeholder management to drive sustainable organizational growth. She leads strategy implementation, partnerships, and internal operations.",
    image:    '/images/team/cynthia.jpg',
    linkedin: '#',
    email:    'cynthia@rugan.org',
  },
  {
    name:     'Juliet Chigoziem Azegba',
    role:     'Program Manager',
    bio:      "Social worker and advocate for children, girls, and women. She holds a bachelor's degree in social work and is currently undergoing postgraduate training in Family Social Work at the University of Nigeria, Nsukka. She has extensive experience coordinating programs, leading sensitization campaigns and community awareness sessions to support girls and their families.",
    image:    '/images/team/juliet.jpg',
    linkedin: '#',
    email:    'juliet@rugan.org',
  },
  {
    name:     'Ogbu Kaosisochukwu Nkemdilim ESQ (AIMC)',
    role:     'Secretary, Board of Trustee & Legal Adviser',
    bio:      "Legal practitioner with eight years' experience in Civil and Criminal litigation, Election Petition, Corporate Practice, Real Estate, Arbitration, Family Law and Regulatory Compliance. Called to Nigerian Bar in 2019, she holds an LL.B from the University of Nigeria Nsukka and is an Associate of Institute of Chartered Mediators and Conciliators (ICMC). Currently serves as head of Chambers at Y. N. Akirikwen, SAN & Associate.",
    image:    '/images/team/ogbu.jpg',
    linkedin: '#',
    email:    'ogbu@rugan.org',
  },
  {
    name:     'Onyekachi Edwina Nnadi-Onoja',
    role:     'Board Member',
    bio:      "Dedicated teacher and educator, holding a first-class degree from the University of Nigeria, Nsukka (UNN). With extensive experience in girls' education and advocacy, she is a strong champion for initiatives that empower young girls, promote access to quality education, and address social inequalities. Her expertise provides strategic insight and guidance to RUGAN.",
    image:    '/images/team/onyekachi.jpg',
    linkedin: '#',
    email:    'onyekachi@rugan.org',
  },
]

/* ── Member Card ── */
function MemberCard({ name, role, bio, image, linkedin, email }) {
  return (
    <div
      style={{
        border: '1px solid #E5E7EB',
        borderRadius: '1rem',
        overflow: 'hidden',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Photo */}
      <div style={{ aspectRatio: '4/3', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={image}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: '0.2rem' }}>
          {name}
        </h3>
        <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#5B8A8C', marginBottom: '0.75rem' }}>
          {role}
        </p>
        <p style={{ fontSize: '0.8125rem', color: '#6B7280', lineHeight: 1.65, flex: 1 }}>
          {bio}
        </p>

        {/* Social links */}
        <div
          style={{
            display: 'flex',
            gap: '0.625rem',
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid #F3F4F6',
          }}
        >
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} LinkedIn`}
              style={{
                width: '2.125rem', height: '2.125rem',
                borderRadius: '0.5rem',
                border: '1px solid #E5E7EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#6B7280',
                transition: 'border-color 200ms, color 200ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)'
                e.currentTarget.style.color = 'var(--color-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB'
                e.currentTarget.style.color = '#6B7280'
              }}
            >
              <Linkedin size={15} />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              aria-label={`Email ${name}`}
              style={{
                width: '2.125rem', height: '2.125rem',
                borderRadius: '0.5rem',
                border: '1px solid #E5E7EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#6B7280',
                transition: 'border-color 200ms, color 200ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)'
                e.currentTarget.style.color = 'var(--color-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB'
                e.currentTarget.style.color = '#6B7280'
              }}
            >
              <Mail size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Page ── */
export default function TeamPage() {
  return (
    <>
      {/* Hero — primary green, text centered */}
      <section
        style={{
          background: 'var(--color-primary)',
          padding: '4rem 0',
          textAlign: 'center',
        }}
      >
        <div className="container-rugan">
          <h1
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '0.75rem',
            }}
          >
            Meet Our Team
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.82)', maxWidth: '40rem', margin: '0 auto' }}>
            Passionate individuals dedicated to empowering girls and transforming communities
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-rugan">
          <SectionHeader
            title="Leadership Team"
            subtitle="Guiding our vision and strategy with passion and expertise"
          />

          {/* All cards in a uniform 3-column grid, left-aligned */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
