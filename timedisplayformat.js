const TimeDisplayFormat = {
    USE_12HR_FORMAT: 0,
    USE_24HR_FORMAT: 1,
    USE_SYSTEM_FORMAT: 2,
};

// Export Constants
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = TimeDisplayFormat;
} else {
    window.TimeDisplayFormat = TimeDisplayFormat;
}
