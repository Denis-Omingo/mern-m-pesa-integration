import React, { useState } from 'react';
import axios from 'axios';

const Tickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const tickets = [
    { id: 1, name: 'Basic', price: 2000, color: 'black' },
    { id: 2, name: 'Gold', price: 5000, color: 'gold' },
    { id: 3, name: 'Platinum', price: 10000, color: 'orange' },
  ];

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();

    // Validate and format the phone number
    let formattedPhoneNumber = phoneNumber;

    if (formattedPhoneNumber.startsWith('0') && formattedPhoneNumber.length === 10) {
      // Remove leading 0 and prepend 254
      formattedPhoneNumber = '254' + formattedPhoneNumber.slice(1);
    } else if (formattedPhoneNumber.startsWith('+254')) {
      // Remove '+' and retain the rest of the number
      formattedPhoneNumber = formattedPhoneNumber.slice(1);
    } else if (!formattedPhoneNumber.startsWith('254') || formattedPhoneNumber.length !== 12) {
      alert("Please enter a valid phone number (starting with 0 or +254).");
      return;
    }

    // Set the validated phone number
    setPhoneNumber(formattedPhoneNumber);

    // Proceed with the ticket selection and backend call
    if (!selectedTicket) {
      alert("Please select a ticket.");
      return;
    }

    try {
      // Make an API request to the backend
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/stkpush`, {
        phone: formattedPhoneNumber, // Pass the formatted phone number
        amount: selectedTicket.price, // Pass the selected ticket price
      });
      console.log(response.data);
      alert("Request sent successfully! Please check your phone for the STK push.");
    } catch (error) {
      console.error("Payment failed:", error);
      console.log("Backend Base URL:", import.meta.env.VITE_BACKEND_BASE_URL)
      alert("Payment request failed.");
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-600">Choose Your Ticket</h1>
        <p className="text-lg text-gray-600 mt-4">Select the best plan that suits your needs</p>
      </div>

      {!selectedTicket ? (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`bg-white border border-${ticket.color}-500 rounded-lg shadow-lg p-8 text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl`}
              onClick={() => handleSelectTicket(ticket)}
              style={{ borderColor: ticket.color }}
            >
              <h2 className={`text-2xl font-bold text-${ticket.color} mb-4`} style={{ color: ticket.color }}>{ticket.name}</h2>
              <p className="text-lg text-gray-700 mb-6">Enjoy the benefits of our {ticket.name} ticket.</p>
              <p className={`text-3xl font-bold text-${ticket.color} mb-6`} style={{ color: ticket.color }}>KSH {ticket.price}</p>
              <button className={`bg-${ticket.color} hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded`} style={{ backgroundColor: ticket.color }}>
                Select {ticket.name}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">You've selected the {selectedTicket.name} ticket</h2>
          <p className="text-lg text-gray-700 mb-6">Price: KSH {selectedTicket.price}</p>

          <form onSubmit={handlePhoneSubmit} className="mt-8">
            <label className="block text-lg text-gray-700 mb-2">Enter your phone number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone number"
              className="border border-gray-300 rounded py-2 px-4 w-64 mb-4"
            />
            <br />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
            >
              Proceed to Payment
            </button>
          </form>

          <div className="mt-4">
            <button onClick={() => setSelectedTicket(null)} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-6 rounded">
              Back to Ticket Selection
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tickets;
