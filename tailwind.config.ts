
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cosmic: {
					dark: '#0A0118',
					purple: '#6A2BF2',
					blue: '#1C94FC',
					pink: '#FF3DD9',
					green: '#21E387',
					orange: '#FF9054',
					yellow: '#FFD166'
				},
				mode: {
					combat: '#FF9054',
					time: '#1C94FC',
					zen: '#21E387'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'bounce-in': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'70%': { transform: 'scale(1.05)', opacity: '1' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'rotate-3d': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(360deg)' },
				},
				'particle-move': {
					'0%': { transform: 'translateY(0) translateX(0)' },
					'50%': { transform: 'translateY(-10px) translateX(10px)' },
					'100%': { transform: 'translateY(0) translateX(0)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
				'bounce-in': 'bounce-in 0.5s ease-out forwards',
				'rotate-3d': 'rotate-3d 15s linear infinite',
				'particle-move': 'particle-move 8s ease-in-out infinite'
			},
			boxShadow: {
				'neon-blue': '0 0 5px #1C94FC, 0 0 20px rgba(28, 148, 252, 0.5)',
				'neon-purple': '0 0 5px #6A2BF2, 0 0 20px rgba(106, 43, 242, 0.5)',
				'neon-pink': '0 0 5px #FF3DD9, 0 0 20px rgba(255, 61, 217, 0.5)',
				'neon-green': '0 0 5px #21E387, 0 0 20px rgba(33, 227, 135, 0.5)'
			},
			backgroundImage: {
				'cosmic-gradient': 'linear-gradient(135deg, #0A0118 0%, #2B0A4A 100%)',
				'card-gradient-1': 'linear-gradient(135deg, #FEC6A1 0%, #FEF7CD 100%)',
				'card-gradient-2': 'linear-gradient(135deg, #D3E4FD 0%, #E5DEFF 100%)',
				'card-gradient-3': 'linear-gradient(135deg, #F2FCE2 0%, #CBFDEC 100%)',
				'card-gradient-4': 'linear-gradient(135deg, #FFDEE2 0%, #FDE1D3 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
