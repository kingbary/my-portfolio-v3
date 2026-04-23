import SectionHeader from './section-header';
import { IconFile } from './Icons';
import { RESUME } from '../data/data';
import Link from 'next/link';

export default function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="shell">
        <SectionHeader
          tag="05"
          cmd="git log --oneline career"
          title="resume"
          sub="five years, four companies, a lot of post-mortems."
        />
        <div className="resume-list">
          {RESUME.map((r, i) => (
            <div key={i} className="res-row">
              <div className="res-y">{r.y}</div>
              <div className="res-body">
                <div className="res-head">
                  <span className="res-r">{r.r}</span>
                  <span className="dim"> @ </span>
                  <span className="res-c">{r.c}</span>
                </div>
                <div className="res-d">{r.d}</div>
              </div>
              <div className="res-commit">#{r.hash}</div>
            </div>
          ))}
        </div>
        <Link href="/resume.pdf" className="btn-ghost" target="_blank" rel="noopener noreferrer">
          <IconFile size={14} /> download full resume (pdf)
        </Link>
      </div>
    </section>
  );
}
