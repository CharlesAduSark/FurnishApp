import { HeartHandshake } from "lucide-react"
import K from "../../../constants"

const Services = () => {
  return (
    <div className="grid grid-cols-4 gap-x-4">
      {
        K.SERVICES.map(
          (service,index) => {

            return <div key={index} style={{backgroundColor: service.bgcolour}}>
              <span><HeartHandshake /></span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
      }
    )
  }
  </div>
  )
}

export default Services