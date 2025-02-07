import type { Files } from '@/types/files';

export const FILES: Files = {
  name: 'root',
  type: 'directory',
  childs: [
    {
      name: 'src',
      type: 'directory',
      childs: [
        {
          name: 'components',
          type: 'directory',
          childs: [
            {
              name: 'common',
              type: 'directory',
              childs: [
                { name: 'Button.tsx', type: 'file' },
                { name: 'Input.tsx', type: 'file' },
                { name: 'Modal.tsx', type: 'file' },
                { name: 'Spinner.tsx', type: 'file' },
                { name: 'Card.tsx', type: 'file' },
                { name: 'index.ts', type: 'file' },
              ],
            },
            {
              name: 'layout',
              type: 'directory',
              childs: [
                { name: 'Header.tsx', type: 'file' },
                { name: 'Footer.tsx', type: 'file' },
                { name: 'Sidebar.tsx', type: 'file' },
                { name: 'Navigation.tsx', type: 'file' },
                { name: 'index.ts', type: 'file' },
              ],
            },
            {
              name: 'features',
              type: 'directory',
              childs: [
                {
                  name: 'auth',
                  type: 'directory',
                  childs: [
                    { name: 'LoginForm.tsx', type: 'file' },
                    { name: 'RegisterForm.tsx', type: 'file' },
                    { name: 'AuthContext.tsx', type: 'file' },
                    { name: 'useAuth.ts', type: 'file' },
                    { name: 'types.ts', type: 'file' },
                  ],
                },
                {
                  name: 'dashboard',
                  type: 'directory',
                  childs: [
                    { name: 'DashboardView.tsx', type: 'file' },
                    { name: 'AnalyticsChart.tsx', type: 'file' },
                    { name: 'StatisticsCard.tsx', type: 'file' },
                    { name: 'RecentActivity.tsx', type: 'file' },
                  ],
                },
                {
                  name: 'settings',
                  type: 'directory',
                  childs: [
                    { name: 'SettingsPanel.tsx', type: 'file' },
                    { name: 'ProfileSettings.tsx', type: 'file' },
                    { name: 'SecuritySettings.tsx', type: 'file' },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'hooks',
          type: 'directory',
          childs: [
            { name: 'useLocalStorage.ts', type: 'file' },
            { name: 'useDebounce.ts', type: 'file' },
            { name: 'useMediaQuery.ts', type: 'file' },
            { name: 'usePagination.ts', type: 'file' },
          ],
        },
        {
          name: 'utils',
          type: 'directory',
          childs: [
            { name: 'api.ts', type: 'file' },
            { name: 'formatting.ts', type: 'file' },
            { name: 'validation.ts', type: 'file' },
            { name: 'constants.ts', type: 'file' },
          ],
        },
        {
          name: 'styles',
          type: 'directory',
          childs: [
            { name: 'global.css', type: 'file' },
            { name: 'variables.css', type: 'file' },
            { name: 'animations.css', type: 'file' },
          ],
        },
        { name: 'index.tsx', type: 'file' },
        { name: 'App.tsx', type: 'file' },
        { name: 'routes.tsx', type: 'file' },
      ],
    },
    {
      name: 'public',
      type: 'directory',
      childs: [
        { name: 'index.html', type: 'file' },
        { name: 'favicon.ico', type: 'file' },
        { name: 'robots.txt', type: 'file' },
        {
          name: 'assets',
          type: 'directory',
          childs: [
            {
              name: 'images',
              type: 'directory',
              childs: [
                { name: 'logo.svg', type: 'file' },
                { name: 'hero.png', type: 'file' },
                { name: 'placeholder.jpg', type: 'file' },
              ],
            },
            {
              name: 'fonts',
              type: 'directory',
              childs: [
                { name: 'Inter-Regular.woff2', type: 'file' },
                { name: 'Inter-Medium.woff2', type: 'file' },
                { name: 'Inter-Bold.woff2', type: 'file' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'tests',
      type: 'directory',
      childs: [
        { name: 'setup.ts', type: 'file' },
        {
          name: 'unit',
          type: 'directory',
          childs: [
            { name: 'Button.test.tsx', type: 'file' },
            { name: 'Modal.test.tsx', type: 'file' },
            { name: 'useAuth.test.ts', type: 'file' },
          ],
        },
        {
          name: 'integration',
          type: 'directory',
          childs: [
            { name: 'auth.test.tsx', type: 'file' },
            { name: 'dashboard.test.tsx', type: 'file' },
          ],
        },
      ],
    },
    { name: 'package.json', type: 'file' },
    { name: 'tsconfig.json', type: 'file' },
    { name: '.eslintrc.js', type: 'file' },
    { name: '.prettierrc', type: 'file' },
    { name: '.gitignore', type: 'file' },
    { name: 'README.md', type: 'file' },
  ],
};
