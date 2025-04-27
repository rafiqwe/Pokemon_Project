import { Form } from "react-router-dom";
export const getFormData = async({request}) => {
    try {
      const res = await request.formData();
      const data = Object.fromEntries(res);
      console.log(data);
      return null;
    } catch (error) {
      console.log(error);
    }
  }
export const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>Have questions, suggestions, or just want to say hello? We'd love to hear from you!</p>
      
      <Form action="/contact" method="POST" encType="multipart/form-data" className="contact-form">
        <input type="text" placeholder="Your Name" required name="name" />
        <input type="email" placeholder="Your Email" required name="email" />
        <textarea placeholder="Your Message" required name="message"></textarea>
        <button type="submit">Send Message</button>
      </Form>
    </div>
  );
};

