/* eslint-disable import/prefer-default-export */

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	client: {
		NEXT_PUBLIC_APP_URL: z.string().url().optional(),
		NEXT_PUBLIC_MEASUREMENT_ID: z.string().min(1).default("GA-12345678"),
	},
	server: {
		MAILER_HOST: z.string(),
		MAILER_PORT: z.string(),
		MAILER_AUTH_USER: z.string(),
		MAILER_AUTH_PASS: z.string(),
		MAILER_RECEIVER: z.string(),
	},
	runtimeEnv: {
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
		NEXT_PUBLIC_MEASUREMENT_ID: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
		MAILER_HOST: process.env.MAILER_HOST,
		MAILER_PORT: process.env.MAILER_PORT,
		MAILER_AUTH_USER: process.env.MAILER_AUTH_USER,
		MAILER_AUTH_PASS: process.env.MAILER_AUTH_PASS,
		MAILER_RECEIVER: process.env.MAILER_RECEIVER,
	},

	/**
	 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
	 * useful for Docker builds.
	 */
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	/**
	 * Makes it so that empty strings are treated as undefined.
	 * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
	 */
	emptyStringAsUndefined: true,
});
