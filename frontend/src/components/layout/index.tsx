import NavBar from './NavBar';

export default function Layout({ children }) {

  return (
    <>
      <NavBar />
      <div className="pt-10 lg:ml-72 mx-auto px-5 sm:px-10 py-5">
        {children}
      </div>
      
    </>
  );
}
