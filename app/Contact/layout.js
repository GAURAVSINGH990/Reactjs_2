export const metaData = {
  title : 'hello',
  description : 'Generated By create next app',

}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
