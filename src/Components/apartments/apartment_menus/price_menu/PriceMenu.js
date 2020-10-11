import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeExtraDataMenu } from '../../../../reducers/menuReducer'
import { AiOutlineClose } from 'react-icons/ai'
import { Table } from 'react-bootstrap'
import './PriceMenu.scss'

function PriceMenu({	priceMenuTitle, firstTableHeader, secondTableHeader,
						thirdTableHeader, fourthTableHeader, minimalStay }) 
{
	const dispatch = useDispatch()
	const priceMenuState = useSelector(store => store.menuStatus.status)
	const handlePriceMenuClose = () => {
		dispatch(closeExtraDataMenu());
		document.body.style.overflow = "overlay";
	}
	return (
		<div style={priceMenuState ? {display: 'flex'} : {display: 'none'}} className="price-menu-opened-container">
			<div className="close-menu-container" onClick={handlePriceMenuClose}>
				<AiOutlineClose className="menu-icon"/>
			</div>
			<div className="price-menu-title-and-table-container">
				<div className="price-menu-title-container">
					<h1 className="price-menu-title">{priceMenuTitle}</h1>
				</div>
				<hr/>
				<div className="price-menu-table-container">
					<Table striped bordered size="sm" responsive="sm">
						<thead>
							<tr>
								<th>{firstTableHeader}</th>
								<th>{secondTableHeader}</th>
								<th>{thirdTableHeader}</th>
								<th>{fourthTableHeader}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Razdoblje 1</td>
								<td>5</td>
								<td>{minimalStay}</td>
								<td>nekoliko€</td>
							</tr>
							<tr>
								<td>Razdoblje 2</td>
								<td>5</td>
								<td>{minimalStay}</td>
								<td>nekoliko€</td>
							</tr>
							<tr>
								<td>Razdoblje 3</td>
								<td>5</td>
								<td>{minimalStay}</td>
								<td>nekoliko€</td>
							</tr>
							<tr>
								<td>Razdoblje 4</td>
								<td>5</td>
								<td>{minimalStay}</td>
								<td>nekoliko€</td>
							</tr>
						</tbody>	
					</Table>
				</div>
			</div>
		</div>
	)
}

export default PriceMenu
