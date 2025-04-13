import 'primereact/resources/themes/lara-light-indigo/theme.css';  
import 'primereact/resources/primereact.min.css';                  
import 'primeicons/primeicons.css';  

import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { GoPencil } from 'react-icons/go';
import version from '../assets/version.png';
import { classNames } from 'primereact/utils';

const CustomerTable = () => {
    const products = [
        {
            id: 1,
            selected: false,
            name: 'Eliz',
            company: 'AvatarSystems',
            orderValue: '$539',
            orderDate: '10/07/2024',
            status: 'New',
        }
    ];

    // ✅ Cột checkbox đầu tiên
    const checkboxTemplate = (rowData, options) => {
        return <Checkbox onChange={e => console.log('checkbox changed')} checked={rowData.selected}></Checkbox>;
    };

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
        return (
            <div className="px-2 py-1 text-green-400 bg-green-200 rounded-md text-center w-fit">
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
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem'}} className='w-full'>
                <Column body={checkboxTemplate} style={{ width: '3rem' }} />
                <Column header="CUSTOMER NAME" body={customerTemplate} />
                <Column field="company" header="COMPANY" />
                <Column field="orderValue" header="ORDER VALUE" />
                <Column field="orderDate" header="ORDER DATE" />
                <Column header="STATUS" body={statusTemplate} />
                <Column body={actionTemplate} style={{ width: '3rem' }} />
            </DataTable>
        </div>
    );
};

export default CustomerTable;
