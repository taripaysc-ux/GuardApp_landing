import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6 text-center">
          <div className="glass-tactical p-10 max-w-lg border-primary/20">
            <h1 className="text-4xl font-display font-black text-white uppercase italic mb-6">Error de Sistema</h1>
            <p className="text-slate-400 font-mono text-sm leading-relaxed mb-8 uppercase tracking-widest">
              {this.state.error?.message || "Se ha producido un error crítico en el Cuartel Digital."}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary-glow px-8 py-3 font-squared font-black uppercase tracking-widest text-xs"
            >
              Reiniciar Protocolo
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
