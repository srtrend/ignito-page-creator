import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  Phone, Mail, MapPin, Globe, Menu, X, ArrowRight, Check, Star,
  Calculator, FlaskConical, Trophy, Bot, Cpu, Wrench, Users, GraduationCap,
  Sparkles, Cog, ChevronLeft, ChevronRight,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import heroRobotics from "@/assets/hero-robotics.jpg";
import heroMaths from "@/assets/hero-maths.jpg";
import heroScience from "@/assets/hero-science.jpg";
import whyChoose from "@/assets/why-choose.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "I-SCRAM | Science, Robotics & Maths for School Students" },
      {
        name: "description",
        content:
          "I-SCRAM is a premium STEM education brand delivering Science, Robotics and Mathematics programs for schools and competitive exam preparation.",
      },
      { property: "og:title", content: "I-SCRAM | Litmus Test for Competitive Exam" },
      {
        property: "og:description",
        content:
          "Building future innovators through Science, Robotics and Mathematics — school partnerships, robotics labs, teacher training and competitive exam prep.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Robotics", href: "#robotics" },
  { label: "Schools", href: "#schools" },
  { label: "Contact", href: "#contact" },
];

const SLIDES = [
  {
    img: heroRobotics,
    eyebrow: "Litmus Test for Competitive Exam",
    title: "Building Future Innovators",
    subtitle:
      "Science, Robotics and Mathematics programs designed for the next generation of curious minds.",
    ctas: [
      { label: "Explore Programs", href: "#programs", primary: true },
      { label: "Contact Us", href: "#contact", primary: false },
    ],
  },
  {
    img: heroMaths,
    eyebrow: "Standard 1st to 8th",
    title: "Master Mathematics with Confidence",
    subtitle:
      "A strong foundation in numbers, logic and problem solving — built lesson by lesson.",
    ctas: [{ label: "Join Program", href: "#programs", primary: true }],
  },
  {
    img: heroScience,
    eyebrow: "Practical · Interactive · Curious",
    title: "Learn Science Through Experience",
    subtitle:
      "Hands-on experiments and competitive exam preparation that make concepts stick.",
    ctas: [{ label: "Explore Learning", href: "#programs", primary: true }],
  },
];

function Index() {
  return (
    <main id="home" className="min-h-screen bg-background text-foreground">
      <TopBar />
      <NavHeader />
      <Reveal><HeroCarousel /></Reveal>
      <Reveal><Programs /></Reveal>
      <Reveal><WhyChoose /></Reveal>
      <Reveal><SchoolPartnership /></Reveal>
      <Reveal><Gallery /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </main>
  );
}

