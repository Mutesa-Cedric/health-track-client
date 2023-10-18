import BarChart from "../components/charts/BarChart";
import DoughnutChart from "../components/charts/DoughnutChart";
import PieChart from "../components/charts/PieChart";

export default function Analytics() {
    return (
        <div className="w-full space-y-5 px-4">
            <div className="space-y-1">
                <h2 className="text-lg font-medium text-gray-700">Analytics</h2>
                <p className="text-gray-500">This page contains Many charts.</p>
            </div>
            <div className="space-y-5">
                <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <h2 className="text-xl">Pie Chart</h2>
                        <PieChart />
                    </div>
                    <div>
                        <h2 className="text-xl">Doughut Chart</h2>
                        <DoughnutChart />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl">Bar chart</h2>
                    <BarChart />
                </div>
            </div>
        </div>
    )
}
