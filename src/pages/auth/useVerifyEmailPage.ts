import { useState } from 'react';

export function useVerifyEmailPage() {
  const [otp, setOtp] = useState('');

  function onSubmitVerify() {
    alert(otp);
  }

  return { otp, setOtp, onSubmitVerify };
}