/* ---------------- Top bar ---------------- */
function TopBar() {
  return (
    <div className="hidden md:block bg-muted/60 border-b border-border text-xs">
      <div className="mx-auto max-w-7xl px-6 h-9 flex items-center justify-between">
        <div className="text-muted-foreground">
          Empowering schools with Science · Robotics · Mathematics
        </div>
        <div className="flex items-center gap-5 text-foreground/80">
          <a href="tel:+917738842774" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" /> +91 77388 42774
          </a>
          <a href="tel:+917738868774" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" /> +91 77388 68774
          </a>
          <a href="mailto:iscramindia@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5" /> iscramindia@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Nav ---------------- */
function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-soft" : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-elegant hover:opacity-95 transition-all hover:-translate-y-0.5"
          >
            Enquire Now <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary py-1.5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold"
            >
              Enquire Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero Carousel ---------------- */
function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[640px] md:h-[700px] w-full overflow-hidden">
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={s.img}
            alt={s.title}
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 gradient-hero" />
          <div className="relative z-10 mx-auto max-w-7xl h-full px-6 flex items-center">
            {i === idx && (
              <div className="max-w-2xl text-white animate-fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-xs md:text-sm font-medium uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> {s.eyebrow}
                </div>
                <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                  {s.title}
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl">
                  {s.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {s.ctas.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className={
                        c.primary
                          ? "inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold shadow-elegant hover:-translate-y-0.5 transition-all"
                          : "inline-flex items-center gap-2 rounded-full border border-white/50 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-all"
                      }
                    >
                      {c.label} <ArrowRight className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* controls */}
      <button
        aria-label="Previous"
        onClick={() => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length)}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full glass items-center justify-center text-white hover:bg-white/20 transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        aria-label="Next"
        onClick={() => setI((p) => (p + 1) % SLIDES.length)}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full glass items-center justify-center text-white hover:bg-white/20 transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-10 bg-white" : "w-4 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------------- Programs ---------------- */
const PROGRAMS = [
  {
    icon: Calculator,
    title: "Mathematics Excellence",
    desc: "A structured foundation covering arithmetic, logic and problem solving for Std 1–8.",
  },
  {
    icon: FlaskConical,
    title: "Science Learning",
    desc: "Concept-first science with lab experiments, models and inquiry-based projects.",
  },
  {
    icon: Trophy,
    title: "Competitive Exam Prep",
    desc: "Focused preparation for Olympiads, scholarships and school-level competitions.",
  },
  {
    icon: Bot,
    title: "Robotics & STEM",
    desc: "Motors, sensors, coding and design thinking through real robotics projects.",
  },
];

function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32 gradient-soft">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Programs"
          title="Learning that builds thinkers"
          desc="Four focused tracks designed for school students — each blending strong fundamentals with practical, project-driven learning."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p, i) => (
            <div
              key={p.title}
              className="group relative bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-soft mb-5 group-hover:scale-110 transition-transform">
                <p.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Choose ---------------- */
const WHY = [
  "Experienced Trainers",
  "Competitive Exam Preparation",
  "STEM Education",
  "School Collaboration Program",
  "Personal Attention",
  "Practical Learning",
  "Future Ready Education",
];

function WhyChoose() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 gradient-primary opacity-10 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={whyChoose}
              alt="Student working with a robotics kit"
              className="w-full h-[520px] object-cover"
              loading="lazy"
              width={1200}
              height={1200}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-elegant border border-border p-5 max-w-[220px] hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-foreground">10+</div>
                <div className="text-xs text-muted-foreground">Partner Schools</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
            Why Choose I-SCRAM
          </div>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            A modern learning partner for schools & students
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We combine strong academic fundamentals with hands-on STEM to prepare students
            for tomorrow's competitive exams — and tomorrow's world.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {WHY.map((w) => (
              <li key={w} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full gradient-primary flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />
                </span>
                <span className="text-foreground/85 font-medium">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- School Partnership ---------------- */
const PARTNERSHIP = [
  { icon: Cpu, title: "Robotics Lab Setup" },
  { icon: Bot, title: "Robotics Kit Supply" },
  { icon: Cog, title: "Motorised Training" },
  { icon: Users, title: "Teacher Training" },
  { icon: GraduationCap, title: "Student Workshops" },
  { icon: Wrench, title: "STEM Activities" },
];

function SchoolPartnership() {
  return (
    <section id="schools" className="relative py-24 md:py-32 gradient-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-white/80 text-sm font-bold tracking-[0.2em] uppercase">
            For Schools
          </div>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            School Partnership Program
          </h2>
          <p className="mt-5 text-lg text-white/85 max-w-2xl">
            Helping schools build future innovators — from robotics labs and kits to teacher training and student workshops.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PARTNERSHIP.map((p, i) => (
            <div
              key={p.title}
              className="group glass rounded-2xl p-6 flex items-center gap-4 text-foreground hover:-translate-y-1 transition-all animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-soft">
                <p.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-base font-semibold">{p.title}</div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 text-sm font-bold shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            Partner With Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
const GALLERY = [
  { img: g1, label: "Robotics Projects" },
  { img: g2, label: "Mathematics Class" },
  { img: g3, label: "Science Experiments" },
  { img: g4, label: "School Workshops" },
  { img: g5, label: "Coding Activities" },
];

function Gallery() {
  const items = [...GALLERY, ...GALLERY];
  return (
    <section id="robotics" className="py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Learning Gallery"
          title="Explore. Create. Innovate."
          desc="A glimpse of our classrooms, labs and workshops in action."
        />
      </div>

      <div className="mt-14 relative">
        <div className="flex gap-6 animate-marquee w-max">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="relative w-[340px] md:w-[420px] h-[260px] md:h-[300px] rounded-2xl overflow-hidden shrink-0 shadow-card group"
            >
              <img
                src={it.img}
                alt={it.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-5 text-white font-semibold">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const TESTIMONIALS = [
  {
    name: "Mrs. Sunita Rao",
    role: "Principal, Prabhadevi Public School",
    quote:
      "I-SCRAM transformed our STEM curriculum. Our students are more curious, confident and hands-on than ever.",
  },
  {
    name: "Rajesh Menon",
    role: "Parent, Std 6",
    quote:
      "My son actually looks forward to science and maths now. The teachers make every concept feel like an adventure.",
  },
  {
    name: "Ananya Sharma",
    role: "Student, Std 8",
    quote:
      "Building my first robot with I-SCRAM was the moment I decided I want to be an engineer.",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-24 md:py-32 gradient-soft">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="Loved by schools, parents and students"
          desc=""
        />
        <div className="mt-12 relative">
          <div className="bg-card rounded-3xl border border-border shadow-elegant p-8 md:p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p key={i} className="text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed animate-fade-in-slow">
              "{TESTIMONIALS[i].quote}"
            </p>
            <div className="mt-8">
              <div className="font-bold text-foreground">{TESTIMONIALS[i].name}</div>
              <div className="text-sm text-muted-foreground">{TESTIMONIALS[i].role}</div>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-10 bg-primary" : "w-2 bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! We'll be in touch shortly.");
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14">
        <div>
          <div className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
            Get in touch
          </div>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Let's build the future together
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-lg">
            Whether you're a school, parent or student, we'd love to hear from you.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <Logo />
          </div>

          <div className="mt-8 space-y-5">
            <InfoRow icon={MapPin} title="Address">
              Off. No. 4, Navdurga Mavuli, Dr. M.S. Marg,
              <br /> Prabhadevi, Mumbai – 400013
            </InfoRow>
            <InfoRow icon={Phone} title="Phone">
              <a href="tel:+917738842774" className="hover:text-primary transition">+91 77388 42774</a>
              <span className="text-muted-foreground"> · </span>
              <a href="tel:+917738868774" className="hover:text-primary transition">+91 77388 68774</a>
            </InfoRow>
            <InfoRow icon={Mail} title="Email">
              <a href="mailto:iscramindia@gmail.com" className="hover:text-primary transition">
                iscramindia@gmail.com
              </a>
            </InfoRow>
            <InfoRow icon={Globe} title="Website">
              <a href="http://www.iscramedu.com" className="hover:text-primary transition">
                www.iscramedu.com
              </a>
            </InfoRow>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-card rounded-3xl border border-border shadow-elegant p-8 md:p-10 space-y-5"
        >
          <div>
            <label className="text-sm font-semibold text-foreground">Name</label>
            <Input required placeholder="Your full name" className="mt-2 h-12" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-semibold text-foreground">Phone</label>
              <Input required type="tel" placeholder="+91 ..." className="mt-2 h-12" />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">Email</label>
              <Input required type="email" placeholder="you@example.com" className="mt-2 h-12" />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground">Message</label>
            <Textarea required placeholder="Tell us about your school or query..." className="mt-2 min-h-[140px]" />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 gradient-primary text-primary-foreground text-base font-semibold rounded-xl shadow-elegant hover:opacity-95"
          >
            {loading ? "Sending..." : "Send Message"}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </form>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Phone;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {title}
        </div>
        <div className="mt-1 text-foreground/90 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-[oklch(0.20_0.06_245)] text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <Logo variant="light" />
          </div>
          <p className="mt-5 text-white/70 text-sm leading-relaxed max-w-sm">
            Litmus Test for Competitive Exam. Building future innovators through Science,
            Robotics and Mathematics.
          </p>
        </div>

        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-white/60">
            Quick Links
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-white/80 hover:text-white transition">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-white/60">
            Contact
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>+91 77388 42774</li>
            <li>+91 77388 68774</li>
            <li>iscramindia@gmail.com</li>
            <li>Prabhadevi, Mumbai – 400013</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
        <div>© 2026 I-SCRAM. All rights reserved.</div>
        <div>Science | Robotic | Maths</div>
      </div>
    </footer>
  );
}

/* ---------------- Reveal on scroll ---------------- */
function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 800ms ease-out, transform 800ms ease-out",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/* ---------------- Helpers ---------------- */
function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
        {title}
      </h2>
      {desc && <p className="mt-5 text-lg text-muted-foreground">{desc}</p>}
    </div>
  );
}
