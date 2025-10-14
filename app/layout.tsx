import '@gfazioli/mantine-marquee/styles.layer.css';
import '@gfazioli/mantine-text-animate/styles.layer.css';
import '@mantine/core/styles.layer.css';

import { Layout } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { MantineFooter, MantineNavBar } from '@/components';
import config from '@/config';
import { theme } from '../theme';

import './global.css';

export const metadata = config.metadata;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap();
  const { nextraLayout, head } = config;

  return (
    <html lang="ja" dir="ltr" {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript
          nonce={head.mantine.nonce}
          defaultColorScheme={head.mantine.defaultColorScheme}
        />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme={head.mantine.defaultColorScheme}>
          <Layout
            navbar={<MantineNavBar />}
            pageMap={pageMap}
            docsRepositoryBase={nextraLayout.docsRepositoryBase}
            footer={<MantineFooter />}
            sidebar={nextraLayout.sidebar}
            editLink="このページを編集"
            feedback={{
              content: 'フィードバックを送信',
              labels: 'feedback',
            }}
            toc={{
              title: '目次',
              backToTop: 'トップに戻る',
            }}
          >
            {children}
          </Layout>
        </MantineProvider>
      </body>
    </html>
  );
}
