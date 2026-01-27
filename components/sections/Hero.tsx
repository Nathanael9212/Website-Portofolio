'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [roleText, setRoleText] = useState('');
  const roles = ['Backend Developer', 'Frontend Developer', 'Full-Stack Developer'];

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    const typeSpeed = 70;
    const deleteSpeed = 45;
    const pauseAfterType = 1000;
    const pauseAfterDelete = 250;

    function tick() {
      const word = roles[wordIndex];

      if (!deleting) {
        setRoleText(word.slice(0, charIndex));
        charIndex++;

        if (charIndex > word.length) {
          deleting = true;
          setTimeout(tick, pauseAfterType);
        } else {
          setTimeout(tick, typeSpeed);
        }
      } else {
        setRoleText(word.slice(0, charIndex));
        charIndex--;

        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % roles.length;
          setTimeout(tick, pauseAfterDelete);
        } else {
          setTimeout(tick, deleteSpeed);
        }
      }
    }

    tick();
  }, []);

  return (
    <section className="hero">
      <div className="container heroGrid">
        <div>
          <div className="badge">
            <span>●</span>
            <span>Open for freelance</span>
            <b>(Website)</b>
          </div>

          <h1>
            Hi! I'm <span className="accent">Nathanael Kristian</span>
          </h1>

          <div className="roleWrap">
            <span id="roleText">{roleText}</span>
            <span className="caret"></span>
          </div>

          <p className="desc">
            Mahasiswa Informatika yang suka membangun website rapi, cepat, dan mudah digunakan—mulai dari tampilan depan hingga sistem di belakang layar.
          </p>

          <div className="ctaRow">
            <Link href="/projects" className="btn btnPrimary">
              View Projects
            </Link>
            <Link href="/about" className="btn btnGhost">
              About Me
            </Link>
            <Link href="/resume" className="btn btnGhost">
              My Resume
            </Link>
          </div>
        </div>

        <div className="photoWrapper">
          <div className="photo">
            <Image
              src="/images/foto.png"
              alt="Nathanael Kristian"
              width={200}
              height={200}
              className="photoImg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );

}