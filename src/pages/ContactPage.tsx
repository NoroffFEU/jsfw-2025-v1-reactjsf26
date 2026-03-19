import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '../schemas/contactFormSchema';
import type { ContactData } from '../schemas/contactFormSchema';

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
    <>
      <h1>Contact Us</h1>
      {isSubmitted ? (
        <div className="alert alert-success" role="alert">
          <p>Form successfully submitted</p>
        </div>
      ) : (
        ''
      )}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="form-group">
          <label htmlFor="fullName">Full name:</label>
          <input
            id="fullName"
            type="text"
            {...register('fullName')}
            aria-invalid={errors.fullName ? 'true' : 'false'}
            aria-describedby="fullNameError"
          />
          {errors.fullName && (
            <p
              id="fullNameError"
              role="alert"
              style={{ color: 'red', fontSize: '0.9em' }}
            >
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            id="subject"
            type="text"
            {...register('subject')}
            aria-invalid={errors.subject ? 'true' : 'false'}
            aria-describedby="subjectError"
          />
          {errors.subject && (
            <p
              id="subjectError"
              role="alert"
              style={{ color: 'red', fontSize: '0.9em' }}
            >
              {errors.subject.message}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby="emailError"
          />
          {errors.email && (
            <p
              id="emailError"
              role="alert"
              style={{ color: 'red', fontSize: '0.9em' }}
            >
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            {...register('message')}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby="messageError"
          />
          {errors.message && (
            <p
              id="messageError"
              role="alert"
              style={{ color: 'red', fontSize: '0.9em' }}
            >
              {errors.message.message}
            </p>
          )}
        </div>
        <button type="submit" disabled={isSubmitting || !isValid}>
          {' '}
          {isSubmitting ? 'Sending in...' : 'Contact Us'}
        </button>
      </form>
    </>
  );
};

export default ContactPage;
