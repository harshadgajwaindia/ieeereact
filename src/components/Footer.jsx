import React from "react";

function Footer()
{
  return(
    <>
    <div>
<div className = "flex gap-1 p-14 text-2xl">
    <p>Social</p>
    <p className = "text-sky-800">Events</p>
    </div>
    <img className="w-full h-auto" src="https://i.imgur.com/oib4Jsk.jpeg"/>
    </div>
     <div className = "bg-sky-600 justify-center text-center" >
    <div>
    <img className ="h-24 w-28 relative left-32 p-3 object-center " src ="https://ieeebombay.org/wp-content/uploads/2022/09/IEEE-BS-Logo.png" alt ="img"/>
    <p>IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
    <p>GST: 27AAAAI6455J1ZG</p>
<p>TAN : MUMI17310G</p>
<p>PAN : AAAAI6455J</p>
    </div>
    <div className ="relative top-4 bg-sky-600 p-7">
<p className="font-bold">SECTION</p>
<p>Newsletter</p>
<p>Policies</p>
<p>Bye-Laws</p>
<p>Execom MoM</p>
<p>A/S/EGM MoM</p>
    </div>
    <div className=" relative top-4 bg-sky-600 p-7">
<p className ="font-bold">GET INVOLVED</p>
<p>Join/Renew</p>
<p>Global Benefits</p>
<p>Standards</p>
<p>Publishing</p>
<p>Volunteer</p>
</div>
<div className ="relative top-4 bg-sky-600 p-7">
<p className ="font-bold">CONNECT WITH IEEE</p>
<p>IEEE Collabratec</p>
<p>Careers at IEEE</p>
<p>IEEE Newsroom</p>
<p>IEEE Media Kit</p>
<p>IEEE Learning Network</p>
    </div>
    </div>
    </>
    
    )
}
export default Footer