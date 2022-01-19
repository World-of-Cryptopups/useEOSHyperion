import { createContext, ReactNode, useContext } from 'react'

interface UseHyperionProps {
  children: ReactNode
  endpoint?: string
}

interface UseHyperionContextProps {
  endpoint?: string
}

const UseHyperionContext = createContext<UseHyperionContextProps>({})

const UseHyperionProvider = ({ children, endpoint }: UseHyperionProps) => {
  return (
    <UseHyperionContext.Provider value={{ endpoint }}>
      {children}
    </UseHyperionContext.Provider>
  )
}

export const useHyperionContext = () => {
  return useContext(UseHyperionContext)
}

export default UseHyperionProvider
