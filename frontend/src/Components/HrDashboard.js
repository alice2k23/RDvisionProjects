import React from 'react';

function HrDashboard() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Total Posted Jobs */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Total Posted Jobs</h2>
                    <div className="flex items-center justify-center">
                        <span className="text-4xl font-semibold">20</span>
                    </div>
                </div>

                {/* Total Applicants */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Total Applicants</h2>
                    <div className="flex items-center justify-center">
                        <span className="text-4xl font-semibold">20</span>
                    </div>
                </div>

                {/* Hiring Process Overview */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Hiring Process Overview</h2>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-semibold">New Applications</span>
                        <span className="text-lg">10</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-semibold">In Review</span>
                        <span className="text-lg">5</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-semibold">Interviews Scheduled</span>
                        <span className="text-lg">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Offers Extended</span>
                        <span className="text-lg">2</span>
                    </div>
                </div>

                {/* Hiring Status */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Hiring Status</h2>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-semibold">Positions Filled</span>
                        <span className="text-lg">5</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-semibold">Positions Pending</span>
                        <span className="text-lg">10</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Positions Closed</span>
                        <span className="text-lg">5</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HrDashboard;
