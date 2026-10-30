import { useEffect, useState } from "react";

import { fetchHealth, type Health } from "./api/health";

type State =
  | { kind: "loading" }
  | { kind: "ok"; data: Health }
  | { kind: "error"; message: string };

export default function App() {
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    fetchHealth()
      .then((data) => setState({ kind: "ok", data }))
      .catch((err: Error) => setState({ kind: "error", message: err.message }));
  }, []);

  return (
    <main className="page">
      <h1>Chatbot Platform</h1>
      <p className="muted">Slice 0: frontend, backend and database check</p>

      <section className="card">
        {state.kind === "loading" && <p>Checking backend...</p>}

        {state.kind === "error" && (
          <>
            <p className="bad">Backend not reachable</p>
            <p className="muted">{state.message}</p>
            <p className="muted">
              Is Django running on port 8000, and is the database up
              (docker compose up -d db)?
            </p>
          </>
        )}

        {state.kind === "ok" && (
          <ul className="checks">
            <Row label="Backend API" ok={state.data.status === "ok" || state.data.database} />
            <Row label="PostgreSQL" ok={state.data.database} />
            <Row label="pgvector extension" ok={state.data.pgvector} />
          </ul>
        )}
      </section>
    </main>
  );
}

function Row({ label, ok }: { label: string; ok: boolean }) {
  return (
    <li>
      <span className={ok ? "dot good" : "dot bad"} />
      <span>{label}</span>
      <strong>{ok ? "OK" : "FAIL"}</strong>
    </li>
  );
}
