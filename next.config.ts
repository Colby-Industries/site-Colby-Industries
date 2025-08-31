import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Enable static exports.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: 'export',

  /**
   * Set base path. This is usually the slug of your repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: '/site-Colby-Industries',

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },

  /**
   * Turbopack equivalent rules so SVGR also works when running with --turbo.
   */
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeAttrs',
                    params: { attrs: '(stroke)' },
                  },
                ],
              },
              titleProp: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },

  /**
   * Webpack configuration so SVGR also works during `next build`.
   */
  webpack: (config) => {
    const maybeSvgRule = (config.module.rules as any[]).find((rule) => {
      try {
        return Boolean(rule.test && rule.test.test && rule.test.test('.svg'));
      } catch {
        return false;
      }
    });
    if (maybeSvgRule) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (maybeSvgRule as any).exclude = [/\.svg$/i];
    }

    config.module.rules.push(
      {
        test: /\.svg$/i,
        resourceQuery: /url/, // e.g. import icon from './icon.svg?url'
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // without ?url, use SVGR
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeAttrs',
                    params: { attrs: '(stroke)' },
                  },
                ],
              },
              titleProp: true,
            },
          },
        ],
      },
    );

    return config;
  },
};

export default nextConfig;
