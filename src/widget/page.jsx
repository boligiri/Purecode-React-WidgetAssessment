import BreadcrumbAdmin from "../components/BreadcrumbAdmin";
// pages
import IconWidgets from "./IconWidget";
import NormalWidgets from "./NormalWidgets";
import CardWidget from "./CardWidget";
import ChartWidget from "./ChartWidget";
import ImageCardWidget from "./ImageCardWidget";
import TeamWidget from "./TeamWidget";
// css
import '../assets/css/style.css'
// import '../assets/css/custom/_apex-charts.css'
// import '../assets/css/custom/_data-table.css'
// import '../assets/css/custom/_filepond.css'
// import '../assets/css/custom/_flatpickr.css'
// import '../assets/css/custom/_form.css'
// import '../assets/css/custom/_helper.css'
// import '../assets/css/custom/_navbar.css'
// import '../assets/css/custom/_quill.css'
// import '../assets/css/custom/_react-select.css'
// import '../assets/css/custom/_reboot.css'
// import '../assets/css/custom/_scrollbar.css'
// import '../assets/css/custom/_simplebar.css'
// import '../assets/css/custom/_swiper.css'
// import '../assets/css/custom/style.css'

// data
import { cardWidget, chartWidget, iconWidget, valueWidget } from "./data";

const Widget = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Widget" subtitle="Admin" />
        <div className="space-y-5">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5">
            {(iconWidget || []).map((value, idx) => {
              return (
                <IconWidgets
                  key={idx}
                  text={value.text}
                  amount={value.amount}
                  price={value.price}
                  icon={value.icon}
                  variant1={value.variant1}
                  variant2={value.variant2}
                />
              );
            })}
          </div>

          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5">
            {(valueWidget || []).map((value, idx) => {
              return (
                <NormalWidgets
                  key={idx}
                  text={value.text}
                  amount={value.amount}
                  price={value.price}
                  color={value.color}
                  width={value.width}
                  subText={value.subText}
                />
              );
            })}
          </div>

          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5">
            {(cardWidget || []).map((value, idx) => {
              return (
                <CardWidget
                  key={idx}
                  text={value.text}
                  amount={value.amount}
                  price={value.price}
                  color={value.color}
                  chartColor={value.chartColor}
                  percentage={value.percentage}
                />
              );
            })}
          </div>

          <div className="grid xl:grid-cols-3 md:grid-col-2 gap-5">
            {(chartWidget || []).map((value, idx) => {
              return (
                <ChartWidget
                  key={idx}
                  text={value.text}
                  amount={value.amount}
                  price={value.price}
                  chartColor={value.chartColor}
                />
              );
            })}
          </div>
        </div>

        <h4 className="text-lg py-6 text-default-700">Profile/User</h4>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5">
          <ImageCardWidget />
        </div>

        <h4 className="text-lg mb-3 pb-1 text-default-700">Team</h4>
        <div className="space-y-5">
          <TeamWidget />
        </div>
      </div>
    </div>
  );
};

export default Widget;
