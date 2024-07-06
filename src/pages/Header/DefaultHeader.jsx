import { Fragment, useState } from 'react'
import logo from '../../images/logo-new.png';
import cartlogo from '../../images/cart.png'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {Link} from 'react-router-dom';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-slate-50 px-3 p-3 relative">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8 sticky top-0" aria-label="Global">
        <div className="flex lg:flex-1 space-x-1 mr-8">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-15 pb-2 pr-10 w-auto" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm p-2 font-semibold leading-6 text-slate-950">
            Home
          </Link>
          <Link to="/catalogue" className="text-sm p-2 font-semibold leading-6 text-slate-950">
            Catalogue
          </Link>
          <Link to="/ContactUs" className="text-sm p-2 font-semibold leading-6 text-slate-950">
            Contact Us
          </Link>
          <Link to="/instructor" className="text-sm p-2 font-semibold leading-6 text-slate-950">
            Our Instructors
          </Link>
          <Link to="/faq" className="text-sm p-2 font-semibold leading-6 text-slate-950">
            FAQs
          </Link>
          <Link to="/spotlight" className="text-sm p-2 font-semibold leading-6 text-slate-950">
            Spotlight
          </Link>
          
          <Link to="/login" className="text-sm bg-black p-2 px-3 font-semibold leading-6 border-solid border-2 border-slate-950 text-slate-50">
            Log In
          </Link>
          <Link to="/register" className="text-sm bg-slate-50 px-2 p-2 font-semibold leading-6 border-solid border-2 border-slate-950 text-slate-950">
            Sign Up
          </Link>
        </Popover.Group>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div> */}
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="/catalogue"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Catalogue
                </Link>
                <Link
                  to="/ContactUs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
                <Link
                  to="instructor"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Our Instructors
                </Link>
                <Link
                  to="/faq"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  FAQs
                </Link>
                <Link
                  to="/spotlight"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Spotlight
                </Link>
                <Link
                  to="/wishlist"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Wishlist
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3  block rounded-lg px-3 py-2.5 my-2 text-base font-semibold leading-7 bg-black text-slate-50 hover:text-gray-200"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="-mx-3  block rounded-lg px-3 py-2.5 my-2 text-base font-semibold leading-7 bg-slate-50 hover:text-gray-200 border-solid border-2 border-slate-950 text-slate-950
                  "
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
