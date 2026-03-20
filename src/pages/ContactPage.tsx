import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '../schemas/contactFormSchema';
import type { ContactData } from '../schemas/contactFormSchema';
import ContactText from '../components/ui/ContactText';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContactData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      subject: '',
      email: '',
      message: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = (data: ContactData) => {
    console.log('Form data:', data);
    reset();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const onError = (formErrors: FieldErrors<ContactData>) => {
    const firstErrorField = Object.keys(formErrors)[0];
    if (firstErrorField) {
      const fieldElement = document.getElementsByName(firstErrorField)[0];
      if (fieldElement) {
        fieldElement.focus();
      }
    }
  };

  return (
    <div className="container align-items-center justify-content-center text-center my-3 my-md-5">
      <div className="row">
        <div className="col-12 order-2 col-md-5 order-md-1 mt-5 mt-md-0">
          <ContactText />
        </div>
        <div className="col-12 order-1 col-md-7">
          <h1>Contact Us</h1>
          {isSubmitted ? (
            <div
              className="alert alert-success success-message d-flex justify-content-center text-center "
              role="alert"
            >
              <p className="mb-0">Form successfully submitted</p>
            </div>
          ) : (
            ''
          )}
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="form-group pb-4">
              <label
                className="form-label form-label-element d-block text-start"
                htmlFor="fullName"
              >
                Full name
                <i className="bi bi-asterisk form-icon">
                  <span className="visually-hidden">hidden</span>
                </i>{' '}
                :
              </label>
              <div className="mx-auto form-input-control position-relative">
                <input
                  className="form-control w-100"
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  {...register('fullName')}
                  aria-invalid={errors.fullName ? 'true' : 'false'}
                  aria-describedby="fullNameError"
                />
                {errors.fullName && (
                  <p
                    id="fullNameError"
                    role="alert"
                    className="text-danger position-absolute top-100 start-0  small mb-0"
                  >
                    {errors.fullName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="form-group pb-4">
              <label
                className="form-label form-label-element d-block text-start"
                htmlFor="subject"
              >
                Subject
                <i className="bi bi-asterisk form-icon">
                  <span className="visually-hidden">hidden</span>
                </i>{' '}
                :
              </label>
              <div className="mx-auto form-input-control position-relative">
                <input
                  className="form-control w-100"
                  id="subject"
                  type="text"
                  autoComplete="off"
                  {...register('subject')}
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby="subjectError"
                />
                {errors.subject && (
                  <p
                    id="subjectError"
                    role="alert"
                    className="text-danger position-absolute top-100 start-0  small mb-0"
                  >
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>
            <div className="form-group pb-4">
              <label
                className="form-label form-label-element d-block text-start"
                htmlFor="email"
              >
                Email
                <i className="bi bi-asterisk form-icon">
                  <span className="visually-hidden">hidden</span>
                </i>{' '}
                :
              </label>
              <div className="mx-auto form-input-control position-relative">
                <input
                  className="form-control w-100"
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register('email')}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby="emailError"
                />
                {errors.email && (
                  <p
                    id="emailError"
                    role="alert"
                    className="text-danger position-absolute top-100 start-0  small mb-0"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="form-group">
              <label
                className="form-label form-label-element d-block text-start"
                htmlFor="message"
              >
                Message
                <i className="bi bi-asterisk form-icon">
                  <span className="visually-hidden">hidden</span>
                </i>{' '}
                :
              </label>
              <div className="mx-auto form-input-control position-relative">
                <textarea
                  className="form-control w-100"
                  id="message"
                  autoComplete="off"
                  {...register('message')}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby="messageError"
                />
                {errors.message && (
                  <p
                    id="messageError"
                    role="alert"
                    className="text-danger position-absolute top-100 start-0  small mb-0"
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            <div className="d-flex form-button-control justify-content-end">
              <button
                className="btn btn-primary mt-3"
                type="submit"
                disabled={isSubmitting || !isValid}
              >
                {' '}
                {isSubmitting ? 'Sending in...' : 'Contact Us'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
