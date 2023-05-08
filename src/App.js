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
    id: 'Id model', 
    envelope: 'envelope id', 
    create: 'create', 
    update: 'update', 
    lessee: '@motorenvy.com',
    startDate: '05/05/2023',
    endLeaseDate: '05/05/2024',
    paymentDueDay: '0',
    vehicleId: 'modeltestcar Usual'
  }
]

function App() {
  return (
    
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Status send</h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-1 mx-2 align-middle">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                    ID 
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                    Envelop ID
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                    Created At
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                    Updated At
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                    Lessee
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                    Start Date
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                    End Date
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                    Vehicle ID
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                    Pay Day
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.id}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.id}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.envelope}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.create}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.update}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.lessee}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.startDate}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.endLeaseDate}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.vehicleId}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.paymentDueDay}</td>

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
