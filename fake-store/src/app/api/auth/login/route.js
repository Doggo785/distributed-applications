import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email et mot de passe requis" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Mot de passe trop court" },
        { status: 401 }
      );
    }

    // Mock authentication — accept any valid-looking credentials
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
      Buffer.from(JSON.stringify({ email, name: email.split("@")[0] })).toString(
        "base64url"
      ) +
      ".mock-signature-fake-store";

    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json(
      { error: "Corps de requête invalide" },
      { status: 400 }
    );
  }
}
