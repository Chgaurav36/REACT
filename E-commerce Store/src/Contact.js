import styled from "styled-components";


const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
  <>
    <Wrapper>
      <h2 className="common-heading"> Feel Free to Contact us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.281426674692!2d72.8548496!3d19.313590599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af8911a3a67d%3A0xdf1b7acdb976542a!2sShyam%20Physiotherapy%20clinic!5e0!3m2!1sen!2sin!4v1704344231394!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xeqyqrjg" method="POST" className="contact-inputs">
            <input
              type="text"
              name="username"
              id=""
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="Messege"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your messege"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
   
    </>
  );
};

export default Contact;
