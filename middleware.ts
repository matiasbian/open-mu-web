import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Obtener el origen de la petición
    const origin = request.headers.get('origin') || ''

    // Lista de orígenes permitidos
    const allowedOrigins = ['https://www.mudinakon.com', 'https://mudinakon.com']

    // Verificar si el origen está permitido
    if (allowedOrigins.includes(origin)) {
        // Crear la respuesta
        const response = NextResponse.next()

        // Agregar headers CORS
        response.headers.set('Access-Control-Allow-Origin', origin)
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        response.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization')
        response.headers.set('Access-Control-Allow-Credentials', 'true')

        return response
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/api/:path*',
} 