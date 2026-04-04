import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <div className="bg-[#e8f0f5] rounded-xl px-8 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-8 my-10">
      {/* Left content */}
      <div className="flex flex-col items-start text-left max-w-md">
        <span className="text-[#001a2e]/60 text-xs font-bold tracking-[4px] uppercase mb-2">Stay Updated</span>
        <h2 className="text-[#001a2e] text-3xl md:text-4xl font-black uppercase leading-tight">
          Join Our Newsletter
        </h2>
        <p className="text-[#001a2e]/60 text-sm mt-3 leading-relaxed">
          Subscribe now and get exclusive access to new arrivals, special offers, and style inspiration delivered to your inbox.
        </p>
      </div>

      {/* Right form */}
      <div className="w-full md:w-auto md:min-w-115">
        {submitted ? (
          <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full text-center">
            <p className="text-[#001a2e] font-bold">Thanks for subscribing! 🎉</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className=" gap-2">
            <h2 className="text-[#001a2e] text-3xl md:text-4xl font-black uppercase leading-tight mb-4">
              Let's Join!
            </h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required
              className="w-full px-5 py-3.5 rounded-full text-sm outline-none bg-white text-[#001a2e] placeholder:text-gray-400 border-2 border-transparent focus:border-[#001a2e] transition-colors mb-4"/>
            <button type="submit" className="w-full px-7 py-3.5 bg-[#001a2e] text-white font-bold text-sm rounded-full hover:bg-[#001a2e]/90 transition-colors cursor-pointer whitespace-nowrap" >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
