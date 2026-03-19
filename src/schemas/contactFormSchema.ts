import { z } from 'zod';

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
    .email('Invalid email format')
    .min(3, { message: 'Email must be at least 3 characters.' })
    .max(50, { message: 'Email can not be longer than 50 characters' }),
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
