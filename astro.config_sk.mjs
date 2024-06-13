import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export const locales = {
  root: {
    label: 'English',
    lang: 'en',
  },
  ru: {
    label: 'Русский',
    lang: 'ru',
  },
  de: {
    label: 'Deutsch',
    lang: 'de',
  },
  sk: {
    label: 'Slovensky',
    lang: 'sk',
  },
};
const site = 'https://wiki.cachyos.org/';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    react(),
    starlight({
      lastUpdated: true,
      customCss: ['./src/tailwind.css'],
      components: {
        Head: "./src/components/starlight/Head.astro",
      },
      title: 'CachyOS',
      logo: {
        src: '/src/assets/logo.svg',
      },
      editLink: {
        baseUrl: 'https://github.com/cachyos/wiki/edit/next/',
      },
      social: {
        github: 'https://github.com/cachyos',
        twitter: 'https://twitter.com/cachyos',
        telegram: 'https://t.me/+oR-kWT47vRdmMDli',
        discord: 'https://discord.gg/cachyos-862292009423470592',
        //reddit: 'https://www.reddit.com/r/cachyos',
        //patreon: 'https://www.patreon.com/CachyOS'
      },
      expressiveCode: {
        shiki: {
          langs: [
            'ini'
          ],
        },
      },
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: site + 'og.jpg?v=1',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:image',
            content: site + 'og.jpg?v=1',
          },
        },
      ],
      locales,
      sidebar: [
        {
          label: 'Začíname',
          items: [
            {
              label: 'Prečo CachyOS?',
              link: 'cachyos_basic/why_cachyos',
            },
            {
              label: 'Sťahovanie CachyOS',
              link: 'cachyos_basic/download',
            },
          ],
        },
        {
          label: 'Inštalácia',
          items: [
            {
              label: 'Príprava na inštaláciu',
              link: 'installation/installation_prepare',
            },
            {
              label: 'Boot manažéry',
              link: 'installation/bootmanagers',
            },
            {
              label: 'Súborový systém',
              link: 'installation/filesystem',
            },
            {
              label: 'Snímky obrazovky',
              link: 'installation/screenshots',
            },
            {
              label: 'Desktopové prostredia',
              link: 'installation/desktop_environments',
            },
            {
              label: 'Inštalácia Root',
              link: 'installation/installation_on_root',
            },
            {
              label: 'Inštalácia Dual Boot',
              link: 'installation/installation_dualboot',
            },
            {
              label: 'Inštalácia na T2 MacBook',
              link: 'installation/installation_t2macbook',
            },
            {
              label: 'Inštalácia Root so zabezpečeným spustením',
              link: 'installation/installation_secureboot',
            },
             {
              label: 'Inštalácia Handheld Edition',
              link: 'installation/installation_handheld',
            },
            {
              label: 'Aktualizácia CachyOS',
              link: 'installation/updating_cachyos',
            },
          ],
        },
        {
          label: 'Konfigurácia',
          items: [
            {
              label: 'Nastavenie po inštalácii',
              link: 'configuration/post_install_setup',
            },
            {
              label: 'Dvojité GPU notebooky (NVIDIA + iGPU)',
              link: 'configuration/dual_gpu',
            },
            {
              label: 'Všeobecné systémové úpravy',
              link: 'configuration/general_system_tweaks',
            },
            {
              label: 'Správca jadra',
              link: 'configuration/kernel-manager',
            },
            {
              label: 'Shell (Bash, zsh, fish)',
              link: 'configuration/shell',
            },
            {
              label: 'KDE Plasma',
              link: 'configuration/kde_plasma',
            },
            {
              label: 'GNOME',
              link: 'configuration/gnome',
            },
            {
              label: 'Hyprland',
              link: 'configuration/hyprland',
            },
            {
              label: 'i3',
              link: 'configuration/i3',
            },
            {
              label: 'Qtile',
              link: 'configuration/qtile',
            },
          ],
        },
        {
          label: 'CachyOS Repozitáre',
          items: [
            {
              label: 'Čo sú repozitáre CachyOS?',
              link: 'cachyos_repositories/what_are_the_cachyos_repo',
            },
            {
              label: 'Ako pridať repozitáre CachyOS?',
              link: 'cachyos_repositories/how_to_add_cachyos_repo',
            },
            {
              label: 'PGO, BOLT a iné optimalizácie',
              link: 'cachyos_repositories/other_optimization',
            },
          ],
        },
        {
          label: 'Jadro',
          items: [
            {
              label: 'Funkcie jadra CachyOS',
              link: 'kernel/kernel',
            },
            {
              label: 'sched-ext návod',
              link: 'kernel/sched-ext',
            },
            {
              label: 'Správa modulov (NVIDIA/ZFS)',
              link: 'kernel/modules',
            },
          ],
        },
        {
          label: 'Podpora',
          items: [
            {
              label: 'FAQ',
              link: 'support/faq',
            },
            {
              label: 'Riešenie problémov',
              link: 'support/troubleshooting',
            },
            {
              label: 'Získanie pomoci',
              link: 'support/getting_help',
            },
            {
              label: 'Odoslanie chýb',
              link: 'support/submitting_bugs',
            },
            {
              label: 'Odoslanie požiadaviek na balíčky',
              link: 'support/submitting_package_requests',
            },
          ],
        },
        {
          label: 'Zmenové logy',
          items: [
            {
              label: 'GUI Inštalátor a ISO',
              link: 'changelogs/gui_installer',
            },
            {
              label: 'CLI Inštalátor',
              link: 'changelogs/cli_installer',
            },

          ],
        },
        {
          label: 'Politika',
          items: [
            {
              label: 'Kódex správania',
              link: 'policy/code_of_conduct',
            },
            {
              label: 'Podmienky služby',
              link: 'policy/terms_of_service',
            },
            {
              label: 'Zásady ochrany osobných údajov',
              link: 'policy/privacy_policy',
            },
            {
              label: 'Politika repozitárov',
              link: 'policy/repository_policy',
            },
            {
              label: 'Sociálne siete',
              link: 'policy/social',
            },
            {
              label: 'Darcovstvo',
              link: 'policy/donation',
            },
          ],
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
