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
import { EditModal } from './Modal';

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
    const [isOpenEditModal,setIsOpenEditModal]=useState(false)
    const [editRowData,setEditRowData]=useState(null)
    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [company,setCompany]=useState('')
    const [orderValue,setOrderValue]=useState('')
    const [orderDate,setOrderDate]=useState('')
    const [status,setStatus]=useState('')

    const EditHandler=async()=>{
        fetch(`https://67cd6670dd7651e464ee43e8.mockapi.io/customer/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:name,
                company:company,
                orderValue:orderValue,
                orderDate:orderDate,
                status:status
            })
        })
        .then(res=>{
            if(!res.ok)
                throw new Error('update failed')
            return res.json()
        })
        .then(data=>console.log('update successful:',data))
        .catch(err=>{
            console.log('Error: ',err);
        })
    }
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
    const actionTemplate = (rowData) => {
        return (
            <Button className="p-button-text" onClick={()=>{
                    setIsOpenEditModal(true)
                    setId(rowData.id)
                    setName(rowData.name)
                    setCompany(rowData.company)
                    setOrderValue(rowData.orderValue)
                    setOrderDate(rowData.orderDate)
                    setStatus(rowData.status)
                }}>
                <GoPencil size={20} />
            </Button>
        );
    };

    return (
        <div className="card w-full">
            <EditModal isOpen={isOpenEditModal} onClose={()=>setIsOpenEditModal(false)}>
                <h2 className="text-xl font-semibold mb-4">Edit</h2>
                <div className='flex flex-col justify-start items-start gap-4'>
                    <div className='flex items-center justify-start'>
                        <p className='w-[300px]'>Customer name</p>
                        <input type='text' onChange={(e)=>setName(e.target.value)} className='border w-full rounded-lg p-2' value={name}/>
                    </div>
                    <div className='flex items-center justify-start'>
                        <p className='w-[300px]'>Company</p>
                        <input type='text' onChange={(e)=>setCompany(e.target.value)} className='border w-full rounded-lg p-2' value={company}/>
                    </div>
                    <div className='flex items-center justify-start'>
                        <p className='w-[300px]'>Order value</p>
                        <input type='text' onChange={(e)=>setOrderValue(e.target.value)} className='border w-full rounded-lg p-2' value={orderValue}/>
                    </div>
                    <div className='flex items-center justify-start'>
                        <p className='w-[300px]'>Order date</p>
                        <input type='text' onChange={(e)=>setOrderDate(e.target.value)} className='border w-full rounded-lg p-2' value={orderDate}/>
                    </div>
                    <div className='flex items-center justify-start'>
                        <p className='w-[300px]'>Status</p>
                        <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                            <option value="New">New</option>
                            <option value="In progress">In progress</option>
                            <option value="Completed">Completed</option>
                        </select>


                    </div>
                </div>
                <button
                    onClick={() => {
                        EditHandler()
                        setIsOpenEditModal(false)         
                    }}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
                >
                    Save
                </button>
            </EditModal>
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
