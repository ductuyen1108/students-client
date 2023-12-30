import './globals.css';
import ThemeMui from '@/common/styles/overrides/theme';
import QueryClientProviders from '@/common/react-query/Provider';
import { ReduxProviders } from '@/common/redux/provider';
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import NotistackProvider from '@/common/components/NotistackProvider';
import Localization from '@/common/localization/Localization';

export const metadata: Metadata = {
  title: 'DT Travel',
  description: 'Traveling!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeMui>
        <QueryClientProviders>
          <ReduxProviders>
            <NotistackProvider>
              <Localization>
                <body>
                  <main>{children}</main>
                </body>
              </Localization>
            </NotistackProvider>
          </ReduxProviders>
        </QueryClientProviders>
      </ThemeMui>
    </html>
  );
}
