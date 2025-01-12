import React from 'react';
import PetCard from '../PetCard/PetCard';

const Home = () => {
    return (
        <div >
            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg;grid-cols-3 gap-6">
                <PetCard></PetCard>
            </div>
        </div>
    );
};

export default Home;