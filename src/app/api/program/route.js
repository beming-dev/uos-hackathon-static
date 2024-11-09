import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const num = searchParams.get("num");

    if (num) {
      const response = await fetch(`http://1.240.103.57:3017/program/${num}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return NextResponse.json(data); // 데이터를 JSON 응답으로 반환
    } else {
      const response = await fetch("http://1.240.103.57:3017/program/get/all", {
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
      return NextResponse.json(data); // 데이터를 JSON 응답으로 반환
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
