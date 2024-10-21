import React from 'react';
import css from './TransactionHistory.module.css'; // Импортируем CSS-модуль

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th className={css.header}>Type</th>
                    <th className={css.header}>Amount</th>
                    <th className={css.header}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }, index) => (
                    <tr key={id} className={index % 2 === 0 ? css.rowEven : css.row}>
                        <td className={css.cell}>{type}</td>
                        <td className={css.cell}>{amount}</td>
                        <td className={css.cell}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;
