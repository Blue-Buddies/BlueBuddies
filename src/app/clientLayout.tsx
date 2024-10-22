// app/client-layout.tsx (클라이언트 컴포넌트)
'use client';

import { Provider } from "react-redux";
import { store } from "@/stores/store/store";

export default function ClientLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <body className="antialiased">{children}</body>
    </Provider>
  );
}