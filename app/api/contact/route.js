// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const firstName = formData.get("firstName");
//     const lastName = formData.get("lastName");
//     const email = formData.get("email");
//     const phone = formData.get("phone");
//     const productIdea = formData.get("productIdea");

//     const { data, error } = await resend.emails.send({
//       from: `Support <${process.env.EMAIL_USER}>`,
//       to: "bismashahzadali@gmail.com", // Replace with your email
//       subject: `New Contact Form Submission from ${firstName} ${lastName}`,
//       reply_to: email,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong> ${productIdea}</p>
//       `,
//     });

//     if (error) {
//       console.error("Resend error:", error);
//       return NextResponse.json(
//         { error: "Failed to send email" },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Detailed error:", error);
//     return NextResponse.json(
//       { error: error.message || "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const productIdea = formData.get("productIdea");

    await resend.emails.send({
      from: `Support <${process.env.EMAIL_USER}>`,
      to: email, // Replace with your email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      reply_to: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${productIdea}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
