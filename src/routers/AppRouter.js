import React from 'react'
import {Router, Route} from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
export const AppRouter = () => {

    const isAuthenticated = true;

    return (
        <div>
            <Router>
                <Route 
                path="/auth"
                component={AuthRouter}
                />

                <Route 
                path="/"
                component={JournalScreen}                
                exact
                />
            </Router>
            
            {/* Route
                path=/auth
                No exact
                component={AuthRouter}
            */}

            {/* 
                Main Route
                exact
                path="/"
                component={JorunalScreen}
            */}
        </div>
    )
}
