import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadCloudinary from "../../utils/uploadCloudinary";
const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: "",
    nid: "",
    bmdcRegNumber: "",
    qualifications: [
      { startDate: "", endDate: "", degree: "", university: "" },
    ],
    experiences: [{ startDate: "", endDate: "", position: "", hospital: "" }],
    timeSlots: [{ day: "", startTime: "", endTime: "" }],
    about: "",
    photo: null,
  });
  const handleUpdateFormInputchange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const uploadedFile = await uploadCloudinary(file);
    setFormData({ ...formData, photo: uploadedFile?.url });
  };
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
  };

  //reuaable function for add new item
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  //reuaable function for delete item
  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }));
  };

  //reusable input change function
  const handleReusableInputChange = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];
      updateItems[index][name] = value;
      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  //Qualification onChange, OnClick, addnew, delete functionality
  const addNewQualification = (e) => {
    e.preventDefault();
    addItem("qualifications", {
      startDate: "",
      endDate: "",
      degree: "",
      university: "",
    });
  };
  const handleQualificationChange = (event, index) => {
    event.preventDefault();
    handleReusableInputChange("qualifications", index, event);
  };

  const handleDeleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  //Experience onChange, OnClick, addnew, delete functionality
  const addNewExperience = (e) => {
    e.preventDefault();
    addItem("experiences", {
      startDate: "",
      endDate: "",
      position: "",
      hospital: "",
    });
  };
  const handleExperienceChange = (event, index) => {
    event.preventDefault();
    handleReusableInputChange("experiences", index, event);
  };

  const handleDeleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };
  //Timeslots onChange, OnClick, addnew, delete functionality
  const addNewTimeslot = (e) => {
    e.preventDefault();
    addItem("timeSlots", {
      day: "",
      startTime: "",
      endTime: "",
    });
  };
  const handleTimeslotChange = (event, index) => {
    event.preventDefault();
    handleReusableInputChange("timeSlots", index, event);
  };

  const handleDeleteTimeslot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] mb-5">
        Profile Information
      </h2>
      <form action="">
        <div className="mb-5">
          <p className="form_label">Fullname</p>
          <input
            type="text"
            className="form_input"
            name="fullName"
            value={formData.fullName}
            placeholder="Enter fullname"
            onChange={handleUpdateFormInputchange}
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Email</p>
          <input
            type="email"
            className="form_input"
            name="email"
            value={formData.email}
            placeholder="example@mail.com"
            onChange={handleUpdateFormInputchange}
            readOnly
            disabled={true}
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Phone</p>
          <input
            type="number"
            className="form_input"
            name="phone"
            value={formData.phone}
            placeholder="Enter phone"
            onChange={handleUpdateFormInputchange}
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Bio</p>
          <input
            type="text"
            className="form_input"
            name="bio"
            value={formData.bio}
            placeholder="Enter your bio"
            onChange={handleUpdateFormInputchange}
            maxLength={150}
          />
        </div>
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form_label">Gender</p>
              <select
                className="form_input py-3.5 pr-5"
                name="gender"
                value={formData.gender}
                onChange={handleUpdateFormInputchange}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="form_label">Specialization</p>
              <select
                className="form_input py-3.5 pr-5"
                name="specialization"
                value={formData.specialization}
                onChange={handleUpdateFormInputchange}
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="orthopedic">Orthopedic</option>
              </select>
            </div>
            <div>
              <p className="form_label">Ticket price</p>
              <input
                type="number"
                className="form_input"
                name="ticketPrice"
                value={formData.ticketPrice}
                placeholder="0.00"
                onChange={handleUpdateFormInputchange}
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="grid grid-cols-2 gap-5 mb-[30px]">
            <div>
              <p className="form_label">NID number</p>
              <input
                type="text"
                className="form_input"
                name="nid"
                value={formData.nid}
                placeholder="Enter your NID number"
                onChange={handleUpdateFormInputchange}
              />
            </div>
            <div>
              <p className="form_label">BMDC Reg. number</p>
              <input
                type="text"
                className="form_input"
                name="bmdcRegNumber"
                value={formData.bmdcRegNumber}
                placeholder="Enter your BMDC number"
                onChange={handleUpdateFormInputchange}
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <p className="form_label flex items-center justify-between">
            Qualifications{" "}
            <button
              onClick={addNewQualification}
              className="py-1 px-4 bg-slate-500 font-normal rounded-md text-white text-[14px] cursor-pointer flex items-center gap-3"
            >
              Add New Qualification
            </button>
          </p>
          {formData.qualifications?.map((item, index) => (
            <div className="" key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_label">Start Date</p>
                    <input
                      type="date"
                      name="startDate"
                      value={item.startDate}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">End Date</p>
                    <input
                      type="date"
                      name="endDate"
                      value={item.endDate}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Degree</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      placeholder="Degree"
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">University</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      placeholder="University"
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-[30px] mt-3">
                  <button
                    onClick={(e) => handleDeleteQualification(e, index)}
                    className="bg-red-600 p-2 rounded-full text-white text-[18px] cursor-pointer"
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-5">
          <p className="form_label flex items-center justify-between">
            Experiences{" "}
            <button
              onClick={addNewExperience}
              className="py-1 px-4 bg-slate-500 font-normal rounded-md text-white text-[14px] cursor-pointer flex items-center gap-3"
            >
              Add New Experience
            </button>
          </p>
          {formData.experiences?.map((item, index) => (
            <div className="" key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_label">Start Date</p>
                    <input
                      type="date"
                      name="startDate"
                      value={item.startDate}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">End Date</p>
                    <input
                      type="date"
                      name="endDate"
                      value={item.endDate}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Position</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      placeholder="Position"
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Hospital</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      placeholder="Enter Hospital"
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-[30px] mt-3">
                  <button
                    onClick={(e) => handleDeleteExperience(e, index)}
                    className="bg-red-600 p-2 rounded-full text-white text-[18px] cursor-pointer"
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-5">
          <p className="form_label flex items-center justify-between">
            Timeslots{" "}
            <button
              onClick={(e) => addNewTimeslot(e)}
              className="py-1 px-4 bg-slate-500 font-normal rounded-md text-white text-[14px] cursor-pointer flex items-center gap-3"
            >
              Add New Timeslot
            </button>
          </p>
          {formData.timeSlots?.map((item, index) => (
            <div className="" key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <p className="form_label">Day</p>
                    <select
                      name="day"
                      value={item.day}
                      className="form_input py-3.5"
                      onChange={(e) => handleTimeslotChange(e, index)}
                    >
                      <option value="">Select</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>
                  <div>
                    <p className="form_label">From</p>
                    <input
                      type="time"
                      name="startTime"
                      value={item.startTime}
                      className="form_input"
                      onChange={(e) => handleTimeslotChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">To</p>
                    <input
                      type="time"
                      name="endTime"
                      value={item.endTime}
                      className="form_input"
                      onChange={(e) => handleTimeslotChange(e, index)}
                    />
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      onClick={(e) => handleDeleteTimeslot(e, index)}
                      className="bg-red-600 p-2 rounded-full text-white text-[18px] cursor-pointer mt-8"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-5">
          <p className="form_label">About</p>
          <textarea
            name="about"
            rows={5}
            value={formData.about}
            className="form_input"
            placeholder="Write about you..."
            onChange={handleUpdateFormInputchange}
          ></textarea>
        </div>
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 bolder-solid border-primaryColor flex items-center justify-center">
              <img
                src={formData.photo}
                alt=""
                className="w-full rounded-full"
              />
            </figure>
          )}

          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="avatar"
              id="customFile"
              onChange={handleFileInputChange}
              accept=".jpg, .png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-textColor font-semibold rounded-lg truncate cursor-pointer"
            >
              Upload photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            onClick={handleUpdateProfile}
            className="btn w-full rounded-lg"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
