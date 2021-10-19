import UseDoctorsInfo from "../../../hooks/UseDoctorsInfo";
import Doctor from "../Doctor/Doctor";


const Doctors = () => {
    const [doctors]=UseDoctorsInfo()
    console.log(doctors);
  
    return (
        <div className="row mx-3">
            {
              doctors?.map(doctor=><Doctor key={doctor.name} doctor={doctor}></Doctor>)  
            }
        </div>
    );
};

export default Doctors;