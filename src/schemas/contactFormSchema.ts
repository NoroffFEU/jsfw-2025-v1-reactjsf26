import { z } from 'zod';

const NORWEGIAN_EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const STRING_REGEX = /^[a-zA-ZæøåÆØÅ .'-]+$/;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, { message: 'Full Name must be at least 3 characters.' })
    .max(50, { message: 'Full Name can not be longer than 50 characters' })
    .regex(STRING_REGEX, {
      message: 'Full Name must contain allowed characters',
    }),
  subject: z
    .string()
    .trim()
    .min(3, { message: 'Subject must be at least 3 characters.' })
    .max(50, { message: 'Subject can not be longer than 50 characters' })
    .regex(STRING_REGEX, {
      message: 'Subject must contain allowed characters',
    }),
  email: z
    .string()
    .trim()
    .email('Invalid email address')
    .min(3, { message: 'Email must be at least 3 characters.' })
    .max(50, { message: 'Email can not be longer than 50 characters' })
    .refine((mail) => NORWEGIAN_EMAIL_REGEX.test(mail), {
      message: 'Email seems to contain a mistake',
    }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(500, { message: 'Message can not be longer than 500 characters' })
    .regex(STRING_REGEX, {
      message: 'Message must contain allowed characters',
    }),
});

export type ContactData = z.infer<typeof contactFormSchema>;
