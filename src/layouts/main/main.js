import React, { useEffect, useState } from "react";
import AddEmployerModal from "../../components/add-employer-modal";
import EditHoursModal from "../../components/edit-hours-modal/editHoursModal";
import Navigation from "../../components/navigation";
import UsersTable from "../../components/users-table";
import axios from "axios";

export default function Main() {
  const [users, setusers] = useState({})
  
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users`)
      .then(function (response) {
      
        setusers(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  return (
    <>
      {/* <AddEmployerModal/> */}
      {/* <EditHoursModal/> */}

      <div className="mt-2">
        <Navigation />
        <Navigation />
      </div>

      <UsersTable data={users.logged} name="Zalogowani" />
      <UsersTable data={users.logout} name="Wylogowani"/>
    </>
  );
}
