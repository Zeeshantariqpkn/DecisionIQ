import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const mockUser: User = {
  name: 'Sarah Chen',
  email: 'sarah@decisioniq.com',
  avatar: 'SC',
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('decisioniq-user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = useCallback((email: string, _password: string) => {
    const user = { ...mockUser, email };
    setUser(user);
    localStorage.setItem('decisioniq-user', JSON.stringify(user));
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('decisioniq-user');
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
