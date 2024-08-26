import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const PaymentSuccess = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000); // 5 seconds timer

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="payment-success">
      {showConfetti && <Confetti />}
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase.</p>
    </div>
  );
};

export default PaymentSuccess;
