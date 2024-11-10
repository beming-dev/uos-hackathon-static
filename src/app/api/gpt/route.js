import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  try {
    const body = await req.json();
    const { prompt } = body;

    const apiKey = process.env.OPENAI_API_KEY;

    const openai = new OpenAI({
      apiKey,
    });

    const resposnse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const data = resposnse.choices[0].message.content;

    return NextResponse.json(data); // 데이터를 JSON 응답으로 반환
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
