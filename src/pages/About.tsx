const About = () => {
  interface cardType {
    title: string
    desc: string
  }
  const card:cardType[] =[
    { title: 'Our Mission', desc: 'To make sustainable fashion accessible to everyone without compromising on style or quality.' },
    { title: 'Our Vision', desc: 'A world where every purchase contributes to a healthier planet and a more equitable society.' },
    { title: 'Our Values', desc: 'Sustainability, innovation, inclusivity, and a relentless commitment to customer satisfaction.' },
  ]
  
  interface statType {
    value: string
    label: string
  }

  const stat:statType[] = [
    { value: '10K+', label: 'Happy Customers' },
    { value: '500+', label: 'Products' },
    { value: '50+', label: 'Brands' },
    { value: '5★', label: 'Avg Rating' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-4 pt-8 pb-16">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs mb-8">
        <ul>
          <li><a href="/" className="text-[#001a2e] font-semibold">Home</a></li>
          <li className="text-gray-400 font-medium">About</li>
        </ul>
      </div>

      {/* Hero */}
      <div className="bg-[#e8f0f5] rounded-2xl px-10 py-16 flex flex-col md:flex-row items-center gap-10 mb-14">
        <div className="flex-1">
          <span className="text-[#001a2e]/50 text-xs font-bold tracking-[4px] uppercase">Our Story</span>
          <h1 className="text-[#001a2e] text-4xl md:text-5xl font-black uppercase leading-tight mt-2">
            We Are <span className="text-cyan-400">Zeros</span>
          </h1>
          <p className="text-[#001a2e]/60 text-sm leading-relaxed mt-4 max-w-md">
            Zeros is a design force driven by a vision for sustainability and innovation. We craft stylish, high-quality products that are kind to the environment and built for the modern lifestyle.
          </p>
        </div>
        <div className="flex-1 w-full">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=90"
            alt="About Zeros"
            className="w-full h-72 object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
        {stat.map((stat) => (
          <div key={stat.label} className="bg-[#f0f5e8] rounded-xl p-6 text-center">
            <p className="text-[#001a2e] text-3xl font-black">{stat.value}</p>
            <p className="text-[#001a2e]/50 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div className="grid md:grid-cols-3 gap-6">
        {card.map((item) => (
          <div key={item.title} className="border border-[#001a2e]/10 rounded-xl p-6">
            <h3 className="text-[#001a2e] font-black uppercase text-lg mb-2">{item.title}</h3>
            <p className="text-[#001a2e]/60 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
