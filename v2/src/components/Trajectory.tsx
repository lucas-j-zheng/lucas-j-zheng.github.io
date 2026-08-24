"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function stateName(path: string): string {
  const parts = path.replace(/\/+$/, "").split("/").filter(Boolean);
  if (parts.length === 0) return "home";
  return parts[parts.length - 1];
}

export default function Trajectory() {
  const pathname = usePathname();
  const [traj, setTraj] = useState<string[] | null>(null);

  useEffect(() => {
    try {
      const cur = stateName(pathname || "/");
      const prev: string[] = JSON.parse(
        sessionStorage.getItem("traj") || "[]"
      );
      if (prev[prev.length - 1] !== cur) prev.push(cur);
      sessionStorage.setItem("traj", JSON.stringify(prev));
      setTraj(prev);
    } catch {
      setTraj(null);
    }
  }, [pathname]);

  if (!traj || traj.length === 0) return null;
  const R = new Set(traj).size;
  const shown = traj.length > 6 ? ["…", ...traj.slice(-5)] : traj;

  return (
    <p className="traj">
      &tau; = ({shown.join(" → ")}) &nbsp;&middot;&nbsp; R = {R}{" "}
      &nbsp;&middot;&nbsp; &pi;*(s) ={" "}
      <a href="mailto:lucas_zheng@brown.edu">say hi</a>
    </p>
  );
}
