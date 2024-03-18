"use client"

import Loader from '@components/Loader';
import React, { useEffect, useState } from 'react'

const About = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader />;
  return (
    <div>About</div>
  )
}

export default About