interface LoadingProps {
  label?: string;
}

export const Loading = ({ label = "Carregando..." }: LoadingProps) => {
  return (
    <div className="flex items-center justify-center gap-3 py-16 text-muted-foreground">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-border border-t-foreground" />
      <span className="font-heading text-sm">{label}</span>
    </div>
  );
};
