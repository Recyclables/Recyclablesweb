import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data, e) => {
    const TOKEN = process.env.TB_TOKEN;
    const CID = process.env.T_CHATID;
    e.preventDefault();
    let rawtext = `=== Website contact form message ===
    \nName: ${data.Name}
    Email: ${data.Email}
    Mobile: ${data.Mobile}
    Message: ${data.Message}`;
    let encodedtext = encodeURI(rawtext);
    axios.post(
      `https://api.telegram.org/${TOKEN}/sendMessage?chat_id=${CID}&text=${encodedtext}`
    );
    setMessage("Your message has been sent.");
    reset();
  };

  return (
    <>
      <div className="contact">
        <div className="container">
          <div
            className="row contact-row"
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <div className="col">
              <div className="contact-text-container">
                <h1>
                  Questions or Suggestions? <br /> Send it to us!
                </h1>
                <p>
                  For a faster response, please contact our helpbot on Telegram
                  <mark> @RecyclablesHelpBot</mark>.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="contact-form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="Name*"
                    name="Name"
                    ref={register({ required: true, maxLength: 40 })}
                  />
                  {errors.Name && errors.Name.type === "required" && (
                    <p className="errorMsg">Name is required.</p>
                  )}
                  {errors.Name && errors.Name.type === "maxLength" && (
                    <p className="errorMsg">Maximum 40 characters.</p>
                  )}
                  <input
                    type="text"
                    placeholder="Email*"
                    name="Email"
                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                  />
                  {errors.Email && errors.Email.type === "pattern" && (
                    <p className="errorMsg">Email is not valid.</p>
                  )}
                  {errors.Email && errors.Email.type === "required" && (
                    <p className="errorMsg">Email is required.</p>
                  )}
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    name="Mobile"
                    ref={register({ minLength: 8, maxLength: 8 })}
                  />
                  {errors.Mobile && errors.Mobile.type === "maxLength" && (
                    <p className="errorMsg">Maximum 8 digits.</p>
                  )}
                  {errors.Mobile && errors.Mobile.type === "minLength" && (
                    <p className="errorMsg">Minimum 8 digits.</p>
                  )}
                  <textarea
                    placeholder="Your message*"
                    name="Message"
                    ref={register({ required: true, min: 1 })}
                  />
                  {errors.Message && errors.Message.type === "required" && (
                    <p className="errorMsg">Message is required.</p>
                  )}
                  <input type="submit" />
                  <p style={{ color: "#195f97" }}>{message}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
