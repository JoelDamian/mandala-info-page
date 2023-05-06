import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./custom-footer.css";
export default function CustomFooter() {
  return (
    <div style={{marginTop: "40px"}}>
      <div>
        <div class="container-title">
          <div class="section-line"></div>
          <h2 style={{ color: "gray" }}>Contactanos</h2>
          <div class="section-line"></div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div class="manager">
              <div class="manager-name">Piero Rodriguez</div>
              <div class="manager-rol">Manager</div>
            </div>
            <img
              src="https://drive.google.com/uc?export=view&id=1WTttY--fA4Dkfwfbd_VpFM2DMYqYN15S"
              width={"250px"}
              height={"250px"}
              style={{ marginLeft: "150px" }}
            />
          </div>

          <div style={{ marginRight: "250px" }}>
            <img
              src="https://drive.google.com/uc?export=view&id=1tB-7EQ7CRSIjCWzWtYjp3Rv1TaTm9oT7"
              width={"400px"}
              height={"auto"}
            />
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "100px",
            backgroundColor: "#fb6c14",
            marginTop: "20px"
          }}
        >
          <h4 style={{color: "white"}}>Siguenos en:</h4>
          <MDBIcon fab className="fab fa-facebook-f" size="2x" color="white"/>
          <MDBIcon fab className="fa-twitter" size="2x" color="white"/>
          <MDBIcon fab className="fa-instagram" size="2x" color="white"/>
          <MDBIcon fab className="fa-youtube" size="2x" color="white"/>
        </div>
        <div className='text-center p-4' style={{fontSize: "20px", color: "#fb6c14"}}>
        © 2023 Copyright:{" "}
        <a className='text-reset fw-bold'>
          Mandala
        </a>
      </div>
      </div>
    </div>
  );
}
