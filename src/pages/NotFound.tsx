import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="glass-tactical p-12 max-w-md border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-primary/30">
          ERROR_CODE: 404_NOT_FOUND
        </div>
        <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-8 border border-primary/20">
          <AlertCircle className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-5xl font-display font-black text-white italic mb-4 uppercase tracking-tighter">
          Zona <span className="text-primary">Restringida</span>
        </h1>
        <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-10 leading-relaxed">
          Has intentado acceder a un nodo inexistente o fuera de tu nivel de autorización.
        </p>
        <Link href="/">
          <Button className="btn-primary-glow w-full py-6 !rounded-none text-[10px] font-squared font-black uppercase tracking-[0.3em]">
            Volver a Base
          </Button>
        </Link>
      </div>
    </div>
  );
}
