import React, { useEffect, useState } from 'react';
import AccountApi from '../api/account-api';

function Home() {
	useEffect(() => {
		async function fetchAccounts() {
			const response = await AccountApi().getAll();
			setAccount(response.data.data);
		}
		fetchAccounts();
	}, []);
	const [accounts, setAccount] = useState(null);
	const [selectedRows, setSelectedRows] = useState([]);

	const handleRowClick = (rowId) => {
		if (selectedRows.includes(rowId)) {
			setSelectedRows(selectedRows.filter((row) => row !== rowId));
			return;
		}
		setSelectedRows([...selectedRows, rowId]);
	};

	return (
		<div className="w-full my-20 items-center flex flex-col">
			<table className=" w-2/4 border-collapse border border-green">
				<thead>
					<tr className="bg-highlight">
						<th className="px-4 py-2 text-center  border border-green">#</th>
						<th className="px-4 py-2 text-center  border border-green">
							User Name
						</th>
						<th className="px-4 py-2 text-center  border border-green">
							Create Date
						</th>
						<th className="px-4 py-2 text-center  border border-green">
							Active Status
						</th>
					</tr>
				</thead>
				<tbody>
					{accounts &&
						accounts.map((account) => (
							<tr
								key={account.id}
								onClick={() => handleRowClick(account.id)}
								className={
									selectedRows.includes(account.id)
										? 'bg-highlight cursor-pointer border-b'
										: 'cursor-pointer border-b'
								}
							>
								<td className="text-center  border border-green ">
									{account.id}
								</td>
								<td className="text-center  border border-green ">
									{account.userName}
								</td>
								<td className="text-center  border border-green ">
									{account.createDate}{' '}
								</td>
								<td className="text-center  border border-green ">
									{account.activeStatus ? 'Verified' : 'Un verify'}
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}
export default Home;
