import {
  ShieldCheck,
  LockOpen,
  RefreshCw,
  LifeBuoy,
  Download,
  Smartphone,
  Wrench,
  Cpu,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  unlock: LockOpen,
  refresh: RefreshCw,
  lifebuoy: LifeBuoy,
  download: Download,
  android: Smartphone,
  wrench: Wrench,
  cpu: Cpu,
};

export function CategoryIcon({
  name,
  className,
  ariaHidden = true,
}: {
  name: string;
  className?: string;
  ariaHidden?: boolean;
}) {
  const Icon = iconMap[name] ?? Wrench;
  return <Icon className={className} aria-hidden={ariaHidden || undefined} />;
}