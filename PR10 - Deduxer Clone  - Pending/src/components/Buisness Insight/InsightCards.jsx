import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import InsightCard from "./InsightCard";

function InsightCards() {

  const CardDtls = [
    {
      title: "Top 15+ Webflow Apps to Boost Your Website in 2024",
      time: "6",
      type: "Resources",
      url: "https://cdn.prod.website-files.com/6451597c62e55d5ea41332a5/669cc2f00b910bdfe09b7e15_cover%20main%20(17).png",
    },
    {
      title: "Top 15 Budget-Friendly Micro SaaS Business Ideas with High Potential",
      time: "12",
      type: "Guides",
      url: "https://cdn.prod.website-files.com/6451597c62e55d5ea41332a5/65fa0094d7c935e5d33152b9_cover%20main%20(12).webp",
    },
    {
      title: "Best Website Builder for SaaS Companies: Top 10 in 2024",
      time: "21",
      type: "Tops",
      url: "https://cdn.prod.website-files.com/6451597c62e55d5ea41332a5/66993b49e37ad8d0a9d6031d_cover%20main%20(19).png",
    },
    {
      title: "Top 25 Best B2B SaaS Websites in 2024 (curated by Deduxer)",
      time: "20",
      type: "Tops",
      url: "https://cdn.prod.website-files.com/6451597c62e55d5ea41332a5/666b2e5a5d314af0a051d0ae_cover%20main%20(17).webp",
    },
  ];
  return (
    <div className="flex flex-col gap-10">
        {CardDtls.map((Dtls,index) => <InsightCard CardDtls={Dtls} key={index}/>)}
    </div>
  );
}

export default InsightCards;
