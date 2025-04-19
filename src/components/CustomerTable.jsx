import 'primereact/resources/themes/lara-light-indigo/theme.css';  
import 'primereact/resources/primereact.min.css';                  
import 'primeicons/primeicons.css';  

import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { GoPencil } from 'react-icons/go';
import version from '../assets/version.png';

const CustomerTable = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://67cd6670dd7651e464ee43e8.mockapi.io/customer')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
        .catch(err=>console.log(err))
    },[])

    // ✅ Avatar + Tên
    const customerTemplate = (rowData) => {
        return (
            <div className="flex items-center gap-2">
                <img src={version} width={50} height={50} className="rounded-full" />
                <span className="font-bold text-lg">{rowData.name}</span>
            </div>
        );
    };

    // ✅ Trạng thái có màu nền
    const statusTemplate = (rowData) => {
        let textColor
        let bgColor
        switch (rowData.status) {
            case 'New':
                bgColor='bg-green-300'
                textColor='text-green-500'
                break;
            case 'In progress':
                bgColor='bg-orange-300'
                textColor='text-orange-500'
                break;
            case 'Completed':
                bgColor='bg-blue-300'
                textColor='text-blue-600'
                break;
            default:
                break;
        }
        return (
            <div className={`px-2 py-1 ${textColor} ${bgColor} rounded-md text-center w-fit`}>
                {rowData.status}
            </div>
        );
    };

    // ✅ Nút chỉnh sửa
    const actionTemplate = () => {
        return (
            <Button className="p-button-text">
                <GoPencil size={20} />
            </Button>
        );
    };

    return (
        <div className="card w-full">
            <DataTable value={data} tableStyle={{ minWidth: '50rem'}} className='w-full'>
                <Column style={{ width: '3rem' }} />
                <Column header="CUSTOMER NAME" body={customerTemplate} />
                <Column field="company" header="COMPANY" />
                <Column field="orderValue" header="ORDER VALUE" />
                <Column field="orderDate" header="ORDER DATE" />
                <Column header="STATUS" body={statusTemplate} className='flex items-center justify-center'/>
                <Column body={actionTemplate} style={{ width: '3rem' }} />
            </DataTable>
        </div>
    );
};

export default CustomerTable;
