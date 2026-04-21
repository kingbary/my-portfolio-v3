import SectionHeader from './section-header';
import { IconArrowUpRight } from './Icons';
import { SERVICES } from '../data/data';

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="shell">
        <SectionHeader
          tag="04"
          cmd="./list-services.sh"
          title="what I do"
          sub="four ways I tend to work with teams."
        />
        <div className="svc-list">
          {SERVICES.map((s) => (
            <div key={s.k} className="svc-row">
              <div className="svc-k">{s.k}</div>
              <div className="svc-t">{s.t}</div>
              <div className="svc-d">{s.d}</div>
              <div className="svc-arr"><IconArrowUpRight size={16} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
