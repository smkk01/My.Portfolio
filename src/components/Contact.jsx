import { useState } from 'react'
import { useForm } from 'react-hook-form'
import profile from '../data/profile.json'
import { saveContactMessage } from '../services/contactStorage.js'

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [storageError, setStorageError] = useState('')
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    mode: 'onBlur',
    shouldFocusError: true,
  })
  const onSubmit = (values) => {
    setSubmitted(false)
    setStorageError('')
    
    try {
      saveContactMessage({
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      })
      setSubmitted(true)
      reset()
    } catch (error) {
      setStorageError(error instanceof Error ? error.message : 'Your message could not be saved in this browser.')
    }
  }

  return (
    <div className="row g-5">
      <div className="col-lg-5">
        <span className="eyebrow">Get in touch</span>
        <h2 className="h2 fw-bold mt-2 mb-3">Let&apos;s build something meaningful.</h2>
        <p className="text-muted-custom mb-4">Have a project, an opportunity, or just want to say hello? Send a message and I&apos;ll be glad to connect.</p>
        <div className="contact-detail"><span className="icon-tile"><i className="bi bi-envelope" /></span><div><small>Email</small><a href={`mailto:${profile.email}`}>{profile.email}</a></div></div>
        <div className="contact-detail"><span className="icon-tile"><i className="bi bi-geo-alt" /></span><div><small>Location</small><span>{profile.location}</span></div></div>
        <div className="contact-detail"><span className="icon-tile"><i className="bi bi-linkedin" /></span><div><small>LinkedIn</small><a href={profile.social.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a></div></div>
        <p className="small text-muted-custom mt-4"><i className="bi bi-shield-lock me-2" />Messages are saved only in this browser; this portfolio has no backend.</p>
      </div>
      <div className="col-lg-7">
        <form className="contact-form card-surface" onSubmit={handleSubmit(onSubmit)} noValidate>
          {submitted && <div className="alert alert-success" role="status">Your message has been saved in this browser. Thank you for reaching out.</div>}
          {storageError && <div className="alert alert-danger" role="alert">{storageError}</div>}
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label" htmlFor="contact-name">Name</label>
              <input id="contact-name" className={`form-control${errors.name ? ' is-invalid' : ''}`} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} {...register('name', {
                required: 'Please enter your name.',
                validate: (value) => value.trim().length > 0 || 'Name cannot contain only spaces.',
                maxLength: { value: 100, message: 'Name must be 100 characters or fewer.' },
              })} />
              {errors.name && <div className="invalid-feedback" id="contact-name-error">{errors.name.message}</div>}
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" className={`form-control${errors.email ? ' is-invalid' : ''}`} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} {...register('email', {
                required: 'Please enter your email.',
                validate: (value) => value.trim().length > 0 || 'Please enter your email.',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address.' },
                maxLength: { value: 254, message: 'Email must be 254 characters or fewer.' },
              })} />
              {errors.email && <div className="invalid-feedback" id="contact-email-error">{errors.email.message}</div>}
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" className={`form-control${errors.subject ? ' is-invalid' : ''}`} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'contact-subject-error' : undefined} {...register('subject', {
                required: 'Please enter a subject.',
                validate: (value) => value.trim().length > 0 || 'Subject cannot contain only spaces.',
                maxLength: { value: 150, message: 'Subject must be 150 characters or fewer.' },
              })} />
              {errors.subject && <div className="invalid-feedback" id="contact-subject-error">{errors.subject.message}</div>}
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="contact-message">Message</label>
              <textarea id="contact-message" rows="5" className={`form-control${errors.message ? ' is-invalid' : ''}`} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} {...register('message', {
                required: 'Please enter a message.',
                validate: (value) => value.trim().length >= 10 || 'Message must be at least 10 characters.',
                maxLength: { value: 5000, message: 'Message must be 5,000 characters or fewer.' },
              })} />
              {errors.message && <div className="invalid-feedback" id="contact-message-error">{errors.message.message}</div>}
            </div>
            <div className="col-12"><button className="btn btn-primary btn-lg" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Saving…' : 'Save message locally'} <i className="bi bi-arrow-right ms-2" /></button></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact