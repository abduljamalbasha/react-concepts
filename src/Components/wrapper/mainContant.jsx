/* This example requires Tailwind CSS v2.0+ */
import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import navigation from '../../config/data/navigation'

export const Content = ({children }) => {
  const location = useLocation()
  const { pathname } = location
 
  let activeWorkflowName = {}
  useEffect(() => {
    activeWorkflowName = navigation.find(
    (item) => item.href === pathname,
  )
  },[]);
  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl text-left font-semibold text-gray-900">
            {activeWorkflowName && activeWorkflowName.name}
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="mb-8 p-2 w-full flex flex-wrap">
              <div className="w-full md:w-full border-4 border-dashed border-gray-200 rounded-lg bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">                
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
