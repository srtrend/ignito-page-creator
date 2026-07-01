export function Logo({ variant = "default" }: { variant?: "default" | "light" }) {
  const main = variant === "light" ? "text-white" : "text-primary";
  const sub = variant === "light" ? "text-white/80" : "text-foreground/70";
  return (
    <div className="flex flex-col leading-none">
      <span className={`text-2xl md:text-3xl font-extrabold tracking-tight ${main}`}>
        I-SCRAM
      </span>
      <span className={`text-[10px] md:text-xs font-medium tracking-[0.18em] uppercase ${sub}`}>
        Science · Robotic · Maths
      </span>
    </div>
  );
}
