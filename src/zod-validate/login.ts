import { z } from 'zod';

import { stringifyObjectValidate } from '../common';
import { FormLoginType } from '../model/authentication';

export const loginValidation = z.object<ZodShape<FormLoginType>>({
  email: z.string().min(
    1,
    stringifyObjectValidate({
      keyT: 'validation:email_required',
    }),
  ),
  password: z.string().min(1, 'Password is required'),
});
