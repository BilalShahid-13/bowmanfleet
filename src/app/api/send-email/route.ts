import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        // 1. Client se aane wale data (form fields) ko read karna
        const formData = await request.json();

        // 2. Nodemailer Transporter setup (Hostinger SMTP settings)
        const transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            secure: true,
            debug: true,
            logger: true,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // 3. Email ki configuration
        const mailOptions = {
            from: `"Bowman Contact" <${process.env.EMAIL_USERNAME}>`,
            to: process.env.EMAIL_USERNAME,
            replyTo: formData.email,
            subject: `New Inquiry: ${formData.subject}`,
            html: `
                <h3>New Message from ${formData.name}</h3>
                <p><strong>Phone:</strong> ${formData.phone}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Message:</strong> ${formData.message}</p>
            `,
        };

        // 4. Email send karna
        await transporter.sendMail(mailOptions);

        // 5. Success response bhejna
        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("SMTP Error:", error);
        return NextResponse.json(
            { success: false, error: "Server Error: Could not send email." },
            { status: 500 }
        );
    }
}