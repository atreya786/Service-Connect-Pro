"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [providers, setProviders] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orderedItems, setOrderedItems] = useState([]);
  const [serviceDetails, setServiceDetails] = useState([]);
  const [allOrders, setAllOrders] = useState([]);

  const { data: session } = useSession();
  const userId = session?.user?.id;

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

    const fetchAllOrders = async () => {
      try {
        const response = await axios.get("/api/orders");
        let data = response?.data;
        setAllOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await axios.get(`/api/orders/${userId}`);
        let data = response?.data;
        setOrderedItems(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchAllOrders();
    fetchOrders();
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

  const addOrder = async (orderDetails) => {
    console.log("order", orderDetails);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      if (!response.ok) {
        throw new Error("Failed to add order.");
      }

      const data = await response.json();
      setOrderedItems(data);
    } catch (error) {
      console.error("Error adding order:", error);
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
        addOrder,
        allOrders,
        setAllOrders,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
