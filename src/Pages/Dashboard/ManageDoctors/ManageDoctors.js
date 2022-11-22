import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://doctors-portal-server-bice-five.vercel.app/doctors",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleDeleteDoctor = (id) => {
    fetch(`https://doctors-portal-server-bice-five.vercel.app/doctors/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Deleted successfully");
          refetch();
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl">Manage Doctors: {doctors.length} </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors &&
                doctors.map((doctor, i) => (
                  <tr key={doctor._id}>
                    <th>{i + 1}</th>
                    <th>
                      <div className="avatar">
                        <div className="w-14 rounded-full">
                          <img src={doctor.image} alt="" />
                        </div>
                      </div>
                    </th>
                    <td>{doctor.name}</td>
                    <td>{doctor.specialty}</td>
                    <td>
                      <label
                        htmlFor="confirmation-modal"
                        onClick={() => setDeletingDoctor(doctor)}
                        className="btn btn-xs"
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure want to delete ${deletingDoctor.name}?`}
          message={`if you delete ${deletingDoctor.name}, can not be undone.`}
          closeModal={closeModal}
          handleDeleteDoctor={handleDeleteDoctor}
          modalData={deletingDoctor}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
