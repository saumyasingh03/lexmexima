import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <div className="min-h-screen   text-[#B0C4DE]">
      {/* Hero Section */}
      <section className="bg-[#0A1B2A] py-20 px-8 md:px-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-[#00BFFF]">
            Contact Us
          </h1>
          <p className="text-xl text-[#B0C4DE]/80 max-w-2xl font-serif">
            Reach out to be part of our justice movement from the ground up.
            Whether you want to volunteer, collaborate, or simply listen and learn — your voice, your concern, and your conviction are welcome here.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
