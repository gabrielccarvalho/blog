import readingDuration from 'reading-duration'

export function getReadTime(
	// biome-ignore lint/suspicious/noExplicitAny: <need a type for raw MDX file>
	content: any,
) {
	const readingTime = readingDuration(content.toString(), {
		wordsPerMinute: 200,
		emoji: false,
	})

	return readingTime
}
