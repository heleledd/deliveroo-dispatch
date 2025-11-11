// need to find which riders are available from state which is passed as props

export default function RiderPicker(props) {
    const availableRiders = props.riders.filter(rider => rider.isAvailable);
    const riderOptions = availableRiders.map(rider => (
        <option key={rider.id} value={rider.id}>
            {rider.name}
        </option>
    ));

    return (
    <label>
      Pick a rider:
      <select name="selectedRider">
        {riderOptions}
      </select>
    </label>
  );
}