'use client'
import { Calendar } from "@/ui/Calendar";
import { Summary } from "@/ui/Summary";
import { useState } from "react";

export function Reservation(){
     const getStartOfToday = () => {
        const now = new Date()
        return new Date(now.getFullYear(), now.getMonth(), now.getDate())
    }
      const [selectedDate, setSelectedDate] = useState<Date | null>(() => getStartOfToday())
    const [selectedSlots, setSelectedSlots] = useState<string[]>([])
    return(
        <section className="bg-red-200 h-screen w-full flex flex-row items-start justify-center gap-10 p-10 ">
      <Calendar
                    selectedDate={ selectedDate}
                    selectedSlots={selectedSlots}
                    courtName={"wa"}
                    onSelectedDateChange={setSelectedDate}
                    onSelectedSlotsChange={setSelectedSlots}
                />
     <Summary  selectedDate={ selectedDate}
                    selectedSlots={selectedSlots}
                    courtName={"wa"}
                    slotPrice={10}
                    onClear={() => {
                        setSelectedDate(null);
                        setSelectedSlots([]);
                    }}
                />
        </section>
    )
}