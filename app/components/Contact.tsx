'use client';

import { useState } from 'react';
import SectionHeader from './section-header';
import { IconCheck, IconCopy, IconArrow } from './Icons';
import Link from 'next/link';

const EMAIL = 'kingsleyakwa@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const [sent, setSent] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="contact" id="contact">
      <div className="shell">
        <SectionHeader
          tag="06"
          cmd="./say-hello.sh"
          title="get in touch"
          sub="I reply within two working days. Promise."
        />
        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-line">
              <span className="dim">email &nbsp;→</span>
              <button className="email-copy" onClick={copy}>
                {EMAIL}
                <span className="copy-ic">
                  {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                </span>
                {copied && <span className="copied-toast">copied</span>}
              </button>
            </div>
            <div className="contact-line">
              <span className="dim">github&nbsp;→</span>
              <Link href="https://github.com/kingbary" target="_blank" rel="noopener noreferrer">
                github.com/kingbary
              </Link>
            </div>
            <div className="contact-line">
              <span className="dim">linkedin&nbsp;→</span>
              <Link href="https://linkedin.com/in/kingsleyakwa" target="_blank" rel='noopener noreferrer'>linkedin.com/in/kingsleyakwa</Link>
            </div>
            <div className="contact-line">
              <span className="dim">calendar→</span>
              <Link href="#contact">book a 20-min intro</Link>
            </div>
            <div className="booking">
              <div className="booking-label">// availability</div>
              <div className="booking-grid">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d, i) => (
                  <div key={d} className="booking-day">
                    <div className="bd-name">{d}</div>
                    <div className={`bd-slots s${i % 3}`} />
                  </div>
                ))}
              </div>
              <div className="booking-foot dim">green = open · current week · Africa/Lagos</div>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent ? (
              <div className="sent-ok">
                <div className="sent-icon"><IconCheck size={24} /></div>
                <div className="sent-t">message received.</div>
                <div className="sent-d">
                  I&apos;ll get back to you at {form.email || 'your inbox'} within two working days.
                </div>
              </div>
            ) : (
              <>
                <label>
                  <span className="fl-label">// your name</span>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="ada lovelace"
                    required
                  />
                </label>
                <label>
                  <span className="fl-label">// your email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ada@analytical.engine"
                    required
                  />
                </label>
                <label>
                  <span className="fl-label">// the shape of the thing</span>
                  <textarea
                    rows={5}
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    placeholder="what are we making?"
                    required
                  />
                </label>
                <button type="submit" className="btn-primary">
                  send message <IconArrow size={14} />
                </button>
                <div className="form-foot dim">↵ submits · no spam, ever</div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
