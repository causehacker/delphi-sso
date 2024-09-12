"use client";

import Script from "next/script";

export default function Embed() {
  const embed_id = process.env.NEXT_PUBLIC_EMBED_ID;

  return (
    <>
      <section id="delphi-container" style={{
        display: 'flex',
        width: '95dvw',
        height: '90dvh',
        padding: 0,
        margin: 0,
      }}>
        <iframe
          id="delphi-frame"
          allow="camera *; microphone *"
          style={{
            border: 'none',
            flexGrow: 1,
            width: '95dvw',
            height: '90dvh',
          }}
        />
      </section>
      <Script
        id="delphi-script"
        dangerouslySetInnerHTML={{
          __html: `window.delphi = { config: "${embed_id}", type: "page", container: { width: "95dvw", height: "90dvh", }, };`,
        }}
      />
      <Script
        id="delphi-loader"
        dangerouslySetInnerHTML={{
          __html: `!function(){var e=window,t=document,n=function(){if(!e.delphi||"page"!==e.delphi.type&&"bubble"!==e.delphi.type)throw new Error("Invalid or missing delphi type. Must be 'page' or 'bubble'.");var n=t.createElement("script");n.type="text/javascript",n.async=!0,n.defer=!0,n.src="page"===e.delphi.type?"https://embed.delphi.ai/bundle.js":"https://embed.delphi.ai/widget.js",e.delphi&&e.delphi.config&&n.setAttribute("data-config",e.delphi.config);var i=t.getElementById("delphi-script");if(!i)throw new Error("Script tag with id 'delphi-script' not found.");i.parentNode.insertBefore(n,i)};"complete"===t.readyState?n():e.attachEvent?e.attachEvent("onload",n):e.addEventListener("load",n,!1)}();`,
        }}
      />
    </>
  );
}
