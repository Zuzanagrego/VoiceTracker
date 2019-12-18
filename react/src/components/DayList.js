import React from 'react';
import Day from './Day';

function DayList(props) {

	const entries = props.days.map((day) => {
		return (
			<div key={day.date}>
				<Day date={day.date} users={day.users} />
			</div>
		)
	});

	return (
		<div>
			{entries}
		</div>
	);
}

export default DayList;
