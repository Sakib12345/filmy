import React from 'react';

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center w-100">
            <div className="col-md-4 offset-md-1">

                <h1 style={{ color: '#FFF8DC' }}>Feel The Reel</h1>

                <h5 className="text-danger mb-3 mt-3">Filmy is a Multimedia Solution Company</h5>

                <button style={{ backgroundImage: 'linear-gradient(to right, #8B0000 , #DC143C)', fontWeight: '600' }} className="btn btn-default text-white">Choose Your Service</button>
            </div>

            <div className="col-md-6">
                
                <iframe width="820" title="chaya" height="480" src="https://www.youtube.com/embed/0X-yhuUlruQ" ></iframe>
            </div>
        </main>
    );
};

export default HeaderMain;