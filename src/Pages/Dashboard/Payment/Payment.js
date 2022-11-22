import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigation } from "react-day-picker";
import { useLoaderData } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import CheckOut from "./CheckOut/CheckOut";

const stripePromise = loadStripe(
  "pk_test_51M6qkQHHk1YHi0ln2HODmq2HzLXIfGoHE4WfHz4cTQ0nPgmQnYeDPUgmGYGbGgshdya5do9i1hEPse2fnXyrlYba00rsRCBxyR"
);

const Payment = () => {
  const booking = useLoaderData();
  // const navigation = useNavigation();
  // if (navigation.state === "loading") {
  //   return <Loader></Loader>;
  // }

  const { price, treatment, slot, appointmentDate } = booking;

  return (
    <div>
      <h1 className="text-3xl">Payment for {treatment}</h1>
      <p className="text-xl">
        Please pay <span className="font-bold">${price} </span> for appointment
        on {appointmentDate}{" "}
      </p>
      <div className="w-96 my-6 border border-slate-600 p-6 rounded-xl">
        <Elements stripe={stripePromise}>
          <CheckOut booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
