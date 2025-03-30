import { OwnerData } from "@/contracts/domain";
import { getOwnerData } from "@/app/actions/get-owner-data.action";


export async function fetchOwnerData(): Promise<OwnerData> {
   return await getOwnerData()
}