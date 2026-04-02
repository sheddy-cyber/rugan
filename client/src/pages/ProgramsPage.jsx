import PageHeroBanner from '@/components/common/PageHeroBanner'
import ProgramCard    from '@/components/common/ProgramCard'
import CTABanner      from '@/components/common/CTABanner'

const PROGRAMS = [
  {
    slug:        'rugan-idgc-school-tours',
    title:       'RUGAN IDGC School Tours',
    description: 'Annual empowerment sessions in rural secondary schools building confidence, leadership skills, and self-belief during International Day of the Girl Child.',
    image:       '/images/programs/idgc/gallery-1.jpg',
  },
  {
    slug:        'rugan-healthy-period-project',
    title:       'RUGAN Healthy Period Project',
    description: 'Providing menstrual health education, reducing stigma, and distributing sanitary pads to ensure girls can participate fully in school.',
    image:       '/images/programs/healthy-period/gallery-1.jpg',
  },
  {
    slug:        'excellence-award-project',
    title:       'Excellence Awards',
    description: 'Recognizing and rewarding outstanding academic performance among rural secondary school girls to motivate excellence and retention.',
    image:       '/images/programs/excellence-award/gallery-1.jpg',
  },
  {
    slug:        'the-rise-project',
    title:       'The RISE Project',
    description: 'Guiding SS3 girls on life after secondary school, including educational, vocational, and career pathways for a confident transition.',
    image:       '/images/programs/rise/gallery-1.jpg',
  },
  {
    slug:        'rural-to-global-programme',
    title:       'Rural-to-Global Program',
    description: 'Highlighting success stories and providing mentorship to help rural girls dream bigger and access global opportunities.',
    image:       '/images/programs/rural-to-global/gallery-1.jpg',
  },
]

export default function ProgramsPage() {
  return (
    <>
      <PageHeroBanner
        title="Our Programs"
        subtitle="Comprehensive initiatives designed to empower girl-children and create lasting change in communities."
        backgroundImage="/images/programs/programs-hero.jpg"
        centerText
      />

      {/* Programs Grid */}
      <section className="section-padding">
        <div className="container-rugan">
          {/* Row 1 — 3 cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            {PROGRAMS.slice(0, 3).map((program) => (
              <ProgramCard
                key={program.slug}
                image={program.image}
                title={program.title}
                description={program.description}
                to={`/programs/${program.slug}`}
                variant="plain"
              />
            ))}
          </div>

          {/* Row 2 — 2 cards, left-aligned */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
            }}
          >
            {PROGRAMS.slice(3).map((program) => (
              <ProgramCard
                key={program.slug}
                image={program.image}
                title={program.title}
                description={program.description}
                to={`/programs/${program.slug}`}
                variant="plain"
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Support Our Programs?"
        subtitle="Your contribution helps us reach more girls and expand our impact."
        buttons={[
          { label: 'Make a Donation',  to: '/donate',      variant: 'primary' },
          { label: 'Become a Partner', to: '/partnership', variant: 'volunteer' },
        ]}
      />
    </>
  )
}
