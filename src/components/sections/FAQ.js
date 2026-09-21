import Reveal from '@/components/fx/Reveal';
import { site } from '@/data/site';
import { container, displayHeading, section } from '@/lib/ui';

function FAQ() {
  return (
    <section id="faq" className={section}>
      <div className={`${container} grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20`}>
        <Reveal>
          <h2 className={`${displayHeading} mb-0`}>
            Frequently
            <br />
            asked questions
          </h2>
        </Reveal>
        <div>
          {site.faq.map((item, index) => (
            <details key={item.question} className="faq-item border-t border-line last:border-b" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start gap-3 py-5 text-[1.08rem] tracking-[-0.02em] text-fg transition-colors hover:text-muted sm:gap-5 sm:py-6 [&::-webkit-details-marker]:hidden">
                <span className="mt-1 min-w-[1.6rem] text-[0.78rem] text-muted sm:min-w-8">0{index + 1}</span>
                <span className="flex-1 text-[18px] font-medium tracking-[-0.03em] sm:text-[22px]">{item.question}</span>
                <span className="faq-mark mt-1.5 text-muted" aria-hidden="true" />
              </summary>
              <p className="max-w-[54ch] pb-6 pl-8 leading-relaxed text-muted sm:pl-13">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
