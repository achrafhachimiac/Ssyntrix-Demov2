import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function Component() {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 gap-6 bg-gray-100 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 bg-white shadow rounded-lg p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Remittance Data to Central Bank</h2>
          <p className="text-sm text-gray-500">
            Total incidents and corresponding monetary values, with a chart of treated incidents and the time evolution
            of incident resolution.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg shadow">
                <p className="text-sm text-gray-500">Total Incidents</p>
                <h3 className="text-2xl font-bold">1,234</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow">
                <p className="text-sm text-gray-500">Total Value</p>
                <h3 className="text-2xl font-bold">$5,678,901</h3>
              </div>
            </div>
            <LineChart className="h-64" />
          </div>
          <BarChart className="h-64" />
        </div>
      </div>

      <Card title="Incident Reporting to Authorities">
        <LineChart className="h-64" />
      </Card>
      <Card title="Transaction Data">
        <BarChart className="h-64" />
      </Card>
      <Card title="AML/CFT Detection">
        <LineChart className="h-64" />
      </Card>
      <Card title="Customer Due Diligence">
        <StackedBarChart className="h-64" />
      </Card>
      <Card title="Branch-Specific Incidents">
        <BarChart className="h-64" />
      </Card>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
}

function BarChart(props) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Count',
            data: [111, 157, 129, 150, 119, 72],
            backgroundColor: '#2563eb',
          },
        ],
      },
      options: chartOptions,
    });
  }, []);

  return <canvas ref={chartRef} {...props}></canvas>;
}

function LineChart(props) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Desktop',
            data: [43, 137, 61, 145, 26, 154],
            borderColor: '#2563eb',
            fill: false,
          },
          {
            label: 'Mobile',
            data: [60, 48, 177, 78, 96, 204],
            borderColor: '#e11d48',
            fill: false,
          },
        ],
      },
      options: chartOptions,
    });
  }, []);

  return <canvas ref={chartRef} {...props}></canvas>;
}

function StackedBarChart(props) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Desktop',
            data: [111, 157, 129, 187, 119, 20],
            backgroundColor: '#2563eb',
          },
          {
            label: 'Mobile',
            data: [99, 87, 89, 151, 127, 121],
            backgroundColor: '#e11d48',
          },
        ],
      },
      options: {
        ...chartOptions,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef} {...props}></canvas>;
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      titleColor: '#fff',
      bodyColor: '#fff',
      displayColors: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: '#f3f4f6',
      },
    },
  },
};
