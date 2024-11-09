// "use client";
// import React, { useState } from "react";

// const plans = [
//   {
//     id: 1,
//     title: "STANDARD",
//     monthlyPrice: "$40",
//     annualPrice: "$400",
//     features: [
//       "Access to all gym equipment",
//       "Group fitness classes",
//       "Personal locker",
//     ],
//   },
//   {
//     id: 2,
//     title: "STANDARD",
//     monthlyPrice: "$60",
//     annualPrice: "$600",
//     features: [
//       "Access to all gym equipment",
//       "Group fitness classes",
//       "Personal locker",
//     ],
//   },
//   {
//     id: 3,
//     title: "PREMIUM",
//     monthlyPrice: "$80",
//     annualPrice: "$800",
//     features: [
//       "24/7 gym access",
//       "Personal trainer sessions",
//       "Free guest passes",
//     ],
//   },
//   {
//     id: 4,
//     title: "ELITE",
//     monthlyPrice: "$100",
//     annualPrice: "$1000",
//     features: [
//       "All premium benefits",
//       "Customized diet plan",
//       "Monthly health check-ups",
//     ],
//   },
// ];

// const Pricing = () => {
//   const [billingCycle, setBillingCycle] = useState("Monthly");

//   return (
//     <section className="bg-stone-950 text-white body-font overflow-hidden">
//      <div className="flex mx-auto border-2 border-secondary ring-primary shadow-lg shadow-secondary/60 rounded overflow-hidden mt-6">
//   {["Monthly", "Annually"].map((cycle) => (
//     <button
//       key={cycle}
//       className={`py-1 px-4 transition duration-300 ease-in-out ${
//         billingCycle === cycle
//           ? "bg-secondary text-white"
//           : "text-white hover:bg-secondary hover:text-white"
//       }`}
//       onClick={() => setBillingCycle(cycle)}
//     >
//       {cycle}
//     </button>
//   ))}
// </div>

//     </section>
//   );
// };

// export default Pricing;
