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


// Array Second model
const peoples = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      ' ',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
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
    <div className="flex flex-row justify-center px-5 py-5 m-5 ">
      <ul className="divide-y divide-gray-100">
      {peoples.map((person) => (
        <li key={person.email} className="relative flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                <a href={person.href}>
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  {person.name}
                </a>
              </p>
              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                <a href={`mailto:${person.email}`} className="relative truncate hover:underline">
                  {person.email}
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
            
          </div>
        </li>
      ))}
    </ul>
    </div>
    
  
  );
}

export default App;
