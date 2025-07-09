import { login } from "@/lib/auth";

export default function SignInPage() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg mx-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to JobList
          </h2>
          <p className="text-gray-600">
            Sign in to post jobs or apply for opportunities
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={login}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <g>
                <path
                  fill="#4285F4"
                  d="M44.5 20H24v8.5h11.7C34.9 32.9 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.6 20-21 0-1.3-.1-2.7-.3-4z"
                />
                <path
                  fill="#34A853"
                  d="M6.3 14.7l7 5.1C15.7 16.1 19.5 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.6 3 24 3c-7.1 0-13.3 4.1-16.7 10.1z"
                />
                <path
                  fill="#FBBC05"
                  d="M24 45c5.6 0 10.5-1.9 14.3-5.1l-6.6-5.4C29.9 36.9 27.1 38 24 38c-6.1 0-10.9-4.1-12.7-9.6l-7 5.4C7.7 41.1 15.1 45 24 45z"
                />
                <path
                  fill="#EA4335"
                  d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.1 6.5-11.7 6.5-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.6 3 24 3c-7.1 0-13.3 4.1-16.7 10.1z"
                  opacity=".2"
                />
              </g>
            </svg>
            <span className="text-base font-medium">Continue with Google</span>
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          By signing in, you agree to our{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-500">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}