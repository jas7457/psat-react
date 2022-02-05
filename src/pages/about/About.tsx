import Container from '~/components/style-guide/container/Container';
import Heading, { HeadingLevel } from '~/components/style-guide/heading/Heading';
import Button from '~/components/style-guide/button/Button';
import Link from '~/components/style-guide/link/Link';

export default function About() {
	return (
		<Container>
			<Heading styleLevel={1}>About Page (I am an h1)</Heading>

			<HeadingLevel>
				<p>I am some text</p>
				<Heading styleLevel={1}>Although I appear like an h1, I am actually an h2</Heading>
				<Heading styleLevel={6}>Although I appear like an h6, I'm also an h2</Heading>
			</HeadingLevel>

			<div className="flex gap-4 items-start">
				<Button>I am a normal button</Button>
				<Button as="a" href="https://www.google.com" target="_blank">
					I am an anchor that looks like a button
				</Button>
				<Button as={Link} to="/">
					I am a Link component that looks like a button
				</Button>
			</div>
		</Container>
	);
}
