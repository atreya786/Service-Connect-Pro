"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [providers, setProviders] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orderedItems, setOrderedItems] = useState([]);
  const [serviceDetails, setServiceDetails] = useState([]);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await axios.get("/api/services");
        let data = response?.data;
        setProviders(data);
      } catch (error) {
        console.error("Error fetching providers:", error);
      }
    };

    fetchProviders();
  }, []); 

  const fetchServiceById = async (id) => {
    try {
      const response = await axios.get(`/api/services/${id}`);
      const data = response.data;
      setServiceDetails(data);
    } catch (error) {
      console.error("Error fetching provider by ID:", error);
      return null;
    }
  };

  return (
    <MyContext.Provider
      value={{
        users,
        setUsers,
        providers,
        setProviders,
        cartItems,
        setCartItems,
        orderedItems,
        setOrderedItems,
        serviceDetails,
        setServiceDetails,
        fetchServiceById,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
