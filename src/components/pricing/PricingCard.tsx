import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./PricingCard.module.css"; // Importing the CSS module

type Plan = {
  id: number;
  title: string;
  monthlyPrice: string;
  annualPrice: string;
  features: string[];
};

type PricingCardProps = {
  billingCycle: string;
  plan: Plan;
};

const PricingCard = ({ billingCycle, plan }: PricingCardProps) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles.card}>
        <h2 className={styles["card-header"]}>{plan.title}</h2>
        <h1 className={styles["card-title"]}>
          {billingCycle === "Monthly" ? plan.monthlyPrice : plan.annualPrice}
          <span className={styles["card-price"]}>
            {billingCycle === "Monthly" ? "/mo" : "/yr"}
          </span>
        </h1>

        {/* Display the features */}
        <div className={styles["card-features"]}>
          {plan.features.map((feature, index) => (
            <p key={index} className={styles["feature-item"]}>
              <span className={styles["feature-check"]}>
                <FaCheck className="w-3 h-3" />
              </span>
              {feature}
            </p>
          ))}
        </div>

        {/* Join Now Button */}
        <button className={styles["join-button"]} aria-label={`Join ${plan.title} Plan`}>
          Join Now
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
