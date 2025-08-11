import React, { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface Program {
  program: string;
  degree: string;
  school: string;
  length: string;
  structure: string;
  link?: string;
}

interface ProgramsTableProps {
  programs: Program[];
}

const ProgramsTable: React.FC<ProgramsTableProps> = ({ programs }) => {
  const [term, setTerm] = useState("");
  const [school, setSchool] = useState<string>("");
  const [structure, setStructure] = useState<string>("");

  const schools = useMemo(
    () => Array.from(new Set(programs.map((p) => p.school))).sort(),
    [programs]
  );

  const structures = useMemo(
    () => Array.from(new Set(programs.map((p) => p.structure))).sort(),
    [programs]
  );

  const normalized = (v: string) => v.toLowerCase();

  const filtered = useMemo(() => {
    const t = normalized(term);
    return programs
      .filter((p) => {
        const matchesTerm =
          !t ||
          normalized(p.program).includes(t) ||
          normalized(p.degree).includes(t) ||
          normalized(p.school).includes(t) ||
          normalized(p.structure).includes(t) ||
          normalized(p.length).includes(t);
        const matchesSchool = !school || p.school === school;
        const matchesStructure = !structure || p.structure === structure;
        return matchesTerm && matchesSchool && matchesStructure;
      })
      .sort((a, b) => a.program.localeCompare(b.program));
  }, [programs, term, school, structure]);

  const reset = () => {
    setTerm("");
    setSchool("");
    setStructure("");
  };

  return (
    <div className="mt-6">
      <div className="grid gap-4 md:grid-cols-12">
        <div className="md:col-span-5">
          <Label htmlFor="programs-search" className="text-gray-600">Search</Label>
          <Input
            id="programs-search"
            placeholder="Search programs, degrees, schools"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="mt-2"
          />
        </div>
        <div className="md:col-span-3">
          <Label className="text-gray-600">School</Label>
          <Select value={school || "ALL"} onValueChange={(v) => setSchool(v === "ALL" ? "" : v)}>
            <SelectTrigger className="mt-2"><SelectValue placeholder="All schools" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All schools</SelectItem>
              {schools.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-3">
          <Label className="text-gray-600">Structure</Label>
          <Select value={structure || "ALL"} onValueChange={(v) => setStructure(v === "ALL" ? "" : v)}>
            <SelectTrigger className="mt-2"><SelectValue placeholder="All structures" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All structures</SelectItem>
              {structures.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-1 flex items-end">
          <Button variant="secondary" className="w-full" onClick={reset} disabled={!term && !school && !structure}>
            Reset
          </Button>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">{filtered.length} results</div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3 pr-4">Program</th>
              <th className="py-3 pr-4">Degree</th>
              <th className="py-3 pr-4">School</th>
              <th className="py-3 pr-4">Length</th>
              <th className="py-3 pr-4">Structure</th>
              <th className="py-3 pr-4">Link</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr key={`${p.program}-${i}`} className="border-b hover:bg-gray-50">
                <td className="py-3 pr-4 text-gray-900">{p.program}</td>
                <td className="py-3 pr-4 text-gray-600">{p.degree}</td>
                <td className="py-3 pr-4 text-gray-600">{p.school}</td>
                <td className="py-3 pr-4 text-gray-600">{p.length}</td>
                <td className="py-3 pr-4 text-gray-600">{p.structure}</td>
                <td className="py-3 pr-4">
                  {p.link ? (
                    <a className="text-[#007AFF] underline" href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.program} program`}>
                      Visit
                    </a>
                  ) : (
                    <span className="text-gray-500">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-gray-600 mt-4">No programs match your filters. Try clearing filters.</p>
      )}
    </div>
  );
};

export default ProgramsTable;


