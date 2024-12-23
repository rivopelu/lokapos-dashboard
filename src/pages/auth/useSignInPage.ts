import { useState } from 'react';

export function useSignInPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return { showPassword, setShowPassword };
}
