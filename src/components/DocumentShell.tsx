import type { CSSProperties, ReactNode } from "react";
import { Manrope, Unbounded } from "next/font/google";
import Script from "next/script";
import type { LandingConfig } from "@/content";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export function DocumentShell({
  config,
  children,
}: {
  config: LandingConfig;
  children: ReactNode;
}) {
  const themeStyle = {
    "--game-sky": config.theme.sky,
    "--game-ore": config.theme.ore,
    "--game-sand": config.theme.sand,
    "--game-grass": config.theme.grass,
  } as CSSProperties;

  return (
    <html
      lang={config.locale}
      className={`${manrope.variable} ${unbounded.variable}`}
      style={themeStyle}
    >
      <body>
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j=0;j<document.scripts.length;j++){
                if(document.scripts[j].src===r){return;}
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=111522061','ym');
            ym(111522061,'init',{
              ssr:true,
              webvisor:true,
              clickmap:true,
              ecommerce:'dataLayer',
              referrer:document.referrer,
              url:location.href,
              accurateTrackBounce:true,
              trackLinks:true
            });
          `}
        </Script>
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/111522061"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
