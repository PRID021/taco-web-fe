import { useEffect, useState } from 'react';
import AccountApi from '../api/account-api';
function Home() {
	useEffect(() => {
		async function fetchAccounts() {
			const response = await AccountApi().getAll();
			setAccount(response.data['data']);
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
		<div class="w-full my-20 items-center flex flex-col">
			<table class=" w-2/4 border-collapse border border-green">
				<thead>
					<tr class="bg-highlight">
						<th class="px-4 py-2 text-center  border border-green">#</th>
						<th class="px-4 py-2 text-center  border border-green">
							User Name
						</th>
						<th class="px-4 py-2 text-center  border border-green">
							Create Date
						</th>
						<th class="px-4 py-2 text-center  border border-green">
							Active Status
						</th>
					</tr>
				</thead>
				<tbody>
					{accounts &&
						accounts.map((account) => {
							return (
								<tr
									key={account.id}
									class="border-b"
									onClick={() => handleRowClick(account.id)}
									className={
										selectedRows.includes(account.id) ? 'bg-highlight cursor-pointer' : 'cursor-pointer'
									}
								>
									<td class="text-center  border border-green ">
										{account.id}
									</td>
									<td class="text-center  border border-green ">
										{account.userName}
									</td>
									<td class="text-center  border border-green ">
										{account.createDate}{' '}
									</td>
									<td class="text-center  border border-green ">
										{account.activeStatus ? 'Verified' : 'Un verify'}
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
}
export default Home;
