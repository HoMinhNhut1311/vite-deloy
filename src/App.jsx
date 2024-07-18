import "./App.css";
import { LandingPage } from "./client/landingPage/landingPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./client/header/header";
import FoodPage from "./client/food/FoodPage";
// import { DetailFood } from "./client/food/DetailFood";
import Footer from "./client/footer/footer";
import Hotel from "./client/hotel/hotel";
import EnterpriseIndex from "./Enterprises/EnterpriseIndex";
import EtpVehicleList from "./Enterprises/components/List/EtpVehicleList";
import EtpPostList from "./Enterprises/components/List/EtpPostList";
import EtpRestaurantList from "./Enterprises/components/List/EtpRetaunrantList";
import EtpHotelList from "./Enterprises/components/List/EtpHotelList";
import EtpNewsIndex from "./Enterprises/components/News/EtpNewsIndex";
import EtpVehicleHome from "./Enterprises/components/Home/EtpVehicleHome";
import EtpRestaurantHome from "./Enterprises/components/Home/EtpRestaurantHome";
import EtpHotelHome from "./Enterprises/components/Home/EtpHotelHome";
import EtpLogin from "./Enterprises/components/EtpLogin";
import Content from "./components/Content";
import FeedbackPage from "./components/FeedbackPage";
import TransactionPage from "./components/TransactionPage";
import BusinessPage from "./components/BusinessPage";
import StatisticsPage from "./components/StatisticsPage";
import TravelfreePage from "./components/Travelfree";
import HotPage from "./components/HotPage";
import EtpVehicleForm from "./Enterprises/components/Form/EtpVehicleForm";
import EtpBusesForm from "./Enterprises/components/Form/EtpBusesForm";
import EtpBusesList from "./Enterprises/components/List/EtpBusesList";
import EtpRestaurantForm from "./Enterprises/components/Form/EtpRestaurantForm";
import EtpRestaurantDetail from "./Enterprises/components/Detai/EtpRestaurantDetail";
import EtpHotelForm from "./Enterprises/components/Form/EtpHotelForm";
import EtpHotelDetail from "./Enterprises/components/Detai/EtpHotelDetai";
import EtpCarDetail from "./Enterprises/components/Detai/EtpCarDetail";


function App() {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes("/enterprise") && <Header />}
      <Routes>
        <Route path="" element={<LandingPage />} />

        {/* Begin Route Enterprise */}
        <Route path="enterprise" element={<EnterpriseIndex/>}>
            {/* <Route index element={<EtpHome/>}></Route> */}
            
            {/* Route Etp-Vehicle */}
            <Route path="vehicle">
              <Route index element={<EtpVehicleHome/>}></Route>
              <Route path="create" element={<EtpVehicleForm/>}></Route>
              <Route path="list" element={<EtpVehicleList/>}></Route>
              <Route path="buses">
                <Route index element={<EtpBusesList/>}></Route>
                <Route path="create" element={<EtpBusesForm/>}></Route>
              </Route>

              <Route path="detail">
                <Route path="car/:carId" element={<EtpCarDetail/>}></Route>
                <Route path="plane/:planeId"></Route>
              </Route>
            </Route>
            
            {/* Route Etp-Post */}
            <Route path="post">
              <Route path="list" element={<EtpPostList/>}></Route>
            </Route>

            <Route path="login" element={<EtpLogin/>}></Route>

           
            {/* Route Etp-Restaurant */}
            <Route path="restaurant">
              <Route index element={<EtpRestaurantHome/>}></Route>
              <Route path="create" element={<EtpRestaurantForm/>}></Route>
              <Route path="list" element={<EtpRestaurantList/>}></Route>
              <Route path="detail/:rtrId" element={<EtpRestaurantDetail/>}></Route>
            </Route>

            <Route path="news">
              <Route index element={<EtpNewsIndex/>}></Route>
            </Route>
              {/* Route Etp-Hotel */}
              <Route path="hotel">
                <Route index element={<EtpHotelHome/>}></Route>
                <Route path="create" element={<EtpHotelForm/>}></Route>
                <Route path="detail/:hId" element={<EtpHotelDetail/>}></Route>
              <Route path="list" element={<EtpHotelList/>}></Route>
            </Route>

            </Route>

        <Route path="/hotel" element={<Hotel />} />
        <Route path="food">
          <Route path="" element={<FoodPage />}></Route>
          {/* <Route path="detail" element={<DetailFood />} />          */}
        </Route>
      </Routes>

      <Routes>
        <Route path="/admin/transaction" element={<TransactionPage />} />
        <Route path="/admin/content" element={<Content />} />
        <Route path="/admin/business" element={<BusinessPage />} />
        <Route path="/admin" element={<StatisticsPage />} />
        <Route path="/admin/feedback" element={<FeedbackPage />} />
        <Route path="/admin/travelfree" element={<TravelfreePage />} />
        <Route path="/admin/hot" element={<HotPage />} />
      </Routes>

      {!location.pathname.includes("/enterprise") &&
        !location.pathname.includes("/food") && <Footer />}
    </>
  );
}

export default App;
