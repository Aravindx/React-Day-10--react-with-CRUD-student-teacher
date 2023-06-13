import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Card({title,value,color,icon,isprogress}) {
  return (
    <>
    <div class="col-xl-3 col-md-6 mb-4 " style={{marginLeft:"50px"}}>
    <div class={`card  border-left-${color} shadow h-100 py-2`} >
        <div class="card-body">
            <div class="row no-gutters align-items-center">
                <div class="col " >
                    <div class={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>
                       {title}</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">{value}
                    </div>
                   {isprogress ?
                
                <div class="col">
                                                    <div class="progress progress-sm mr-2">
                                                        <div class="progress-bar bg-info" role="progressbar"
                                                            style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                : null }

                     </div>                           
                <div class="col-auto">
                    <FontAwesomeIcon icon={icon} size="2x"/>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Card
