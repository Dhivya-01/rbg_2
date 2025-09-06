import React from "react";
import { CircularTestimonials } from '@/components/ui/circular-testimonials';

const testimonials = [
  {
    quote:
      "When critical fields or columns are missing, the system pauses and routes the document for manual review.This ensures that no important data slips through the cracks, combining the speed of AI with the accuracy of human checks.",
    name: "Red – Human Review Needed",
    designation: "AI flags uncertain files for human validation",
    src:
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1756969300/red_tlljxr.png",
  },
  {
    quote:
      "When all conditions are met and verified, MLloOps auto-approves the document and makes it ready for export.This eliminates delays, reduces manual effort, and delivers clean, structured data you can trust.",
    name: "Green – Auto-Approved",
    designation: "High-confidence files are instantly processed",
    src:
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1756969330/green_dt0ney.png",
  },
  {
    quote:
      "If errors or failed conditions are detected, MLloOps rejects the file to maintain quality and compliance.This protects your downstream workflows, ensuring only accurate and usable data flows into your business systems.",
    name: "Reject – System Auto-Reject",
    designation: "Faulty or incomplete data is stopped automatically",
    src:
      "https://res.cloudinary.com/datwcxi7y/image/upload/v1756969270/reject_lvitak.png",
  },
];

export const Demo = () => (
  <section>
    {/* Light testimonials section */}
    <div className="bg-[#f7f7fa] p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1456px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#0a0a0a",
            designation: "#454545",
            testimony: "#171717",
            arrowBackground: "#141414",
            arrowForeground: "#f1f1f7",
            arrowHoverBackground: "#00A6FB",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div>

    {/* Dark testimonials section */}
    
   
  </section>
);



export default Demo