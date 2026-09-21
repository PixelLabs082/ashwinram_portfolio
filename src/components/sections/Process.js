import Reveal from '@/components/fx/Reveal';
import { site } from '@/data/site';
import { container, displayHeading, section } from '@/lib/ui';

function Process() {
  return (
    <section id="process" className={section}>
      <div className={container}>
        <Reveal className="mb-12 md:mb-16">
          <h2 className={`${displayHeading} mb-0`}>The Process</h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {site.process.map((step) => (
            <article
              key={step.number}
              className="flex min-h-[18rem] flex-col justify-between rounded-[28px] border border-line bg-card p-6 sm:min-h-88 sm:rounded-[40px] sm:p-8 md:p-10"
            >
              <h3 className="max-w-[14ch] text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.1] font-medium tracking-[-0.04em]">
                {step.title}
              </h3>
              <p className="py-6 text-[clamp(3.5rem,8vw,5.5rem)] leading-none font-medium tracking-[-0.07em] text-muted">
                {step.number}
              </p>
              <p className="text-[17px] leading-7 text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
