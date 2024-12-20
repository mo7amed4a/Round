"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body className="text-center">
        <div className="bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="mb-4 text-6xl font-semibold text-primary">404</h1>
              <p className="mb-4 text-lg text-gray-500">
                Oops! Looks like you&apos;re lost.
              </p>
              <div className="animate-bounce">
                <svg
                  className="mx-auto h-16 w-16 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <p className="mt-4 text-primary">
                Let&apos;s get you back{" "}
                <Link href="/" className="text-blue-500">
                  home
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
