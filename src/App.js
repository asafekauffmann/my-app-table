//import logo from './logo.svg';
import './App.css';

const people = [
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


function App() {
  return (
    
    <div className="px-4 sm:px-6 lg:px-9">
      <div className="mt-5 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-7">
          <div className="inline-block min-w-full py-1 mx-2 align-middle">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                <th scope="col" className="px-3 py-3 text-left">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3 text-left">
                    ID 
                  </th>
                  <th scope="col" className="px-3 py-3 text-left">
                    Envelop ID
                  </th>
                  <th scope="col" className="px-3 py-3 text-left">
                    Created At
                  </th>
                  <th scope="col" className="px-3 py-3 text-left">
                    Updated At
                  </th>
                  <th scope="col" className="px-3 py-3 text-left">
                    Lessee
                  </th>
                  <th scope="col" className="px-3 py-3 text-left">
                    Start Date
                  </th>
                  <th scope="col" className="px-3 py-3 text-left">
                    End Date
                  </th>
                  <th scope="col" className="px-3 py-3 text-left">
                    Vehicle ID
                  </th>
                  <th scope="col" className="px-3 py-3 text-left">
                    Pay Day
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
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

                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {/* <a className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {person.name}</span>
                      </a> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
