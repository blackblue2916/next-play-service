'use client';
export default function NavBar(){
    return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
                <p className="text-xs opacity-80 py-1 mx-3"><a href="/">Home</a></p>
                <p className="text-xs opacity-80 py-1 mx-3"><a href="/about">About</a></p>
                <p className="text-xs opacity-80 py-1 mx-3">Join</p>
                <p className="text-xs opacity-80 py-1 mx-3">Links</p>
                <p className="text-xs opacity-80 py-1 mx-3">DMCA</p>
                <p className="text-xs opacity-80 py-1 mx-3">Login</p>
                <p className="text-xs opacity-80 py-1 mx-3">Register</p>
            </div>
        </div>
    )
}