import React from 'react'

function Header() {
    return (
        <div className="bg-dark text-light">
            <div className='d-flex justify-content-end' >
                <img className='p-2 align-middle' style={{height: "50px"}} src='https://cdn.iconscout.com/icon/premium/png-128-thumb/message-1889549-1597609.png' />
                <div className='p-2 align-middle'>info@bytequests.com</div>
                <img className='p-2 align-middle' style={{height: "50px"}} src='https://cdn.iconscout.com/icon/premium/png-128-thumb/call-1889545-1597605.png' />
                <div  className='p-2 align-middle'>+91 9711999770, +1 833-880-3355</div>
            </div>
        </div>  
    )
}

export default Header
