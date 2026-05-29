interface SectionTransitionProps {
  text: string;
}

export function SectionTransition({ text }: SectionTransitionProps) {
  return (
    <div className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xl font-semibold text-[#3ECFCF] flex items-center gap-2">
          {text}
        </p>
      </div>
    </div>
  );
}
