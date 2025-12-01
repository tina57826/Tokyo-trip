import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { BudgetCategory } from '../types';

interface BudgetChartProps {
    data: BudgetCategory[];
}

const BudgetChart: React.FC<BudgetChartProps> = ({ data }) => {
    const total = data.reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">預算估算</h3>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data as any[]}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="amount"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value: number) => `¥${value.toLocaleString()}`} />
                        <Legend iconType="circle" layout="vertical" verticalAlign="bottom" align="center" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="text-center mt-4">
                <span className="text-sm text-gray-500">總計預估</span>
                <p className="text-2xl font-bold text-indigo-japan">¥{total.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default BudgetChart;