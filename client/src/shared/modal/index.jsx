import MUIModal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import Payment from 'pages/Funding/modals/payment';
import TermsOfPayment from 'pages/Funding/modals/termsOfPayment';
import ThankYou from 'pages/Funding/modals/thankYou';
import Login from 'pages/Login';
import SharePlanView from 'pages/Plan/common/Views/sharePlan';
import Register from 'pages/Register/';
import EmailVerified from 'pages/Register/emailVerified';
import ShareTreeView from 'pages/Tree/common/Views/shareTree';
import PropTypes from 'prop-types';
import React from 'react';
import { ModalActions } from 'redux/actions';
import { ModalSelectors } from 'redux/selectors';
import { device } from 'style';
import styled from 'styled-components';

const StyledModal = styled(MUIModal)`
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: scroll;
`;

const StyledIcon = styled(CloseIcon)`
	color: gray;
	cursor: pointer;
`;

const ModalWrapper = styled.div``;

const ModalContentWRapper = styled.div`
	display:flex;
	flex-direction: column;
	background-color: #ffffff;
	min-width: 35%;
	border-radius: 15px 15px;
	max-width: 93vw;
    @media ${device.tablet} {
      max-width: initial;
    }
`;

const IconWrapper = styled.div`
	padding-top: 0.5em;
	padding-right: 0.5em;
`;

const modalComponents = {
	login: Login,
	register: Register,
	emailVerified: EmailVerified,
	share: SharePlanView,
	payment: Payment,
	termsOfPayment: TermsOfPayment,
	thankYou: ThankYou,
	shareTree: ShareTreeView
};

const Modal = ({ id }) => {
	const { open, modalType, modalProps } = ModalSelectors();
	const ModalChildren = modalComponents[modalType];

	return (
		<ModalWrapper id={`wrapper-${id}`}>
			<StyledModal id={id} open={open}>
				<ModalContentWRapper>
					<IconWrapper>
						<StyledIcon onClick={ModalActions().close} />
					</IconWrapper>
					{modalType && <ModalChildren {...modalProps}/>}
				</ModalContentWRapper>
			</StyledModal>
		</ModalWrapper>
	);
};

Modal.propTypes = {
	children: PropTypes.object,
	id: PropTypes.string,
};

export default Modal;
