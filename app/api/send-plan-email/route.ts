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
      <div style="font-family: 'Inter', Arial, sans-serif; background: rgb(6, 7, 9); color: rgb(236, 239, 242); padding: 40px;">
  <div style="max-width: 600px; margin: 0 auto; background: oklch(0.17 0.008 260 / 0.95); padding: 30px; border-radius: 12px; border: 1px solid rgb(33, 36, 41);">
    
    <h2 style="color: rgb(0, 199, 122); font-size: 24px; margin-bottom: 20px;">
      MathMentor - Selected Plan Details
    </h2>

    <p style="font-size: 16px; margin-bottom: 20px; color: rgb(236, 239, 242);">
      Hello MathTutor
    </p>

    <p style="font-size: 16px; margin-bottom: 30px; color: rgb(140, 143, 149);">
      Here are the details of the plan I am interested in:
    </p>

    <div style="background: rgb(13, 16, 19); padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid rgb(0, 199, 122);">
      
      <h3 style="color: rgb(0, 199, 122); font-size: 20px; margin: 0 0 10px 0;">
        ${planName}
      </h3>

      <p style="color: rgb(236, 239, 242); font-size: 28px; font-weight: bold; margin: 10px 0;">
        $${price}/month
      </p>

      <h4 style="color: rgb(0, 199, 122); font-size: 14px; margin: 20px 0 10px 0; text-transform: uppercase;">
        What's Included:
      </h4>

      <ul style="list-style: none; padding: 0; margin: 0;">
        ${featuresList}
      </ul>
    </div>

    <p style="font-size: 14px; color: rgb(110, 114, 120); margin-bottom: 20px;">
      To proceed with booking or discussing this plan further, please reply to this email.
    </p>

    <p style="font-size: 14px; color: rgb(110, 114, 120); margin-bottom: 0;">
      Best regards,<br>
      <strong style="color: rgb(236, 239, 242);">MathMentor Team</strong>
    </p>

  </div>
</div>
    `;

    await resend.emails.send({
      from: 'MathMentor <onboarding@resend.dev>',
      to: 'kalukaluokomba@gmail.com',
      replyTo: studentEmail || 'noreply@mathmentor.com',
      subject: `Plan Inquiry: ${planName}`,
      html: emailHtml,

      headers: {
        'X-Student-Email': studentEmail,
        'X-Plan': planName,
      },
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
