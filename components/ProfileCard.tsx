import React, { useRef, useCallback } from 'react';

interface ProfileCardProps {
  name: string;
  title: string; // Example: "Software Developer"
  handle: string;
  status: string;
  contactText?: string;
  avatarUrl: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  onContactClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  handle,
  status,
  contactText = 'Contact',
  avatarUrl,
  showUserInfo = true,
  enableTilt = true,
  onContactClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (100 / rect.width) * x;
    const percentY = (100 / rect.height) * y;

    const rotateX = -((percentY - 50) / 5);
    const rotateY = ((percentX - 50) / 4);

    wrap.style.setProperty('--pointer-x', `${percentX}%`);
    wrap.style.setProperty('--pointer-y', `${percentY}%`);
    wrap.style.setProperty('--rotate-x', `${rotateX}deg`);
    wrap.style.setProperty('--rotate-y', `${rotateY}deg`);
  }, []);

  const resetPointer = useCallback(() => {
    const wrap = wrapRef.current;
    if (wrap) {
      wrap.style.setProperty('--rotate-x', '0deg');
      wrap.style.setProperty('--rotate-y', '0deg');
      wrap.style.setProperty('--pointer-x', '50%');
      wrap.style.setProperty('--pointer-y', '50%');
    }
  }, []);

  return (
<div
  ref={wrapRef}
  onPointerMove={enableTilt ? handlePointerMove : undefined}
  onPointerLeave={enableTilt ? resetPointer : undefined}
  className="relative w-[320px] h-[480px] rounded-3xl overflow-hidden bg-black"
  style={{
    perspective: '1000px',
    '--rotate-x': '0deg',
    '--rotate-y': '0deg',
    '--pointer-x': '50%',
    '--pointer-y': '50%',
  } as React.CSSProperties}
>
  {/* 3D Card */}
  <div
    ref={cardRef}
    className="w-full h-full rounded-3xl shadow-2xl transition-transform duration-300"
    style={{
      transformStyle: 'preserve-3d',
      transform: 'translateZ(0.1px) rotateX(var(--rotate-y)) rotateY(var(--rotate-x))',
      backgroundImage: `url(${avatarUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay for dark gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-10" />

    {/* Top Info (Name + Title) */}
    <div className="absolute top-6 left-0 right-0 z-20 flex flex-col items-center">
      <h3 className="text-white text-xl font-semibold">{name}</h3>
      <p className="text-white/80 text-sm">{title}</p>
    </div>

    {/* Bottom Frosted Glass Bar */}
    <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center justify-between border border-white/20">
      <div className="flex items-center gap-2">
        <img src={avatarUrl} alt="avatar" className="w-8 h-8 rounded-full border border-white/30" />
        <div className="text-white text-sm">
          @{handle}
          <div className="text-xs text-green-400">{status}</div>
        </div>
      </div>
      {showUserInfo && (
        <button
          onClick={onContactClick}
          className="text-sm px-4 py-1 rounded-md bg-white/20 hover:bg-white/30 text-white font-semibold border border-white/20"
        >
          {contactText}
        </button>
      )}
    </div>
  </div>
</div>

  );
};

export default ProfileCard;
