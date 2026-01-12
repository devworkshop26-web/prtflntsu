type GradientBlobProps = {
  className?: string;
};

export function GradientBlob({ className }: GradientBlobProps) {
  return (
    <div
      className={`absolute rounded-full bg-gradient-to-br from-cyan-400/20 via-violet-400/30 to-fuchsia-400/20 blur-3xl ${className}`}
      aria-hidden="true"
    />
  );
}
