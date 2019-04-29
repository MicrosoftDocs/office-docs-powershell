const { general } = require('../constants/errors');

const platforms = {
	WIN_32: 'x86',
    WIN_64: 'x64'
};

const checkWindowPlatformType = () => {
	const isWin64 = process.arch === platforms.WIN_64;

	if (!isWin64) {
		throw general.TOOL_PLATFORM_TYPE;
	}
};

module.exports = checkWindowPlatformType;
