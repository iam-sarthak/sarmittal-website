import {
  Users,
  MessageCircle,
  BarChart3,
  FileText,
  Bell,
  Mail,
  Calendar,
  ScanText,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  users: Users,
  "message-circle": MessageCircle,
  "bar-chart": BarChart3,
  "file-text": FileText,
  bell: Bell,
  mail: Mail,
  calendar: Calendar,
  "scan-text": ScanText,
  zap: Zap,
};

export default function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = icons[name] ?? Zap;
  return <Cmp className={className} aria-hidden="true" />;
}
