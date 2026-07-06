import React from 'react'
import { Pencil, Trash2 } from "lucide-react"; 

function SummarySection() {
  return (
     <section>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold text-gray-900">
             Edit Summary
            </h2>

          </div>

          <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm">
            <p className="leading-8 text-gray-700">
        
            </p>
          </div>
          <button className='bg-accent text-background'>Save</button>
        </section>
  )
}

export default SummarySection
