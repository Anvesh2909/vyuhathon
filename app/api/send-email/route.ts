import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { email, name } = await req.json();

        const transporter = nodemailer.createTransport({
            host: "smtp.titan.email",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER!,
                pass: process.env.EMAIL_PASS!,
            },
        });
        const mailOptions = {
            from: `"Vyuhathon" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Registration Confirmed: Welcome to Vyuhathon!",
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        border: 1px solid #e0e0e0;
                        border-radius: 5px;
                    }
                    .header {
                        background: linear-gradient(to right, #3b82f6, #1d4ed8);
                        padding: 20px;
                        text-align: center;
                        color: white;
                        border-radius: 5px 5px 0 0;
                    }
                    .content {
                        padding: 20px;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 20px;
                        padding-top: 20px;
                        border-top: 1px solid #e0e0e0;
                        font-size: 12px;
                        color: #666;
                    }
                    .button {
                        background-color: #3b82f6;
                        color: black;
                        padding: 10px 20px;
                        text-decoration: none;
                        border-radius: 5px;
                        display: inline-block;
                        margin: 20px 0;
                    }
                    .timeline {
                        margin: 20px 0;
                        padding: 15px;
                        background-color: #f9fafb;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Welcome to Vyuhathon!</h1>
                    </div>
                    <div class="content">
                        <h2>Hello ${name}!</h2>
                        <p>Thank you for registering for Vyuhathon. Your registration has been successfully received!</p>
                        
                        <p>Here are some important details to keep in mind:</p>
                        
                        <div class="timeline">
                            <strong>Key Dates:</strong>
                            <ul>
                                <li>Registration Deadline: TBD</li>
                                <li>Team Formation Deadline: TBD</li>
                                <li>Hackathon Kick-off: TBD</li>
                            </ul>
                        </div>
                        
                        <p>We'll be sending you more information about the event schedule, themes, and resources in the coming days.</p>
                        
                        <p>If you have any questions or need assistance, please don't hesitate to contact us at <a href="mailto:info@vyhack.tech">info@vyhack.tech</a>.</p>
                        
                        <a href="https://vyhack.tech" class="button">Visit Hackathon Portal</a>
                        
                        <p>Get ready to innovate, collaborate, and create!</p>
                        
                        <p>Best regards,<br>The Vyuhathon Team</p>
                    </div>
                    <div class="footer">
                        <p>This email was sent to ${email}. If you did not register for this event, please disregard this email.</p>
                        <p>&copy; 2025 Vyuhathon. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true, messageId: info.messageId });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
}