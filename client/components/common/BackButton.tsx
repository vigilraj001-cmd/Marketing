import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  label?: string;
  className?: string;
  href?: string;
}

const BackButton = ({ label = "Back", className = "", href }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => href ? navigate(href) : navigate(-1)}
      className={`flex items-center gap-2 text-primary hover:brightness-110 mb-8 font-medium transition ${className}`}
    >
      <ArrowLeft size={20} />
      {label}
    </button>
  );
};

export default BackButton;
