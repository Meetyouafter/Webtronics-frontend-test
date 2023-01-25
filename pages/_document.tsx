import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="background_blur" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
