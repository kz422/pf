import '../styles/globals.css'
import InfiniteLooper from './components/InfiniteLooper'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <InfiniteLooper speed={1} direction="right">
          <div className="contentBlock contentBlock--two">
            <i>PINO 🚀</i>
          </div>
        </InfiniteLooper>
        {children}
        <footer>
          <InfiniteLooper speed={1} direction="left">
            <div className="contentBlock contentBlock--two">
              <i>PINO 🚀</i>
            </div>
          </InfiniteLooper>
        </footer>
      </body>
    </html>
  )
}
