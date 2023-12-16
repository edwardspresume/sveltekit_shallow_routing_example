import type { LayoutServerLoad } from './$types';

import { superValidate } from 'sveltekit-superforms/server';

import { FeedbackValidationSchema } from '$validations/feedbackValidationSchema';

export const load = (async () => {
	return { feedbackForm: await superValidate(FeedbackValidationSchema) };
}) satisfies LayoutServerLoad;
