"use client"

import { Button } from '@/components/ui/button'
import { signIn } from '@/lib/auth-client'
import { Chrome, Github, Workflow } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-900 px-4 py-16">
      <div className="glass-effect rounded-2xl shadow-2xl max-w-sm w-full border border-gray-700 overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="p-8 text-center">
          <Link href="/">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Workflow className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                ReqFlow
              </h1>
            </div>
          </Link>
          <h2 className="mt-2 text-2xl font-semibold">Sign in to ReqFlow</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Welcome back! Sign in to continue
          </p>
        </div>

        {/* Social Buttons */}
        <div className="p-8 pt-0 space-y-4">
          {/* Google - recommended */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-gray-600 text-gray-100 hover:bg-gray-800 hover:border-primary/50 transition-all duration-300"
            onClick={() => signIn.social({ provider: 'google', callbackURL: "/" })}
          >
            <Chrome className="h-5 w-5" />
            Continue with Google
          </Button>

          {/* GitHub */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-gray-600 text-gray-100 hover:bg-gray-800 hover:border-primary/50 transition-all duration-300"
            onClick={() => signIn.social({ provider: 'github', callbackURL: "/" })}
          >
            <Github className="h-5 w-5" />
            Sign in with GitHub
          </Button>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-gray-400 text-xs text-center p-4 border-t border-gray-700">
          <p>
            Don&apos;t have an account?{" "}
                      <p>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>

          </p>
        </div>
      </div>
    </section>
  )
}

export default LoginPage



