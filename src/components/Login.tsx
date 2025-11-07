// import React, { useState, useMemo } from "react";

// const Login: React.FC = () => {
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [captchaInput, setCaptchaInput] = useState<string>("");
//   const [captchaCode, setCaptchaCode] = useState<string>(() => generateCaptcha());

//   function generateCaptcha(): string {
//     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let code = "";
//     for (let i = 0; i < 5; i++) {
//       code += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return code;
//   }

//   const refreshCaptcha = (): void => {
//     setCaptchaCode(generateCaptcha());
//     setCaptchaInput("");
//   };

  

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     if (captchaInput.toUpperCase() !== captchaCode) {
//       alert("CAPTCHA code is incorrect.");
//       refreshCaptcha();
//       return;
//     }
//     alert(`Logging in with username: ${username}`);
//     // Add your login logic here
//   };

//   const displayCaptcha = useMemo(() => {
//   const colors = ['#22c55e', '#3b82f6', '#eab308', '#10b981', '#8b5cf6'];
//   return captchaCode.split('').map((char: string, i: number) => {
//     const rotation = (Math.random() - 0.5) * 25;
//     return {
//       char,
//       rotation,
//       color: colors[i % colors.length],
//       x: 15 + i * 28,
//       y: 32
//     };
//   });
// }, [captchaCode]);


//   return (
//     <div 
//       className="min-h-screen flex items-center justify-center px-4 py-8 bg-[#8b9da9] bg-cover bg-center"
//       style={{
//         backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)'
//       }}
//     >
//        <div className="bg-white rounded-2xl shadow-2xl w-1/3 h-auto max-w-md relative border border-gray-200 px-10 py-12">
//         {/* User icon circle - positioned above the card */}
//         <div className="absolute -top-10 left-1/2 w-20 h-20 -translate-x-1/2 bg-white rounded-full shadow-lg flex items-center justify-center">

//           <svg
//             className="w-12 h-12 text-cyan-500"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//           </svg>
//         </div>

//         <div>
//              <h2 className="text-center text-cyan-500 font-bold text-3xl mb-8">
//             USER LOGIN
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Username */}
//             <div>
//               <label htmlFor="username" className="block  mb-0 font-[400px]  text-gray-700">
//                 Username <span className="text-red-600">*</span>
//               </label>
//               <input
//                 id="username"
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
//                 className="block w-full h-[34px] px-3 py-1.5 text-sm leading-[1.43] text-[#555]
//              bg-white border border-[#ccc] rounded 
//              shadow-[inset_0_1px_1px_rgba(0,0,0,0.075)]
//              transition-[border-color,box-shadow] ease-in-out duration-150
//              focus:outline-none focus:border-[#66afe9]
//              focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),0_0_8px_rgba(102,175,233,0.6)]"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="block mb-2 text-base text-gray-700">
//                 Password <span className="text-red-600">*</span>
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
//                 className="block w-full h-[34px] px-3 py-1.5 text-sm leading-[1.43] text-[#555] 
//              bg-white border border-[#ccc] rounded 
//              shadow-[inset_0_1px_1px_rgba(0,0,0,0.075)] 
//              transition ease-in-out duration-150 
//              focus:outline-none focus:border-[#66afe9] focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),0_0_8px_rgba(102,175,233,0.6)]"
//               required
//               />
//             </div>

//             {/* CAPTCHA Section */}
//             <div className="pt-3">
//               <h3 className="font-bold text-gray-900 mb-3 text-2xl">CAPTCHA</h3>
//               <p className="text-sm text-gray-700 mb-5 leading-relaxed">
//                 This question is for testing whether or not you are a human visitor and to prevent automated spam submissions.
//               </p>

//               <div className="flex items-center gap-6 mb-5">
//                 <div className="border-2 border-gray-400 rounded-md bg-white p-3 flex-shrink-0">
//                   <svg width="150" height="50">
//                       {displayCaptcha.map(({char, rotation, color, x, y}, i) => (
//     <text
//       key={i}
//       x={x}
//       y={y}
//       fontSize="32"
//       fontWeight="bold"
//       fill={color}
//       transform={`rotate(${rotation} ${x} ${y})`}
//       style={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic' }}
//     >
//       {char}
//     </text>
//   ))}
//   <line x1="10" y1="25" x2="140" y2="30" stroke="#666" strokeWidth="2" />
//                   </svg>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={refreshCaptcha}
//                   className="text-cyan-500 text-base hover:text-cyan-600 underline"
//                 >
//                   Generate a new captcha
//                 </button>
//               </div>

