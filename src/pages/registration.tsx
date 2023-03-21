import React, { useEffect, useState } from "react";
import Styles from "../styles/registration.module.scss";
import Dialog from "@mui/material/Dialog";

const Registration = () => {
  const [name, setname] = useState("");
  const [city, setCity] = useState("");
  const [occupation, setOccupation] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [experience, setExperience] = useState("No");
  const [membersCount, setMembersCount] = useState("");
  const [contributionAmount, setContributionAmount] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (otp === "1234") {
      let obj = {
        name: name,
        city: city,
        occupation: occupation,
        mobileNumber: mobileNumber,
        experience: experience,
        membersCount: membersCount,
        contributionAmount: contributionAmount,
      };
      handleModal();
    }
  };
  const handleModal = () => {
    setOpen(!open);
    setTimeout(() => setOpen(false), 2000);
  };

  const Modal = () => {
    return (
      <div className={Styles.modal_container}>
        <Dialog open={open} onClose={handleModal}>
          <div style={{ textTransform: "capitalize" }}>
            REGISTERD SUCCESSFULLY
          </div>
        </Dialog>
      </div>
    );
  };

  return (
    <div className={Styles.container}>
      <h1 className="text-center pt-4 mt-5 fw-600">
        Join Syon Chit funds micro bidding platform{" "}
      </h1>
      <form>
        <div className="row mt-4 pt-5 text-center">
          <div className="col-lg-4">
            <div className={Styles.input_felx}>
              <label htmlFor="name">
                Name <span>*</span>
              </label>
              <input
                onChange={(e) => setname(e.target.value)}
                type="text"
                maxLength={25}
                id="name"
                name="name"
                required
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className={Styles.flex_box}>
              <div className={Styles.input_felx}>
                <label htmlFor="name">
                  Age <span>*</span>
                </label>
                <div className={Styles.age_container}>
                  <input
                    onChange={(e) => setCity(e.target.value)}
                    id="name"
                    name="name"
                    required
                    type="number"
                  />
                </div>
              </div>
              <div className={Styles.input_felx}>
                <label htmlFor="name">
                  Gender <span>*</span>
                </label>
                <div className={Styles.age_container}>
                  <select
                    onChange={(e) => setOccupation(e.target.value)}
                    name="Occupation"
                    id="Occupation"
                    defaultValue={"Male"}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={Styles.input_felx}>
              <label htmlFor="name">
                City <span>*</span>
              </label>
              <input
                onChange={(e) => setCity(e.target.value)}
                id="name"
                name="name"
                required
                type="text"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className={Styles.input_felx}>
              <label htmlFor="name">
                Occupation <span>*</span>
              </label>
              <select
                onChange={(e) => setOccupation(e.target.value)}
                name="Occupation"
                id="Occupation"
                defaultValue={""}
              >
                <option value="Salaried">Salaried</option>
                <option value="Student">Student</option>
                <option value="Self Employed">Self Employed</option>
                <option value="House Wife">House Wife</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={Styles.input_felx}>
              <label htmlFor="mobile_number">
                Mobile Number <span>*</span>
              </label>
              <div className={Styles.otp_container}>
                <input
                  onChange={(e) => setMobileNumber(e.target.value)}
                  type="tel"
                  maxLength={10}
                  pattern="^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$"
                  id="mobile_number"
                  name="mobile_number"
                  required
                />
                <button type="button">Send Otp</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className={Styles.input_felx}>
              <label htmlFor="otp">
                OTP <span>*</span>
              </label>
              <input
                onChange={(e) => setOtp(e.target.value)}
                id="otp"
                name="otp"
                required
                maxLength={4}
                type="tel"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className={Styles.input_felx}>
              <label htmlFor="Experience">
                Experience in Offline Chit ? <span>*</span>
              </label>
              <select
                onChange={(e) => setExperience(e.target.value)}
                name="Experience"
                id="Experience"
                defaultValue={"No"}
              >
                <option value="Yes">Yes</option>
                <option value="Have seen someone close doing it">Have seen someone close doing it</option>
                <option value="have only heard about itNo">have only heard about it</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          {experience === "Yes" && (
            <>
              <div className="col-lg-4">
                <div className={Styles.input_felx}>
                  <label htmlFor="members">How many members were there ?</label>
                  <input
                    onChange={(e) => setMembersCount(e.target.value)}
                    id="member"
                    name="member"
                    required
                    type="text"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className={Styles.input_felx}>
                  <label htmlFor="amount">
                    What was the contribution amount
                  </label>
                  <input
                    onChange={(e) => setContributionAmount(e.target.value)}
                    id="amount"
                    name="amount"
                    required
                    type="tel"
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <div className={Styles.btn_container}>
          <button
            type="button"
            onClick={handleSubmit}
            className={Styles.register_btn}
          >
            Register
          </button>
        </div>
      </form>
      <Modal></Modal>
    </div>
  );
};

export default Registration;
