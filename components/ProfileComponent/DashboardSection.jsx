import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaEye, FaHashtag, FaHeart, FaTrash } from "react-icons/fa";

const DashboardSection = () => {
    return (
        <div>
            <div classNameName="p-5">
                <Tabs>
                    <TabList classNameName="grid grid-cols-4 mb-5 text-center gap-2">
                        <Tab classNameName="bg-transparent border-0 shadow-none text-xl px-2 py-1.5 mx-1">Topics</Tab>
                        <Tab classNameName="bg-transparent border-0 shadow-none text-xl px-2 py-1.5 mx-1">Courses</Tab>
                        <Tab classNameName="bg-transparent border-0 shadow-none text-xl px-2 py-1.5 mx-1">Progress</Tab>
                        <Tab classNameName="bg-transparent border-0 shadow-none text-xl px-2 py-1.5 mx-1">Settings</Tab>
                    </TabList>

                    <TabPanel className="p-5">
                        <div className="overflow-x-auto">
                            <table className="table w-full bg-slate-200">
                                <tbody>
                                    <tr className="bg-slate-200">
                                        <td colSpan={2}>Radiant Academy turned 2 today!</td>
                                        <td>
                                            <span className="flex items-center">
                                                <FaHashtag className="mr-1.5" /> Welcome
                                            </span>
                                        </td>
                                        <td>
                                            <span className="flex items-center">
                                                <FaEye className="mr-1.5" /> 1213
                                            </span>
                                        </td>
                                        <td>
                                            <span className="flex items-center">
                                                <FaHeart className="mr-1.5" /> 304
                                            </span>
                                        </td>
                                        <td className="text-center">Pending</td>
                                        <td><FaTrash /></td>
                                    </tr>
                                    <tr className="bg-slate-200">
                                        <td colSpan={2}>Radiant Academy turned 1 today!</td>
                                        <td>
                                            <span className="flex items-center">
                                                <FaHashtag className="mr-1.5" /> Welcome
                                            </span>
                                        </td>
                                        <td>
                                            <span className="flex items-center">
                                                <FaEye className="mr-1.5" /> 1213
                                            </span>
                                        </td>
                                        <td>
                                            <span className="flex items-center">
                                                <FaHeart className="mr-1.5" /> 304
                                            </span>
                                        </td>
                                        <td className="text-center">Approved</td>
                                        <td><FaTrash /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default DashboardSection;