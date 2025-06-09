import { HomePageResponse } from "@/type";

export const getDataHomePage: () => Promise<HomePageResponse> = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_URL_API}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_BEARER_TOKEN}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch home page data:", error);
    throw error;
  }
};
