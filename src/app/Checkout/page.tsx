"use client";

import { useState } from "react";

import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaGlobe,
  FaCheck,
} from "react-icons/fa";

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    addressType: "home",
    isDefault: true,
  });

  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 1,
      firstName: "Yash",
      lastName: "Kumar",
      addressLine1: "123 Main Street",
      addressLine2: "Apartment 4B",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
      country: "India",
      phone: "9876543210",
      addressType: "home",
      isDefault: true,
    },
    {
      id: 2,
      firstName: "Yash",
      lastName: "Kumar",
      addressLine1: "456 Office Park",
      addressLine2: "Building C, Floor 3",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560001",
      country: "India",
      phone: "9876543210",
      addressType: "work",
      isDefault: false,
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? target.checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEditing && editingId) {
      // Update existing address
      setSavedAddresses(
        savedAddresses.map((addr) =>
          addr.id === editingId ? { ...formData, id: editingId } : addr
        )
      );
      setIsEditing(false);
      setEditingId(null);
    } else {
      // Add new address
      const newAddress = {
        ...formData,
        id: Date.now(),
      };

      // If new address is set as default, update other addresses
      if (formData.isDefault) {
        setSavedAddresses(
          savedAddresses
            .map((addr) => ({
              ...addr,
              isDefault: false,
            }))
            .concat(newAddress)
        );
      } else {
        setSavedAddresses([...savedAddresses, newAddress]);
      }
    }

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      pincode: "",
      country: "India",
      addressType: "home",
      isDefault: false,
    });
  };

  type Address = {
    id: number;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    phone: string;
    addressType: string;
    isDefault: boolean;
    email?: string;
  };

  const handleEdit = (address: Address) => {
    setFormData({
      firstName: address.firstName,
      lastName: address.lastName,
      email: address.email ?? "",
      phone: address.phone,
      addressLine1: address.addressLine1,
      addressLine2: address.addressLine2,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
      country: address.country,
      addressType: address.addressType,
      isDefault: address.isDefault,
    });
    setIsEditing(true);
    setEditingId(address.id);
  };

  const handleDelete = (id: number) => {
    setSavedAddresses(savedAddresses.filter((addr) => addr.id !== id));
  };

  const handleSetDefault = (id: number) => {
    setSavedAddresses(
      savedAddresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  return (
    <div className="min-h-screen bg-[#aa7035] text-black py-8 font-serif">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 ">My Addresses</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Address Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#d6aa73] rounded-lg shadow-2xl p-6 mb-6">
              <h2 className="text-xl font-semibold mb-6">
                {isEditing ? "Edit Address" : "Add New Address"}
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block text-black text-sm font-medium mb-2"
                      htmlFor="firstName"
                    >
                      First Name*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="First Name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block  text-sm font-medium mb-2"
                      htmlFor="lastName"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block  text-sm font-medium mb-2"
                      htmlFor="phone"
                    >
                      Phone Number*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block  text-sm font-medium mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block  text-sm font-medium mb-2"
                    htmlFor="addressLine1"
                  >
                    Address Line 1*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaMapMarkerAlt className="" />
                    </div>
                    <input
                      type="text"
                      id="addressLine1"
                      name="addressLine1"
                      value={formData.addressLine1}
                      onChange={handleChange}
                      className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="House No., Building Name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block  text-sm font-medium mb-2"
                    htmlFor="addressLine2"
                  >
                    Address Line 2
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaBuilding className="" />
                    </div>
                    <input
                      type="text"
                      id="addressLine2"
                      name="addressLine2"
                      value={formData.addressLine2}
                      onChange={handleChange}
                      className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Road name, Area, Colony"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block  text-sm font-medium mb-2"
                      htmlFor="city"
                    >
                      City/Town*
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="City"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block  text-sm font-medium mb-2"
                      htmlFor="state"
                    >
                      State*
                    </label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                     <option value="">Select State</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>


<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Ladakh">Ladakh</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>

                      {/* Add more states as needed */}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block  text-sm font-medium mb-2"
                      htmlFor="pincode"
                    >
                      PIN Code*
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="6-digit PIN code"
                      pattern="[0-9]{6}"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block  text-sm font-medium mb-2"
                      htmlFor="country"
                    >
                      Country*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaGlobe className="" />
                      </div>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        {/* Add more countries as needed */}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block  text-sm font-medium mb-2">
                    Address Type
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="addressType"
                        value="home"
                        checked={formData.addressType === "home"}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 ">Home</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="addressType"
                        value="work"
                        checked={formData.addressType === "work"}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 ">Work</span>
                    </label>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="isDefault"
                      checked={formData.isDefault}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 ">Make this my default address</span>
                  </label>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        addressLine1: "",
                        addressLine2: "",
                        city: "",
                        state: "",
                        pincode: "",
                        country: "India",
                        addressType: "home",
                        isDefault: false,
                      });
                      setIsEditing(false);
                      setEditingId(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md  hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {isEditing ? "Update Address" : "Save Address"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Saved Addresses */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#d6aa73] rounded-lg shadow-2xl p-6">
              <h2 className="text-xl font-semibold mb-6">
                Saved Addresses ({savedAddresses.length})
              </h2>

              {savedAddresses.length === 0 ? (
                <div className="text-center py-8 ">
                  <p>No addresses saved yet.</p>
                  <p className="mt-2">Add a new address to get started.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {savedAddresses.map((address) => (
                    <div
                      key={address.id}
                      className="border rounded-lg p-4 relative"
                    >
                      {address.isDefault && (
                        <span className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                          DEFAULT
                        </span>
                      )}

                      <div className="flex items-start mb-2">
                        <span className=" w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                          {address.addressType === "home" ? "H" : "W"}
                        </span>
                        <span className="font-medium">
                          {address.addressType === "home" ? "Home" : "Work"}
                        </span>
                      </div>

                      <p className="font-medium">
                        {address.firstName} {address.lastName}
                      </p>
                      <p className="text-gray-600 mt-1">
                        {address.addressLine1}
                      </p>
                      {address.addressLine2 && (
                        <p className="text-gray-600">{address.addressLine2}</p>
                      )}
                      <p className="text-gray-600">
                        {address.city}, {address.state} - {address.pincode}
                      </p>
                      <p className="text-gray-600">{address.country}</p>
                      <p className="text-gray-600 mt-1">
                        Phone: {address.phone}
                      </p>

                      <div className="mt-4 pt-3 border-t flex justify-between">
                        <div className="space-x-4">
                          <button
                            onClick={() => handleEdit(address)}
                            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(address.id)}
                            className="text-red-600 hover:text-red-800 font-medium text-sm"
                          >
                            Delete
                          </button>
                        </div>

                        {!address.isDefault && (
                          <button
                            onClick={() => handleSetDefault(address.id)}
                            className="text-gray-600 hover:text-gray-800 font-medium text-sm flex items-center"
                          >
                            <FaCheck className="mr-1" /> Set as Default
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
