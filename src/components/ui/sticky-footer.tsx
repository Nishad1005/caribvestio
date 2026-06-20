import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import {
	Globe,
	Camera,
	MessageCircle,
	Video,
} from 'lucide-react';
import { Button } from './button';
import Logo from '@/components/Logo';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}
interface FooterLinkGroup {
	label: string;
	links: FooterLink[];
}

type StickyFooterProps = React.ComponentProps<'footer'>;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
	return (
		<footer
			className={cn('relative h-[720px] w-full', className)}
			style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
			{...props}
		>
			<div className="fixed bottom-0 h-[720px] w-full bg-background text-on-surface transition-colors duration-500">
				<div className="sticky top-[calc(100vh-720px)] h-full overflow-y-auto">
					<div className="relative flex size-full flex-col justify-between gap-5 border-t border-outline-variant/50 px-4 py-8 md:px-12 bg-surface-container-low transition-colors duration-500">
						<div
							aria-hidden
							className="absolute inset-0 isolate z-0 contain-strict pointer-events-none"
						>
							<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full dark:opacity-20" />
							<div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full dark:opacity-20" />
							<div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full dark:opacity-20" />
						</div>
						<div className="mt-10 flex flex-col gap-8 md:flex-row xl:mt-0 relative z-10 max-w-container-max mx-auto w-full pt-12">
							<AnimatedContainer className="w-full max-w-sm min-w-2xs space-y-4">
								<Logo tagline />
								<p className="text-on-surface-variant mt-8 text-sm md:mt-0 max-w-xs">
									Premium corporate wear designed for the climate, crafted for durability, and styled to elevate your brand's professional image across the Caribbean.
								</p>
								<div className="flex gap-2 pt-4">
									{socialLinks.map((link) => (
										<Button key={link.title} size="icon" variant="outline" className="size-8 transition-colors">
											<link.icon className="size-4" />
										</Button>
									))}
								</div>
							</AnimatedContainer>
							{footerLinkGroups.map((group, index) => (
								<AnimatedContainer
									key={group.label}
									delay={0.1 + index * 0.1}
									className="w-full"
								>
									<div className="mb-10 md:mb-0">
										<h3 className="text-sm font-label-lg uppercase tracking-wider text-primary dark:text-on-primary">{group.label}</h3>
										<ul className="text-on-surface-variant mt-4 space-y-3 text-sm md:text-sm lg:text-sm">
											{group.links.map((link) => {
												const internal = link.href.startsWith('/');
												const cls =
													'link-underline hover:text-primary dark:hover:text-on-primary inline-flex items-center transition-all duration-300';
												return (
													<li key={link.title}>
														{internal ? (
															<Link to={link.href} className={cls}>
																{link.icon && <link.icon className="me-2 size-4" />}
																{link.title}
															</Link>
														) : (
															<a href={link.href} className={cls}>
																{link.icon && <link.icon className="me-2 size-4" />}
																{link.title}
															</a>
														)}
													</li>
												);
											})}
										</ul>
									</div>
								</AnimatedContainer>
							))}
						</div>
						<div className="text-on-surface-variant flex flex-col items-center justify-between gap-2 border-t border-outline-variant/50 pt-6 mt-12 text-sm md:flex-row relative z-10 max-w-container-max mx-auto w-full">
							<p>© 2026 CaribVestio. All rights reserved.</p>
							<p>Designed for the Caribbean</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

const socialLinks = [
	{ title: 'Website', href: '#', icon: Globe },
	{ title: 'Gallery', href: '#', icon: Camera },
	{ title: 'Channel', href: '#', icon: Video },
	{ title: 'Contact', href: '#', icon: MessageCircle },
];

const footerLinkGroups: FooterLinkGroup[] = [
	{
		label: 'Industries',
		links: [
			{ title: 'Security', href: '/industries/security' },
			{ title: 'Hospitality', href: '/industries/hospitality' },
			{ title: 'Healthcare', href: '/industries/healthcare' },
			{ title: 'Schools', href: '/industries/schools' },
			{ title: 'Corporate', href: '/industries/corporate' },
		],
	},
	{
		label: 'Services',
		links: [
			{ title: 'Bulk Orders', href: '/bulk-orders' },
			{ title: 'Custom Sizing', href: '/bulk-orders' },
			{ title: 'Logo Embroidery', href: '/bulk-orders' },
			{ title: 'Fast Delivery', href: '/bulk-orders' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'About Us', href: '/about' },
			{ title: 'Contact', href: '/contact' },
			{ title: 'Uniform Guide Blog', href: '/blog' },
			{ title: 'Careers', href: '/contact' },
			{ title: 'Privacy Policy', href: '/privacy' },
		],
	},
];

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
	children?: React.ReactNode;
	delay?: number;
};

function AnimatedContainer({
	delay = 0.1,
	children,
	...props
}: AnimatedContainerProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <>{children}</>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			{...props}
		>
			{children}
		</motion.div>
	);
}
