import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from './pages/MainPage'
import { BucketPage } from './pages/BucketPage';
import { CatalogPage } from './pages/CatalogPage';
import { DetailsPage } from './pages/DetailsPage';
import { AuthPage } from './pages/AuthPage';

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/main" exact element={<MainPage />} />

                <Route path="/bucket" exact element={<BucketPage />} />

                <Route path="/catalog" exact element={<CatalogPage />} />

                <Route path="/details/:id" element={<DetailsPage />} />

                <Route path="/auth" element={<AuthPage />} />

                <Route path="/" element={<Navigate to="/main" />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/auth" element={<AuthPage />} />

            <Route path="/" element={<Navigate to="/auth" />} />
        </Routes>
    )
};