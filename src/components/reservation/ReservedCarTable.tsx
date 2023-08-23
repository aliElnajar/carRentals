import { carObjectTypes } from "../../../types";
import dayjs from "dayjs";
import { useCtx } from "../../store/generalCtx";

const ReservedCarTable = ({ name, model, color, rentRate }: carObjectTypes) => {
  const { dates, location, confirmed } = useCtx();
  const reservedDays = dayjs(dates.endDate).diff(
    dayjs(dates.startDate),
    "days"
  );
  return (
    <div className="overflow-x-auto ">
      <table className="table ">
        <thead className="bg-blueBlack text-white">
          <tr>
            <th>Name</th>
            <th>model</th>
            <th>color</th>
            <th>Rent Rate</th>
          </tr>
        </thead>
        <tbody className="bg-midGreen text-white">
          <tr>
            <td>{name}</td>
            <td>{model}</td>
            <td>{color}</td>
            <td>{rentRate}$ /day</td>
          </tr>
        </tbody>
        {confirmed ? (
          <>
            <thead className="bg-blueBlack text-white">
              <th>starting in</th>
              <th>ending in </th>
              <th> due amount</th>
              <th> location</th>
            </thead>
            <tbody className="bg-midGreen text-white">
              <td>{dates.startDate}</td>
              <td>{dates.endDate}</td>
              <td>${reservedDays * +rentRate}</td>
              <td>{location}</td>
            </tbody>
          </>
        ) : null}
      </table>
    </div>
  );
};

export default ReservedCarTable;
