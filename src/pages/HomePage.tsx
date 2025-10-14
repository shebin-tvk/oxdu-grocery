import Banner from "../components/banner/banner"
import PageHeader from "../components/Header/PageHeader"
import CategorySlider from "../components/category/CategorySlider"

const HomePage = () => {
  return (
    <div>
        <PageHeader/>
        <Banner/>
        <CategorySlider/>
    </div>
  )
}

export default HomePage