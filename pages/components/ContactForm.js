import axios from "axios";
import styles from "../../styles/ContactForm.module.css";
import { useState } from "react";

const buttonText = {
  LOADING: "Loading...",
  IDLE: "Submit",
  SUCCESS: "Complete",
  ERROR: "Uh oh",
};

const projectTypes = ["Design", "Example", "Other"];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const contact = async (e) => {
    setState("LOADING");
    setErrorMessage(null);
    e.preventDefault();

    let data = {
      name,
      email,
      phone,
      projectType,
      location,
      description,
    };

    try {
      console.log(JSON.stringify(data));
      const response = await axios.post("/api/contact", data);
      console.log(response);
      setState("SUCCESS");
    } catch (postError) {
      setErrorMessage(
        `Oops, something went wrong... Email me at avery@averyellisinteriors.com.`
      );
      console.log(postError);
      setState("ERROR");
    }
  };

  return (
    <div className="w-full max-w-md mb-28">
      <div className="font-light tracking-[1px] text-center mt-20 mb-8">
        To inquire about a project, please fill out the below.
      </div>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
            name="name"
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            name="email"
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            onChange={(e) => {
              setPhone(e.currentTarget.value);
            }}
            name="phone"
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="projectType">Project type</label>
          <select
            id="projectType"
            onChange={(e) => {
              setProjectType(e.currentTarget.value);
            }}
            name="projectType"
            className={styles.inputField}
          >
            <option>Select</option>
            {projectTypes.map((pt) => (
              <option value={pt}>{pt}</option>
            ))}
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            onChange={(e) => {
              setLocation(e.currentTarget.value);
            }}
            name="location"
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            rows="10"
            onChange={(e) => {
              setDescription(e.currentTarget.value);
            }}
            name="description"
            className={styles.inputField}
          />
        </div>

        <button
          className={styles.submit}
          onClick={(e) => {
            contact(e);
          }}
          disabled={state === "LOADING"}
        >
          {buttonText[state]}
        </button>
        {state === "ERROR" && (
          <p className={styles.notification}>{errorMessage}</p>
        )}
        {state === "SUCCESS" && (
          <p className={styles.notification}>Thank you!</p>
        )}
      </form>
    </div>
  );
}
