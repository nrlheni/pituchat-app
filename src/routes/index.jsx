import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Index as Chat } from '../app/auth/chat/page';
import { Index as Shop } from '../app/auth/shop/page';
import { Index as Login } from '../app/unauth/login/page';
import { Index as NotFound } from '../app/notFound/page';
import AuthLayout from '../app/auth/layout';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index element={<AuthLayout><Chat /></AuthLayout>} />
        <Route path="chat" element={<AuthLayout><Chat /></AuthLayout>} />
        <Route path="shop" element={<AuthLayout><Shop /></AuthLayout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
