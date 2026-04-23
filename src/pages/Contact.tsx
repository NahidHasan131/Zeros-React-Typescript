import { useState } from "react";
import type { IconType } from "react-icons";
import { IoMailOutline, IoCallOutline, IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };


interface IconsType {
  icon?: IconType;
  label: string;
  value: string;
}

const icons: IconsType[] = [
  { icon: IoMailOutline, label: 'Email', value: 'hello@zeros.com' },
  { icon: IoCallOutline, label: 'Phone', value: '+88 (017) 0000-0000' },
  { icon: IoLocationOutline, label: 'Address', value: '123 Fashion Street, Rajshahi, BD' },
];

  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-4 pt-8 pb-16">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs mb-12">
        <ul>
          <li><a href="/" className="text-[#001a2e] font-semibold">Home</a></li>
          <li className="text-gray-400 font-medium">Contact</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left — info */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-[#001a2e]/50 text-xs font-bold tracking-[4px] uppercase">Get In Touch</span>
            <h1 className="text-[#001a2e] text-4xl font-black uppercase leading-tight mt-2">
              Contact <span className="text-cyan-400">Us</span>
            </h1>
            <p className="text-[#001a2e]/60 text-sm leading-relaxed mt-3 max-w-sm">
              Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {icons.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 bg-[#f0f5e8] rounded-xl px-5 py-4">
                <div className="bg-[#001a2e] text-white p-2.5 rounded-full">
                  {Icon && <Icon className="text-lg" />}
                </div>
                <div>
                  <p className="text-[#001a2e]/50 text-xs font-semibold uppercase tracking-wider">{label}</p>
                  <p className="text-[#001a2e] text-sm font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-[#e8f0f5] rounded-2xl p-8">
          {submitted ? (
            <div className="h-full flex items-center justify-center">
              <p className="text-[#001a2e] font-bold text-lg">Message sent! We'll be in touch soon 🎉</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-[#001a2e] text-xs font-bold uppercase tracking-widest mb-1 block">Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-white text-[#001a2e] placeholder:text-gray-400 border-2 border-transparent focus:border-[#001a2e] transition-colors"/>
              </div>
              <div>
                <label className="text-[#001a2e] text-xs font-bold uppercase tracking-widest mb-1 block">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-white text-[#001a2e] placeholder:text-gray-400 border-2 border-transparent focus:border-[#001a2e] transition-colors"/>
              </div>
              <div>
                <label className="text-[#001a2e] text-xs font-bold uppercase tracking-widest mb-1 block">Message</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Write your message..." className="w-full px-4 py-3 rounded-xl text-sm outline-none bg-white text-[#001a2e] placeholder:text-gray-400 border-2 border-transparent focus:border-[#001a2e] transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full py-3.5 bg-[#001a2e] text-white font-bold text-sm rounded-full hover:bg-[#001a2e]/90 transition-colors cursor-pointer mt-2" >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
