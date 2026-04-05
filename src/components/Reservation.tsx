'use client'
import { Calendar } from "@/ui/Calendar";
import { useState } from "react";

export function Reservation(){
     const getStartOfToday = () => {
        const now = new Date()
        return new Date(now.getFullYear(), now.getMonth(), now.getDate())
    }
      const [selectedDate, setSelectedDate] = useState<Date | null>(() => getStartOfToday())
    const [selectedSlots, setSelectedSlots] = useState<string[]>([])
    return(
        <section className="bg-red-200 h-screen w-full">
      <Calendar
                    selectedDate={ selectedDate}
                    selectedSlots={selectedSlots}
                    courtName={"wa"}
                    onSelectedDateChange={setSelectedDate}
                    onSelectedSlotsChange={setSelectedSlots}
                />
        </section>
    )
}