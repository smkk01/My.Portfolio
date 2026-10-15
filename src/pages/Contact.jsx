import Contact from '../components/Contact.jsx'

function ContactPage() {
  return (
    <>
      <header className="page-hero"><div className="container-narrow" data-aos="fade-up"><span className="eyebrow">Contact</span><h1 className="page-title">Let&apos;s start a conversation.</h1><p className="lead text-muted-custom mb-0">Get in touch about a role, project, or opportunity to work together.</p></div></header>
      <section className="section-space pt-0"><div className="container-narrow" data-aos="fade-up" data-aos-delay="100"><Contact /></div></section>
    </>
  )
}

export default ContactPage