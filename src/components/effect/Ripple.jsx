import React, { useState, useLayoutEffect, useMemo } from 'react';
import RippleContainer from './RippleContainer';

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
	useLayoutEffect(() => {
		let bounce = null;
		if (rippleCount > 0) {
			clearTimeout(bounce);

			bounce = setTimeout(() => {
				cleanUpFunction();
				clearTimeout(bounce);
			}, duration * 4);
		}

		return () => clearTimeout(bounce);
	}, [rippleCount, duration, cleanUpFunction]);
};

function Ripple() {
	const duration = useMemo(() => {
		const rippleDuration = getComputedStyle(
			document.documentElement
		).getPropertyValue('--tw-ripple-duration');
		const parsedDuration = parseFloat(rippleDuration);
		return parsedDuration;
	}, []);
	const [rippleArray, setRippleArray] = useState([]);

	useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
		setRippleArray([]);
	});

	const addRipple = (event) => {
		const rippleContainer = event.currentTarget.getBoundingClientRect();
		const size =
			rippleContainer.width > rippleContainer.height
				? rippleContainer.width
				: rippleContainer.height;
		const x = event.pageX - rippleContainer.x - size / 2;
		const y = event.pageY - rippleContainer.y - size / 2;
		const newRipple = {
			x,
			y,
			size,
		};

		setRippleArray([...rippleArray, newRipple]);
	};

	return (
		<RippleContainer duration={duration} onMouseDown={addRipple}>
			{rippleArray.length > 0 &&
				rippleArray.map((ripple, index) => {
					const newIndex = index;
					return (
						<span
							key={newIndex}
							style={{
								top: ripple.y,
								left: ripple.x,
								width: ripple.size,
								height: ripple.size,
							}}
						/>
					);
				})}
		</RippleContainer>
	);
}

// Ripple.propTypes = {
//   duration: PropTypes.number,
//   color: PropTypes.string
// };

// Ripple.defaultProps = {
//   duration: 850,
//   color: "#fff"
// };

export default Ripple;
