import React from "react";
import BaseInput from "../base-input";


export default function EditHoursModal() {
  return (
    <>
      <div className="modal-overlay"> </div>

      <div className="modal-container">
        <button className="modal-close">close</button>

        <div className="modal-header">Edycja czasu pracy</div>
   
    <div className="modal-body">
    <div class="edit_hours-row">
          <div class="edit_hours-column"><BaseInput/></div>
          <div class="edit_hours-column"><BaseInput/></div>
        </div>
    <div class="edit_hours-row">
          <div class="edit_hours-column"><BaseInput/></div>
          <div class="edit_hours-column"><BaseInput/></div>
        </div>
    <div class="edit_hours-row">
          <div class="edit_hours-column"><BaseInput/></div>
          <div class="edit_hours-column"><BaseInput/></div>
        </div>
    </div>
       

        <div className="modal-footer">Footer</div>
        <button className="btn btn-primary">Dalej</button>
      </div>
    </>
  );
}
