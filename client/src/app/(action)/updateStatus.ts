import { updateUBallanceOnGoing } from "@/db/models/uco"

export const updateOngoing = async (id: string) => {
    await updateUBallanceOnGoing(id)
}