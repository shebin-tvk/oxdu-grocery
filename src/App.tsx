import Footer1 from "./components/shared/Footer/Footer1"
import Footer2 from "./components/shared/Footer/Footer2"
import Footer3 from "./components/shared/Footer/Footer3"
import PageHeader from "./components/shared/Header/PageHeader"
import HomePage from "./pages/HomePage"

function App() {
  

  return (
    <>
      <div>
        <PageHeader />
        <HomePage />
        <div className="hidden lg:block">
          <Footer1 />
          <Footer2 />
          <Footer3 />
        </div>
      </div>
    </>
  );
}

export default App
