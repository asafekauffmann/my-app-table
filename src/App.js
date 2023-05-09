import './App.css';


/* const people = [
  { 
    id: '09039022-34355-de99de0-009ded-9de090de9', 
    envelope: '090e9d0e9d09e0dk0d0ekd0k044', 
    create: '2023-05-05T18:04:30.431Z', 
    update: '2023-05-05T18:04:30.431Z', 
    lessee: 'kauffmann@modeloemail.com',
    startDate: '05/05/2023',
    endLeaseDate: '05/05/2024',
    paymentDueDay: '0',
    vehicleId: '909d0e909d0edm-d0e90dem-dieijok-ed'
  },
  { 
    id: '09039022-34355-de99de0-009ded-9de090de9', 
    envelope: '090e9d0e9d09e0dk0d0ekd0k044', 
    create: '2023-05-05T18:04:30.431Z', 
    update: '2023-05-05T18:04:30.431Z', 
    lessee: 'kauffmann@modeloemail.com',
    startDate: '05/05/2023',
    endLeaseDate: '05/05/2024',
    paymentDueDay: '0',
    vehicleId: '909d0e909d0edm-d0e90dem-dieijok-ed'
  },
  { 
    id: '09039022-34355-de99de0-009ded-9de090de9', 
    envelope: '090e9d0e9d09e0dk0d0ekd0k044', 
    create: '2023-05-05T18:04:30.431Z', 
    update: '2023-05-05T18:04:30.431Z', 
    lessee: 'kauffmann@modeloemail.com',
    startDate: '05/05/2023',
    endLeaseDate: '05/05/2024',
    paymentDueDay: '0',
    vehicleId: '909d0e909d0edm-d0e90dem-dieijok-ed'
  },
  { 
    id: '09039022-34355-de99de0-009ded-9de090de9', 
    envelope: '090e9d0e9d09e0dk0d0ekd0k044', 
    create: '2023-05-05T18:04:30.431Z', 
    update: '2023-05-05T18:04:30.431Z', 
    lessee: 'kauffmann@modeloemail.com',
    startDate: '05/05/2023',
    endLeaseDate: '05/05/2024',
    paymentDueDay: '0',
    vehicleId: '909d0e909d0edm-d0e90dem-dieijok-ed'
  },
]
 */

// Array Second model
const peoples = [
  {
    id: '393582b8-df74-4c6c-b537-23fb43a5dad0',
    lessee: 'model@motorenvy.com',
    role: '45627318-426c-42ad-ba5d-162664d27502',
    lastSeen: 'Vehicle Id .4a780876-1814-4496-ac67-d874da57e928',
    lastSeenDateTime: '2023-01-23T13:23Z',
    createAt: '2023-05-05T18:04:30.431Z',
    updateAt: '2023-05-05T18:04:30.431Z',
    startLease: '05/05/2023',
    endLease: '05/05/2024',
  },
  {
    id: '393582b8-df74-4c6c-b537-23fb43a5dad0',
    lessee: 'model@motorenvy.com',
    role: '45627318-426c-42ad-ba5d-162664d27502',
    lastSeen: 'Vehicle Id .4a780876-1814-4496-ac67-d874da57e928',
    lastSeenDateTime: '2023-01-23T13:23Z',
    createAt: '2023-05-05T18:04:30.431Z',
    updateAt: '2023-05-05T18:04:30.431Z',
    startLease: '05/05/2023',
    endLease: '05/05/2024',
  },
  {
    id: '393582b8-df74-4c6c-b537-23fb43a5dad0',
    lessee: 'model@motorenvy.com',
    role: '45627318-426c-42ad-ba5d-162664d27502',
    lastSeen: null,
    createAt: '2023-05-05T18:04:30.431Z',
    updateAt: '2023-05-05T18:04:30.431Z',
    startLease: '05/05/2023',
    endLease: '05/05/2024',
  },
  
]

function App() {
  return (
    // First model 
    /* <div className="px-4 sm:px-6 lg:px-9">
      <div className="mt-5 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-7">
          <div className="inline-block min-w-full py-1 mx-2 align-middle">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="px-3 py-3 text-left">Status</th>
                  <th scope="col" className="px-3 py-3 text-left">ID</th>
                  <th scope="col" className="px-3 py-3 text-left">Envelop ID</th>
                  <th scope="col" className="px-3 py-3 text-left">Created At</th>
                  <th scope="col" className="px-3 py-3 text-left">Updated At</th>
                  <th scope="col" className="px-3 py-3 text-left">Lessee</th>
                  <th scope="col" className="px-3 py-3 text-left">Start Date</th>
                  <th scope="col" className="px-3 py-3 text-left">End Date</th>
                  <th scope="col" className="px-3 py-3 text-left">Vehicle ID</th>
                  <th scope="col" className="px-3 py-3 text-left">Pay Day</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person, personIdx) => (
                  <tr key={person.id} className={personIdx % 2 === 0 ? undefined : 'bg-gray-50'}>
                    <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/60">
                        Sent
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-gray-500">{person.id}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-gray-500">{person.envelope}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-gray-500">{person.create}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-gray-500">{person.update}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-gray-500">{person.lessee}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-gray-500">{person.startDate}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-gray-500">{person.endLeaseDate}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-gray-500">{person.vehicleId}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-gray-500 text-center">{person.paymentDueDay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> */

    // Second Model
    <div className="flex flex-col justify-center px-5 py-5 m-5 ">
      <ul className="divide-y divide-gray-100">
      {peoples.map((person) => (
        <li key={person.lesse} className="relative flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <div className="bg-gray-500 w-12 h-12 mt-1 rounded-full"></div>
            <div className="min-w-0 flex-auto">
              <p className="text-sm leading-6 text-gray-900">
                Id .
                <span className="font-normal">
                   {person.id}
                </span>
              </p>
              <p className="mt-1 flex text-xs leading-5 font-semibold text-gray-500">
                Lessee . 
                <span className="font-normal">
                  {person.lessee}
                </span>
              </p>
              <p className="mt-1 flex text-xs font-semibold laranja leading-5 text-gray-500">
                Start Lease . 
                <span className="font-normal">
                  {person.startLease}
                </span>
              </p>
              <p className="mt-1 flex text-xs font-semibold laranja leading-5 text-gray-500">
                End Lease . 
                <span className="font-normal">
                  {person.endLease}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">Envelope ID .{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Sent / </p>
                  <p>Modelo de Status</p>
                </div>
              )}
              <p className="mt-1 flex text-xs laranja leading-5 font-semibold text-gray-500">
                Created At .  
                <span className="font-normal">
                  {person.createAt}
                </span>
              </p>
              <p className="mt-1 flex text-xs font-semibold laranja leading-5 text-gray-500">
                Update At . 
                <span className="font-normal">
                  {person.updateAt}
                </span>
              </p>
            </div>
            
          </div>
        </li>
      ))}
    </ul>
    </div>
    
    
  );
}

export default App;
