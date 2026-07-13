import logo from "../assets/ijunior-logo.svg";

export function Header() {
  return (
    <header className="flex flex-col items-center gap-2 border-b border-border py-5 text-center bg-surface">
      <div className="flex items-center gap-3">
        <img className="h-9 w-auto" src={logo} alt="Logo iJunior" />
        <span className="bg-[image:var(--gradient-logo)] bg-clip-text font-heading pt-1 text-2xl font-semibold text-transparent">
          iRepair
        </span>
      </div>

      <p className="font-heading text-lg text-foreground pt-3 hidden sm:block">
        Dashboard de Ordens de Serviço
      </p>
    </header>
  );
}