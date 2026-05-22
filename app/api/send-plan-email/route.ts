import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { planName, price, features, studentEmail } = body;

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { success: false, error: 'Email service not configured' },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const featuresList = features
      .map((feature: string) => `<li>${feature}</li>`)
      .join('');

    const emailHtml = `
      <div style="font-family: 'Inter', Arial, sans-serif; background: #0f0f1f; color: #f2f2f5; padding: 40px;">
        <div style="max-width: 600px; margin: 0 auto; background: #1b1b2e; padding: 30px; border-radius: 12px; border: 1px solid #2a2a3e;">
          <h2 style="color: #b8f3e6; font-size: 24px; margin-bottom: 20px;">MathMentor - Plan Details</h2>
          
          <p style="font-size: 16px; margin-bottom: 20px;">Hello,</p>
          
          <p style="font-size: 16px; margin-bottom: 30px;">Here are the details of the plan you're interested in:</p>
          
          <div style="background: #13131d; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #b8f3e6;">
            <h3 style="color: #b8f3e6; font-size: 20px; margin: 0 0 10px 0;">${planName}</h3>
            <p style="color: #f2f2f5; font-size: 28px; font-weight: bold; margin: 10px 0;">$${price}/month</p>
            
            <h4 style="color: #b8f3e6; font-size: 14px; margin: 20px 0 10px 0; text-transform: uppercase;">What's Included:</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              ${featuresList}
            </ul>
          </div>
          
          <p style="font-size: 14px; color: #888; margin-bottom: 20px;">To proceed with booking or to discuss this plan further, please reply to this email or visit our website.</p>
          
          <p style="font-size: 14px; color: #888; margin-bottom: 0;">Best regards,<br><strong>MathMentor Team</strong></p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: 'MathMentor <onboarding@resend.dev>',
      to: 'kalukaluokomba@gmail.com',
      replyTo: studentEmail || 'noreply@mathmentor.com',
      subject: `Plan Inquiry: ${planName}`,
      html: emailHtml,
    });

    return Response.json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
