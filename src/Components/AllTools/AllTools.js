import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTools from '../Hooks/useTools';
import ToolsCard from '../ToolsCard/ToolsCard';

const AllTools = () => {
    const [tools, setTools] = useTools();
    const navigate = useNavigate()
    const handlePurchase = id => {
        navigate(`/tools/${id}`)
    }
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 mb-20'>
            {
                tools.map(tool => <ToolsCard handlePurchase={handlePurchase} tool={tool} key={tool._id}></ToolsCard>)
            }
        </div>
    );
};

export default AllTools;