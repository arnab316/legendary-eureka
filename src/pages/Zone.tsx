import { Link } from "react-router-dom";    
const Zone: React.FC = () => {
    return(
         <div className="min-h-screen bg-white">
                  {/* Hero Section */}
                  <div className="relative h-52 bg-black overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-30 bg-cover bg-center"
                      style={{ backgroundImage: "url('/./Images/about-us-banner-img.avif')" }}
                    />
                    <div className="relative h-full w-full flex flex-col items-center justify-center text-white">
                      <h1 className="text-5xl font-bold mb-4">Factory Zone</h1>
                      <div className="flex items-center gap-2 text-sm">
                        <Link to="/" className="hover:underline cursor-pointer">Home</Link>
                        <span>/</span>
                        <span className="text-cyan-400">Factory Zone</span>
                      </div>
                    </div>
                  </div>
        </div>
    )
}
export default Zone;    