import { NavLink, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { gameModules, type GameModule } from "./games/registry";

function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="brand"><span className="brand-mark">B</span><span>BRIX<span className="brand-muted"> GAMES</span></span></NavLink>
      <div className="nav-label">WORKSPACE</div>
      <NavLink to="/" end className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>▦ <span>Dashboard</span></NavLink>
      <div className="nav-label">GAME MODULES</div>
      {gameModules.map((game) => (
        <NavLink key={game.id} to={`/games/${game.id}`} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <span className="nav-icon">{game.icon}</span><span>{game.name}</span>
        </NavLink>
      ))}
      <div className="sidebar-footer"><span className="status-dot" /> Frontend foundation <small>API not connected</small></div>
    </aside>
  );
}

function Header() {
  return <header className="topbar"><div className="breadcrumb">Workspace <span>/</span> <strong>Brix Dashboard</strong></div><div className="topbar-right"><span className="env-pill">DEVELOPMENT</span><div className="avatar">B</div></div></header>;
}

function GameCard({ game }: { game: GameModule }) {
  const navigate = useNavigate();
  return (
    <article className={`game-card theme-${game.id}`}>
      <div className="game-card-top"><span className="game-symbol">{game.icon}</span><span className="module-pill">MODULE</span></div>
      <div><h3>{game.name}</h3><p>{game.description}</p></div>
      <div className="game-card-bottom"><span className="module-status"><i /> UI module planned</span><button className="open-button" onClick={() => navigate(`/games/${game.id}`)}>Open module <span>↗</span></button></div>
    </article>
  );
}

function Dashboard() {
  return (
    <main className="page">
      <section className="welcome">
        <div><div className="eyebrow"><span className="eyebrow-line" /> GAME PLATFORM</div><h1>Everything, <span>in its own module.</span></h1><p className="welcome-copy">A clean foundation for independent game screens, APIs, tests and deployments.</p></div>
        <div className="welcome-badge"><span className="pulse" /> SYSTEM FOUNDATION <strong>INITIALIZING</strong></div>
      </section>
      <section className="stat-grid">
        <div className="stat-card"><span className="stat-label">GAME MODULES</span><strong>06</strong><span className="stat-note">Separate frontend namespaces</span></div>
        <div className="stat-card"><span className="stat-label">API CONNECTION</span><strong className="stat-pending">Pending</strong><span className="stat-note">Backend repository not linked</span></div>
        <div className="stat-card"><span className="stat-label">DATABASE</span><strong className="stat-pending">Supabase</strong><span className="stat-note">Existing project — not modified</span></div>
      </section>
      <section className="section-heading"><div><div className="eyebrow">YOUR PLATFORM</div><h2>Game modules</h2></div><span className="section-count">06 MODULES</span></section>
      <section className="game-grid">{gameModules.map((game) => <GameCard key={game.id} game={game} />)}</section>
      <section className="architecture-note"><div className="note-icon">⌘</div><div><strong>Isolation by design</strong><p>Each game will own its API client, UI, styles and tests. Shared code stays limited to authentication, wallet display, navigation and the common API transport.</p></div></section>
      <footer className="footer"><span>BRIX PLATFORM · FOUNDATION 0.1</span><span>NO LIVE BETTING · API NOT CONNECTED</span></footer>
    </main>
  );
}

function GamePlaceholder() {
  const { gameId } = useParams();
  const game = gameModules.find((item) => item.id === gameId);
  if (!game) return <main className="page"><h1>Module not found</h1><p>This game module is not registered.</p></main>;
  return <main className="page"><NavLink to="/" className="back-link">← Back to dashboard</NavLink><section className="module-hero"><span className="game-symbol large">{game.icon}</span><div><div className="eyebrow">ISOLATED GAME MODULE</div><h1>{game.name}</h1><p>{game.description}</p></div></section><section className="empty-state"><div className="empty-icon">◈</div><h2>Module foundation ready</h2><p>This screen is intentionally not connected to game logic yet. Its API, realtime events, state engine and tests will be added in this module without changing other games.</p><NavLink to="/" className="primary-link">Return to dashboard</NavLink></section></main>;
}

export default function App() {
  return <div className="app-shell"><Sidebar /><div className="main-area"><Header /><Routes><Route path="/" element={<Dashboard />} /><Route path="/games/:gameId" element={<GamePlaceholder />} /><Route path="*" element={<main className="page"><h1>Page not found</h1><NavLink to="/">Return to dashboard</NavLink></main>} /></Routes></div></div>;
}