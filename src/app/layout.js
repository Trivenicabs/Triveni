
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import "@/styles/globals.css";

export const metadata = {
  title: 'Triveni Cabs',
  description: 'Your trusted travel partner for reliable and comfortable transportation solutions',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <Header />
          <div className="">
            {children}
          </div>
          <WhatsAppFloat phoneNumber="7668570551" />
          <Footer />
        </div>
      </body>
    </html>
  );
}