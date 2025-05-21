import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// This function will only run on the server
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST || "",
      port: Number(process.env.EMAIL_SERVER_PORT) || 587,
      auth: {
        user: process.env.EMAIL_SERVER_USER || "",
        pass: process.env.EMAIL_SERVER_PASSWORD || "",
      },
    });

    // Send the email
    await transporter.sendMail({
      to: email,
      from: process.env.EMAIL_FROM || "noreply@example.com",
      subject: "Sign in to your account",
      text: `Click the link to sign in: ${process.env.NEXTAUTH_URL}/auth/verify-request?token=${encodeURIComponent(email)}`,
      html: `<p>Click <a href="${process.env.NEXTAUTH_URL}/auth/verify-request?token=${encodeURIComponent(email)}">here</a> to sign in.</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send verification email' },
      { status: 500 }
    );
  }
}