import { Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/** Fades an element in the first time it scrolls into view. */
@Directive({
  selector: '[reveal]',
  host: { class: 'reveal', '[style.--d]': 'delay() + "s"' },
})
export class Reveal {
  readonly delay = input(0, { alias: 'reveal', transform: (v: string | number) => Number(v) || 0 });
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement;
      const io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            node.classList.add('in');
            io.disconnect();
          }
        },
        { threshold: 0.12 },
      );
      io.observe(node);
    });
  }
}