//               <label htmlFor="captchaInput" className="block mb-2 text-base text-gray-700">
//                 What code is in the image? <span className="text-red-600">*</span>
//               </label>
//               <input
//                 id="captchaInput"
//                 type="text"
//                 value={captchaInput}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCaptchaInput(e.target.value)}
//                 className="w-full border border-gray-300 rounded-md px-4 py-3 text-base text-gray-700 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
//                 required
//               />
//             </div>

//             {/* Submit button */}
//             <button
//               type="submit"
//               className="w-full bg-[#5CB85C] hover:bg-green-600 text-white font-bold py-4 text-lg mt-8 rounded-md"
//             >
//               LOG IN
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Feedback button */}
//       <div 
//   className="fixed right-0 top-1/2 bg-red-600 text-white px-5 py-3 rounded-l-lg font-bold text-lg shadow-lg hover:bg-red-700 cursor-pointer"
//   style={{ 
//     writingMode: 'vertical-rl', 
//     letterSpacing: '1px',
//     transform: 'translateY(-50%)'
//   }}
// >
//   feedback
// </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState, useMemo } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState(() => generateCaptcha());

  function generateCaptcha(): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length: 5 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join("");
  }

  const refreshCaptcha = (): void => {
    setCaptchaCode(generateCaptcha());
    setCaptchaInput("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (captchaInput.toUpperCase() !== captchaCode) {
      alert("CAPTCHA code is incorrect.");
      refreshCaptcha();
      return;
    }
    alert(`Logging in with username: ${username}`);
  };

  const displayCaptcha = useMemo(() => {
    const colors = ["#22c55e", "#3b82f6", "#eab308", "#10b981", "#8b5cf6"];
    return captchaCode.split("").map((char, i) => ({
      char,
      rotation: (Math.random() - 0.5) * 25,
      color: colors[i % colors.length],
      x: 15 + i * 28,
      y: 32,
    }));
  }, [captchaCode]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#8b9da9] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)",
      }}
    >
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm px-8 py-8 relative border border-gray-200">
        {/* User Icon */}
        <div className="absolute -top-10 left-1/2 w-16 h-16 -translate-x-1/2 bg-white rounded-full shadow-md flex items-center justify-center">
          <svg
            className="w-10 h-10 text-cyan-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        <h2 className="text-center text-cyan-500 font-bold text-2xl mb-6 mt-6">
          USER LOGIN
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-700 mb-1"
            >
              Username <span className="text-red-600">*</span>
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-700 mb-1"
            >
              Password <span className="text-red-600">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          {/* CAPTCHA */}
          <div className="pt-2">
            <label
              htmlFor="captchaInput"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              CAPTCHA <span className="text-red-600">*</span>
            </label>

            <div className="flex items-center gap-3 mb-2">
              <div className="border border-gray-300 rounded bg-white p-2">
                <svg width="120" height="40">
                  {displayCaptcha.map(({ char, rotation, color, x, y }, i) => (
                    <text
                      key={i}
                      x={x}
                      y={y}
                      fontSize="24"
                      fontWeight="bold"
                      fill={color}
                      transform={`rotate(${rotation} ${x} ${y})`}
                      style={{ fontFamily: "Arial, sans-serif", fontStyle: "italic" }}
                    >
                      {char}
                    </text>
                  ))}
                </svg>
              </div>
              <button
                type="button"
                onClick={refreshCaptcha}
                className="text-cyan-600 text-xs hover:underline"
              >
                Refresh
              </button>
            </div>

            <input
              id="captchaInput"
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Enter CAPTCHA"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded mt-4"
          >
            LOG IN
          </button>
        </form>
      </div>

      {/* Feedback button */}
      <div
        className="fixed right-0 top-1/2 bg-red-600 text-white px-4 py-2 rounded-l-md font-semibold text-sm shadow-lg hover:bg-red-700 cursor-pointer"
        style={{
          writingMode: "vertical-rl",
          letterSpacing: "1px",
          transform: "translateY(-50%)",
        }}
      >
        Feedback
      </div>
    </div>
  );
};

export default Login;
