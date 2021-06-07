import React from "react";
import styled, { css } from "styled-components";
import "./contact.styles.css";
const Section = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  background: linear-gradient(
    to right top,
    rgb(55, 65, 81),
    rgb(17, 24, 39),
    rgb(0, 0, 0)
  );
  /* padding: 4rem 0rem; */
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2) 0.5rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
`;

const ContactPage = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <div class="container-contact100">
            <div class="wrap-contact100">
              <div
                class="contact100-form-title"
                // style="background-image: url(images/bg-01.jpg);"
              >
                <span class="contact100-form-title-1">Contact Us</span>

                <span class="contact100-form-title-2">
                  Feel free to drop us a line below!
                </span>
              </div>

              <form class="contact100-form validate-form">
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Name is required"
                >
                  <span class="label-input100">Full Name:</span>
                  <input
                    class="input100"
                    type="text"
                    name="name"
                    placeholder="Enter Full Name"
                  />
                  <span class="focus-input100"></span>
                </div>

                <div
                  class="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <span class="label-input100">Email:</span>
                  <input
                    class="input100"
                    type="text"
                    name="email"
                    placeholder="Enter Email Addess"
                  />
                  <span class="focus-input100"></span>
                </div>

                <div
                  class="wrap-input100 validate-input"
                  data-validate="Phone is required"
                >
                  <span class="label-input100">Phone:</span>
                  <input
                    class="input100"
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                  />
                  <span class="focus-input100"></span>
                </div>

                <div
                  class="wrap-input100 validate-input"
                  data-validate="Message is required"
                >
                  <span class="label-input100">Message:</span>
                  <textarea
                    class="input100"
                    name="message"
                    placeholder="Your Comment..."
                  ></textarea>
                  <span class="focus-input100"></span>
                </div>

                <div class="container-contact100-form-btn">
                  <button
                    class="contact100-form-btn"
                    style={{
                      color: "#0adfdf",
                      border: "1px solid #0adfdf",
                    }}
                  >
                    <span>
                      Submit
                      <i
                        class="fa fa-long-arrow-right m-l-7"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ColumnLeft>
      </Container>
    </Section>
  );
};

export default ContactPage;
