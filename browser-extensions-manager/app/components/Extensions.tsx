'use client';
import data from '@/data.json';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const filterType = ['All', 'Active', 'Inactive'];

const Extensions = () => {
    const [activeFilter, setActiveFilter] = useState<'All' | 'Active' | 'Inactive'>('All');
    const [extensions, setExtensions] = useState(data);
    console.log(extensions);

    const filteredData = useMemo(()=>
        extensions.filter((extension) => {
            if (activeFilter === 'Active') return extension.isActive;
            if (activeFilter === 'Inactive') return !extension.isActive;
            return true; // 'all'
    }),[activeFilter,extensions]);
    console.log(filteredData);

    const onCheckedChange = (name: string, isActive: boolean) => {
        const updateData = extensions.map(ext => {
            if (ext.name === name) {
                return { ...ext, isActive: isActive! };
            }
            return ext;
        });
        //console.log(updateData);
        setExtensions(updateData);
    }

    const onRemoveExtension = (name: string) => {
        const updatedData = extensions.filter(ext => ext.name !== name);
        setExtensions(updatedData);
    }

    return (
        <div className="flex flex-col min-h-screen text-[var(--neutral-900)] dark:text-[var(--neutral-0)]">
            <header className="w-full mb-4">
                <div className="container flex flex-col gap-2 sm:flex-row sm:justify-between items-center w-full">
                    <h1 className="text-2xl font-bold">Extensions List</h1>
                    <div className="flex space-x-2">
                        {filterType.map(filter => 
                            (<Button key={filter} className={activeFilter===filter?"focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-offset-1 focus:ring-offset-[var(--neutral-0)] dark:focus:ring-offset-[var(--neutral-900)] focus-visible:ring-[var(--red-500)] dark:focus-visible:ring-[var(--red-400)] bg-[var(--red-500)] dark:bg-[var(--red-400)] hover:bg-[var(--red-400)] dark:hover:bg-[var(--red-500)] hover:border-0 text-[var(--neutral-100)] dark:text-[var(--neutral-900)] py-2 px-4 border-1 border-[var(--neutral-200)] dark:border-[var(--neutral-600)] rounded-full":"focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-offset-1 focus:ring-offset-[var(--neutral-0)] dark:focus:ring-offset-[var(--neutral-900)] dark:focus:bg-[var(--neutral-600)] focus-visible:ring-[var(--red-500)] dark:focus-visible:ring-[var(--red-400)] bg-[var(--neutral-0)] dark:bg-[var(--neutral-800)] border-1 border-[var(--neutral-200)] dark:border-[var(--neutral-600)] hover:bg-[var(--neutral-200)] dark:hover:bg-[var(--neutral-600)] text-[var(--neutral-900)] hover:text-[var(--neutral-600)] dark:text-[var(--neutral-100)] hover:border-0 py-2 px-4 rounded-full"} onClick={() => setActiveFilter(filter as typeof activeFilter)}>
                                {filter}
                            </Button>))
                        }
                    </div>
                </div>
            </header>
            {/* Content goes here */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-4 items-stretch text-[var(--gradient-900)] dark:text-[var(--gradient-100)]'>
                {filteredData.map((ext) => (
                    <Card key={ext.name} className="flex flex-col justify-between p-4 rounded-lg shadow-lg border-1 bg-[var(--neutral-0)] border-[var(--neutral-200)] dark:bg-[var(--neutral-800)] dark:border-[var(--neutral-600)] overflow-hidden h-40">
                        <div className='flex w-full gap-3'>
                            <div className='max-h-10 max-w-10'>
                                <Image alt={`${ext.name} logo`} src={ext.logo} width={100} height={100}></Image>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <CardTitle>{ext.name}</CardTitle>
                                <CardDescription className='line-clamp-2'>{ext.description}</CardDescription>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-2'>
                            <Button className='focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-offset-1 focus:ring-offset-[var(--neutral-0)] dark:focus:ring-offset-[var(--neutral-900)] dark:focus:bg-[var(--neutral-600)] focus-visible:ring-[var(--red-500)] dark:focus-visible:ring-[var(--red-400)] bg-[var(--neutral-0)] dark:bg-[var(--neutral-800)] border-1 border-[var(--neutral-200)] dark:border-[var(--neutral-600)] hover:bg-[var(--red-500)] dark:hover:bg-[var(--red-400)] hover:border-0 text-[var(--neutral-900)] hover:text-[var(--neutral-100)] dark:text-[var(--neutral-100)] dark:hover:text-[var(--neutral-900)] rounded-full text-sm' onClick={() => onRemoveExtension(ext.name)}>Remove</Button>
                            <Switch className='focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-offset-1 focus:ring-offset-[var(--neutral-0)] dark:focus:ring-offset-[var(--neutral-900)] focus-visible:ring-[var(--red-500)] dark:focus-visible:ring-[var(--red-400)] data-[state=checked]:bg-[var(--red-500)] hover:data-[state=checked]:bg-[var(--red-400)] dark:data-[state=checked]:bg-[var(--red-400)] dark:hover:data-[state=checked]:bg-[var(--red-500)] data-[state=unchecked]:bg-[var(--neutral-300)] dark:data-[state=unchecked]:bg-[var(--neutral-600)] hover:data-[state=unchecked]:bg-[var(--neutral-600)] dark:hover:data-[state=unchecked]:bg-[var(--neutral-700)]' checked={ext.isActive} onCheckedChange={(checked) => onCheckedChange(ext.name, checked)}></Switch>
                        </div>
                    </Card>
                ))}
                
            </div>
        </div>
    );
}

export default Extensions;