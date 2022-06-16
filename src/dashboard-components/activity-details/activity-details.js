import React from "react";
import "../activity-details/activity-details.css";
import { ActivityDetailsCard } from "./activity-details-card";

const ActivityDetails = ({ data }) => {
  return (
    data?.length > 0 &&
    data.map((item) => {
      return (
        <ActivityDetailsCard
          name={item.name}
          date={item.date}
          status={item.status}
          title={item.title}
        />
      );
    })
  );
};

export default ActivityDetails;
