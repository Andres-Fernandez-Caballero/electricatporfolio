import { getOwnerData } from "@/app/actions/get-owner-data.action";

export async function GET() {

  const onwerData = await getOwnerData();

  return Response.json({
    message: "ok",
    data: onwerData
  })
}