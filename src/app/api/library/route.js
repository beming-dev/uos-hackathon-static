import { NextResponse } from "next/server";

export async function GET() {
  console.log(1);
  try {
    const response = await fetch("http://1.240.103.57:3017/library/all", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    return NextResponse.json(data); // 데이터를 JSON 응답으로 반환
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
