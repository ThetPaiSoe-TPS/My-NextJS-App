// app/api/revalidate/route.ts
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidatePath("/"); // Clears cache for homepage
  return NextResponse.json({ message: "Cache cleared!" });
}
