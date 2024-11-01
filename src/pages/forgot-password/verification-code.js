import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

export default function VerificationCode() {
  const router = useRouter();
  const [buttonText, setButtonText] = useState('00:05');
  const [timerActive, setTimerActive] = useState(true);
  const [code, setCode] = useState(['', '', '', '']);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    let timer;

    if (timerActive) {
      timer = setInterval(() => {
        setButtonText((prev) => {
          const [minutes, seconds] = prev.split(':').map(Number);
          const totalSeconds = minutes * 60 + seconds - 1;
          if (totalSeconds <= 0) {
            clearInterval(timer);
            setTimerActive(false);
            return 'Kirim Lagi';
          }
          const newMinutes = Math.floor(totalSeconds / 60);
          const newSeconds = totalSeconds % 60;
          return `${newMinutes.toString().padStart(2, '0')}:${newSeconds
            .toString()
            .padStart(2, '0')}`;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [timerActive]);

  useEffect(() => {
    const firstEmptyIndex = code.findIndex((digit) => digit === '');
    if (firstEmptyIndex !== -1 && inputRefs.current[firstEmptyIndex]) {
      inputRefs.current[firstEmptyIndex].focus();
    }
  }, [code]);

  const resetTimer = () => {
    setButtonText('00:05');
    setTimerActive(true);
  };

  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    setIsButtonEnabled(newCode.every((digit) => digit !== ''));

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleNextStep = () => {
    if (isButtonEnabled) {
      router.push('/SignIn');
    }
  };

  return (
    <div className='flex h-screen'>
      <div
        className='hidden md:flex w-3/4 bg-cover '
        style={{ backgroundImage: `url('/assets/images/reglog.png')` }}
      ></div>

      <div className='flex justify-center items-center w-full md:w-1/2 bg-white p-8'>
        <div className='w-full max-w-md text-center'>
          <h2 className='text-3xl font-bold mb-9 text-black '>
            Periksa email Anda untuk tautan verifikasi.
          </h2>

          <p className='text-gray-600 mb-9'>
            Silakan masukkan kode yang kami kirim ke{' '}
            <span className='text-blue-600 font-extrabold '>
              Armanmaul@gmail.com
            </span>
          </p>

          <div className='flex justify-center space-x-4 mb-8'>
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type='text'
                className='w-12 h-12 text-black text-center p-2 border border-gray-300 rounded-lg'
                maxLength='1'
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
              />
            ))}
          </div>

          <button
            className={`w-full p-3 rounded-lg ${
              isButtonEnabled
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-600 text-white'
            }`}
            onClick={handleNextStep}
            disabled={!isButtonEnabled}
          >
            Lanjutkan
          </button>

          <p className='text-center mt-4 text-gray-400'>
            Tidak Menerima Kode?{' '}
            <span className='text-blue-600 cursor-pointer' onClick={resetTimer}>
              {buttonText}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
