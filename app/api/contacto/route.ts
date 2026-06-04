import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  const { nombre, empresa, email, mensaje } = await req.json();

  if (!nombre || !empresa || !email || !mensaje) {
    return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 });
  }

  // Guardar en Supabase
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

  const { error: dbError } = await supabase.from("solicitudes_upgrade").insert({
    empresa_nombre:  empresa,
    user_nombre:     nombre,
    plan_solicitado: "contacto_landing",
    estado:          "pendiente",
    notas:           `Email: ${email}\n\n${mensaje}`,
  });

  if (dbError) console.error("Supabase error:", dbError.message);

  // Enviar email
  const resend = new Resend(process.env.RESEND_API_KEY);
  const destino = process.env.CONTACT_EMAIL ?? "admin@vector.edu.co";

  const { data, error } = await resend.emails.send({
    from: "VECTOR Landing <noreply@vectordatastudio.lat>",
    to: destino,
    replyTo: email,
    subject: `Nuevo contacto: ${nombre} — ${empresa}`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;background:#f8fafc">
        <div style="background:#fff;border-radius:16px;padding:32px;border:1px solid #e2e8f0">
          <div style="margin-bottom:24px">
            <span style="font-size:18px;font-weight:900;letter-spacing:2px;color:#2B4EFF">VECTOR</span>
            <span style="font-size:12px;font-weight:500;color:#94a3b8;letter-spacing:3px;margin-left:8px">DATA STUDIO</span>
          </div>
          <h1 style="font-size:20px;font-weight:800;color:#0D0D0D;margin:0 0 20px">Nuevo mensaje de contacto</h1>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:100px">Nombre</td><td style="padding:8px 0;font-weight:600;font-size:14px">${nombre}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px">Empresa</td><td style="padding:8px 0;font-weight:600;font-size:14px">${empresa}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px">Email</td><td style="padding:8px 0;font-weight:600;font-size:14px"><a href="mailto:${email}" style="color:#2B4EFF">${email}</a></td></tr>
          </table>
          <div style="background:#f8fafc;border-radius:10px;padding:16px;font-size:14px;line-height:1.7;color:#374151">
            ${mensaje.replace(/\n/g, "<br>")}
          </div>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0">
          <p style="font-size:11px;color:#cbd5e1;margin:0">
            VECTOR Data Studio · vectordatastudio.lat
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.log("Email enviado:", data?.id);
  return NextResponse.json({ ok: true });
}
