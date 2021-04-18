import React from 'react';

const Porfolio = () => {
    return (
        <section >
            <h2 class="mt-5 mb-5 text-uppercase text-center">Portfolio</h2>
            <div className='d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <iframe width="420" title="chaya" height="220" src="https://www.youtube.com/embed/WnUCoF6a5FM" ></iframe>
                    </div>
                    <div className='col-md-4'>
                        <iframe width="420" title="chaya" height="220" src="https://www.youtube.com/embed/rA6f_bUBTcg" ></iframe>
                    </div>
                    <div className='col-md-4'>
                        <iframe width="420" title="chaya" height="220" src="https://www.youtube.com/embed/HRql9w4Z3Tc" ></iframe>
                    </div>
                </div>
                
            </div>

        </section>
    );
};

export default Porfolio;