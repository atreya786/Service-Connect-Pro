"use client";

import Loader from "@components/Loader";
import Table from "@components/Table";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <Table />
    </div>
  );
};

export default Admin;
