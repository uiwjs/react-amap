import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

type HeadingType = { id: string; text: string; level: number };
function useHeadings(mdStr?: string) {
  const [headings, setHeadings] = React.useState<HeadingType[]>([]);
  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3, h4, h5, h6'))
      .filter((element) => element.id)
      .map((element) => ({
        id: element.id,
        text: element.textContent ?? '',
        level: Number(element.tagName.substring(1)),
      }));
    setHeadings(elements);
  }, [mdStr]);
  return headings;
}

function useScrollSpy(ids: string[], options: IntersectionObserverInit) {
  const [activeId, setActiveId] = React.useState<string>();
  const observer = React.useRef<IntersectionObserver>();
  React.useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));
    observer.current?.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);
    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });
    return () => observer.current?.disconnect();
  }, [ids, options]);
  return activeId;
}

const Nav = styled.nav`
  ul,
  ul li {
    list-style: none;
    padding-left: 0;
  }
`;

const Aside = styled.aside`
  position: sticky;
  right: 0;
  top: 0px;
  z-index: 999;
  max-height: calc(100vh - 6px);
  overflow: auto;
  li {
    height: 22px;
    line-height: 22px;
  }
  .active::before {
    content: ' ';
    display: block;
    background-color: #f38701;
    border-radius: 2px;
    height: 18px;
    margin-top: 3px;
    position: absolute;
    transition: top 0.3s;
    width: 5px;
  }
`;

export function useHyperClickToTop(props: { dom: HTMLElement | null; mdStr: string | undefined }) {
  const { dom, mdStr } = props;
  useEffect(() => {
    const doms = dom?.querySelectorAll<HTMLAnchorElement>('a.anchor[href^="#"]');
    if (doms && doms.length > 0) {
      doms.forEach((elm) => {
        elm.onclick = (e: MouseEvent) => {
          e.preventDefault();
          const id = elm.parentElement!.id;
          if (id) {
            document.querySelector(`#${id}`)?.scrollIntoView({
              behavior: 'smooth',
            });
          }
        };
      });
    }
  }, [dom, mdStr]);
}

export const Hyperlink = ({ dom, mdStr }: any) => {
  useHyperClickToTop({ dom: dom, mdStr });
  const $dom = useRef<HTMLElement>(null);
  const headings = useHeadings(mdStr);
  const activeId = useScrollSpy(
    headings.map(({ id }) => id),
    {
      rootMargin: '0% 0% -50% 0%',
      threshold: 1,
    },
  );
  return (
    <Nav ref={$dom} className="toc">
      <Aside>
        <h2>目录</h2>
        <ul>
          {headings.map((heading) => (
            <li key={heading.id} className={activeId === heading.id ? 'active' : ''}>
              <a
                style={{
                  marginLeft: `${heading.level - 2}em`,
                  fontWeight: activeId === heading.id ? 'bold' : 'normal',
                }}
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  console.log('heading.id', activeId, heading.id);
                  document.querySelector(`#${heading.id}`)?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </Aside>
    </Nav>
  );
};
