import { useEffect, useRef, type MutableRefObject } from "react";

interface MousePosition {
	x: number;
	y: number;
}

/**
 * Tracks the mouse position in a ref (no re-render on move).
 * Read the latest value via `ref.current` inside an animation loop.
 */
export function useMousePosition(): MutableRefObject<MousePosition> {
	const mousePosition = useRef<MousePosition>({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			mousePosition.current = { x: event.clientX, y: event.clientY };
		};

		window.addEventListener("mousemove", handleMouseMove, { passive: true });

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return mousePosition;
}
