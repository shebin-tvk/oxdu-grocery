import Banner from "../components/HomePage/banner/banner"
import CategorySlider from "../components/HomePage/category/CategorySlider"
import FeatureSlider from "../components/HomePage/Featured Products/featureSlide"
import Offers from "../components/HomePage/banner/Offers"
import DailyBestSells from "../components/HomePage/DailyBestSells/DailyBestSells"

const HomePage = () => {
  return (
    <div>
        <Banner/>
        <CategorySlider/>
        <FeatureSlider/>
        <Offers/>
        <DailyBestSells/>
    </div>
  )
}

export default HomePage