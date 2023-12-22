import React from "react";

const Contact = () => {
  return (
    <>
      <section className="bg-[#0066ff15]">
        <div className="container text-center">
          <h2 className="heading">Contact Us</h2>
          <p className="font-light text-center text_para">
            Facing technical issue? Want to send feedback about a beta feature?
            Let us know.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="max-w-screen-md mx-auto px-4">
            <form action="#" className="space-y-5">
              <div>
                <label htmlFor="email" className="form_label">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="example@mail.com"
                  className="form_input mt-1"
                />
              </div>
              <div>
                <label htmlFor="subject" className="form_label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Let us know how we can help you?"
                  className="form_input mt-1"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="form_label">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  type="text"
                  id="message"
                  placeholder="Leave a comment..."
                  className="form_input mt-1"
                />
              </div>
              <button type="submit" className="btn rounded sm:w-fit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
