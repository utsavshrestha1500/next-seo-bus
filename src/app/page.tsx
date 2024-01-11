// pages/index.tsx
import React from 'react';
import Layout from '../app/layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Bus Ticket Booking in Nepal</h1>
        <p className="text-lg mb-4">
          Welcome to Okay Journey, your go-to platform for hassle-free bus ticket booking in Nepal.
          Travel comfortably and securely to your desired destinations with our easy-to-use online booking system.
        </p>

        {/* Value Proposition */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Value Proposition</h2>
          <p className="text-lg">
            At Okay Journey, we prioritize your convenience and safety. Enjoy a seamless bus booking experience
            with our user-friendly platform, ensuring a comfortable journey to your desired destinations.
          </p>
        </section>

        {/* User Needs */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What You Need</h2>
          <ul className="list-disc pl-4">
            <li className="mb-2">Easy comparison of bus options</li>
            <li className="mb-2">Instant booking confirmation</li>
            <li className="mb-2">Secure and convenient payment options</li>
            <li className="mb-2">Access to popular bus routes in Nepal</li>
          </ul>
        </section>

        {/* Assurances */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What We Assure You</h2>
          <p className="text-lg">
            We assure you a secure and convenient bus booking experience. Your information is handled with utmost
            care, and we guarantee transparency throughout the booking process.
          </p>
        </section>

        {/* How We Provide Them */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">How We Provide It</h2>
          <p className="text-lg">
            Our platform is designed with user experience in mind. An easy-to-use interface, advanced security
            measures, and a wide range of options make Okay Journey your ideal choice for bus ticket booking.
          </p>
        </section>

        {/* User Data Handling */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">User Data Handling</h2>
          <p className="text-lg">
            We prioritize user privacy. Your email and mobile number are used for booking confirmations and updates.
            Preferences are stored securely, and you have control over your data. Refer to our{' '}
            <a href="/privacy-policy" className="text-blue-500">Privacy Policy</a> for details.
          </p>
        </section>

        {/* Add other sections and components as needed */}

      </div>
    </Layout>
  );
};

export default Home;
