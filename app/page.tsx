import PanelResultado from "./components/organismos/PanelResultado";
import PanelSummary from "./components/organismos/PanelSummary";

export default function Home() {
  return (
    <main className="pagina">
      <div className="card">
        <PanelResultado />
        <PanelSummary />
      </div>
    </main>
  );
}