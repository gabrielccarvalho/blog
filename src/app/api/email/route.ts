import { type NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

type BodyType = {
	name: string
	email: string
	message: string
}

export async function POST(req: NextRequest) {
	try {
		const { name, email, message }: BodyType = await req.json()

		await resend.emails.send({
			from: 'gabrielcampos.com.br <website@gabrielcampos.com.br>',
			to: 'gabrielccarvalhopro@gmail.com',
			subject: `${name} - via gabrielcampos.com.br`,
			html: `
      <Html>
			<ul>
				<li>
					<strong>Name:</strong> ${name}
				</li>
				<li>
					<strong>Email:</strong> ${email}
				</li>
				<li>
					<strong>Message:</strong> ${message}
				</li>
			</ul>
		</Html>`,
		})

		return NextResponse.json({ message: 'Email sent!' })
	} catch (err) {
		console.log(err)
		return NextResponse.json({ message: 'Error sending email' })
	}
}
