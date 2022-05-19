import { Button, Table } from "react-bootstrap";
import React from "react";
import EditHoursModal from "./modals/EditHoursModal";
import formatDate from "../../utilities/formdate/formDate";

export default function UsersTable({ data = [], name }) {
  console.log(data)
  return (<>
  <h3
        className="fw-bold mt-3 fs-5 bg-white py-3 px-3"
        style={{ marginBottom: "-1px", margin: "0 1.5px" }}
      >
        {name}
      </h3>

      <div class="scrollme mt-3" style={{ maxHeight: "400px" }}>
      
      
      <Table bordered hover size="sm" className="rounded">
        <thead>
          <tr>
            <th>Przerwa</th>
            <th>Imie</th>
            <th>Nazwisko</th>
            <th>Data przyjścia</th>
            <th>Data wyjścia</th>
            <th>Stanowisko</th>
            <th>Akcje</th>
          </tr>
        </thead>
        {data.map((x) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>
                    <Button variant="danger my-2">
                      <p style={{ marginBottom: "-5px" }}>23 min na przerwie</p>
                      <i class="fa-solid fa-play me-2  text-white"></i> Wróć z
                      przerwy{" "}
                    </Button>
                  </td>

                  <td className="fw-bold ">{x.OPR_Imie}</td>
                  <td>{x.OPR_Nazwisko}</td>
                  <td> {formatDate(new Date(x.CZP_DataPrzyjscia)) }</td>
                  <td>{x.CZP_DataWyjscia !== null && formatDate(new Date(x.CZP_DataWyjscia))}</td>
                  <td>{x.SPO_Nazwa}</td>
                  <td>
                    <EditHoursModal />
                    <Button variant="success mx-2 my-2">
           
                      <i class="fa-solid fa-arrow-right-from-bracket text-white"></i>{" "}
                      Wyloguj{" "}
                    </Button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </Table>
    </div>
  </>
   
  );
}
