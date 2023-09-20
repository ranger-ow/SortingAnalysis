'use client'
import { useEffect, useMemo, useState } from 'react';
import React from 'react';
import useArray from './customArray'


export default function Home() {
  const { ispending, shellSort, bubbleSort, insertionSort, selectionSort, quickSort, handleArr, setArr, arr, merge, mergeSort, handleMerge, handlequick, size, changeSize } = useArray([]);
  let counter = 0;

  return (
    <>
      <div className='flex flex-row gap-2 h-8 mt-2 justify-center '>
        <button className='font-semibold border-black border-[2px] cursor-pointer bg-red-500 text-white' onClick={handleArr}>Generate-Random Array</button>
        <button className='font-semibold border-black border-[2px] bg-slate-900 text-white' onClick={selectionSort}>Selection Sort</button>
        <button className='font-semibold border-black border-[2px] bg-slate-800 text-white' onClick={handlequick}>Quick Sort</button>
        <button className='font-semibold border-black border-[2px] bg-slate-700 text-white' onClick={insertionSort}>Insertion Sort</button>
        <button className='font-semibold border-black border-[2px] bg-slate-600 text-white' onClick={bubbleSort}>Bubble Sort</button>
        <button className='font-semibold border-black border-[2px] bg-slate-500 text-white' onClick={handleMerge}>Merge Sort</button>
        <button className='font-semibold border-black border-[2px] bg-slate-700 text-white' onClick={shellSort}>Shell Sort</button>
        <button className='font-semibold border-black border-[2px] bg-slate-900 text-white' onClick={changeSize}>Change Size</button>
      </div>
      <div className="bar-container" id="barsContainer">
        {
          ispending ? "Loading..." :
            arr.map((ele) => {
              counter = counter + 1;
              return (
                <div key={`id${counter}`} className='flex flex-col bar justify-start w-2' style={{ height: `${ele * size}px`, color: 'white' }}>
                  <h1 className=' relative justify-centre ml-5  '>{ele}</h1>
                </div>
              )
            })
        }
      </div>
      
    </>
  )
}

