
import React from "react";
import { useLoaderData } from "react-router-dom";
 import {
      LineChart,
      Line,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      Legend,
     
    
    } from "recharts";

export default function Statics (){
    const data=useLoaderData();
    return (
        <div className="flex justify-center flex-col items-center mt-40  mr-10">

            <div className="m-4">
               <LineChart 
               width={400}
               height={300}
               data={data.data}
               margin={{
                  top: 20,
                  right: 20,
                  bottom:5}}
               >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" />
                 <YAxis />
                 <Tooltip />
                 <Line
                 type="monotone"
                 dataKey="total"
                 stroke="#8884d8"
                 activeDot={{ r: 8 }}
                 ></Line>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
               </LineChart>
            </div>
        </div>
    )
}