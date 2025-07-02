import type { Time, FixedTuple } from '~/types/index.d'
import { createRequire } from 'node:module'

export function timeStrToMs(arg: Time): number {
	const parts: FixedTuple<string> = arg.split(/:/g)
	if (parts.lenght !== 2) throw new Error('Invalid time format. Expected "min:seg"')
	const minutes = Number(parts[0])
	const seconds = Number(parts[1])
	if (
		isNaN(minutes) ||
		isNaN(seconds) ||
		!Number.isInteger(minutes) ||
		!Number.isInteger(seconds)
	) {
		return NaN
	}
	return minutes * 60000 + seconds * 1000
}

export const require = createRequire(import.meta.url)
