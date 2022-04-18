import React from "react";
import arick from "../../images/Arick30.jpg";

const About = () => {
  return (
    <div className=" ">
      <img className="w-48 mx-auto rounded-xl mb-3" src={arick} alt="" />
      <table className="text-left mx-auto text-white table-auto border-separate border border-slate-500">
        <thead>
          <tr>
            <th className="border text-xl font-medium border-slate-600">
              Title
            </th>
            <th className="border border-slate-600">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border text-xl font-medium border-slate-600">
              Name :
            </td>
            <td className="border border-slate-600">Md. Arick Hasan Rana</td>
          </tr>
          <tr>
            <td className="border text-xl font-medium border-slate-600">
              Father's Name :
            </td>
            <td className="border border-slate-600">Md. Esrafil Hossen </td>
          </tr>
          <tr>
            <td className="border text-xl font-medium border-slate-600">
              Mother's Name :
            </td>
            <td className="border border-slate-600">Nasima Akhter </td>
          </tr>
          <tr>
            <td className="border text-xl font-medium border-slate-600">
              Date of Birth :
            </td>
            <td className="border border-slate-600">February 7, 1995</td>
          </tr>
          <tr>
            <td className="border text-xl font-medium border-slate-600">
              Gender :
            </td>
            <td className="border border-slate-600">Male </td>
          </tr>
          <tr>
            <td className="border text-xl font-medium border-slate-600">
              Marital Status :
            </td>
            <td className="border border-slate-600">Single </td>
          </tr>
          <tr>
            <td className="border text-xl font-medium border-slate-600">
              Nationality :
            </td>
            <td className="border border-slate-600">Bangladeshi</td>
          </tr>
          <tr>
            <td className="border  text-xl font-medium border-slate-600">
              National Id No :
            </td>
            <td className="border border-slate-600">2369649237</td>
          </tr>
          <tr>
            <td className="border text-xl font-medium border-slate-600">
              Religion :
            </td>
            <td className="border border-slate-600">Islam</td>
          </tr>
          <tr>
            <td className="border text-xl font-medium border-slate-600">
              Passport No :
            </td>
            <td className="border border-slate-600">EA0257567</td>
          </tr>
          <tr>
            <td className="border text-xl font-medium border-slate-600">
              Passport Issue Date :
            </td>
            <td className="border border-slate-600">4/2/2019</td>
          </tr>
          <tr>
            <td className="border text-xl font-medium border-slate-600">
              {" "}
              Permanent Address :
            </td>
            <td className="border border-slate-600">
              Md. Arick Hasan, Holding no.301, Uttar Gazirchat,
              <br /> Alia Madrasah, EPZ, Savar, Dhaka 1349
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
