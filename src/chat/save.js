import { Fragment } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';
import classNames from 'classnames';

import { resolveChatType } from './utils';

export default ( { attributes } ) => {
	const { className } = attributes;

	const chatType = resolveChatType( className );

	const chat = (
		<div role="log" className={ classNames( 'slds-chat' ) }>
			<ul className={ classNames( 'slds-chat-list' ) }>
				<InnerBlocks.Content />
			</ul>
		</div>
	);

	return (
		<div className={ className }>
			{ chatType && 'app' === chatType && (
				<Fragment>
					<div class="chatterbox-app-toolbar chatterbox-app-header"></div>
					{ chat }
					<div class="chatterbox-app-toolbar chatterbox-app-footer"></div>
				</Fragment>
			) }
			{ chatType && 'app' !== chatType && (
				<Fragment>
					<div
						className={ classNames(
							'device',
							'device-' + chatType
						) }
					>
						<div className="device-frame">
							<div className="device-content">{ chat }</div>
						</div>
						<div className="device-stripe"></div>
						<div className="device-header"></div>
						<div className="device-sensors"></div>
						<div className="device-btns"></div>
						<div className="device-power"></div>
					</div>
				</Fragment>
			) }
			{ ! chatType && chat }
		</div>
	);
};
