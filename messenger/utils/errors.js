"use strict";function getUploadError(e,r){var o=415===e.status,t=413===e.status,s=400===e.status&&"virus_detected"===e.code,a=void 0;return o?a=r.fileTypeError:t?a=getFileTooLargeText(r):s&&(a=r.uploadVirusError),{shouldRemoveMessage:o||t||s,bannerText:a}}function getFileTooLargeText(e){return e.fileTooLargeError.replace("{size}","10MB")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getUploadError=getUploadError,exports.getFileTooLargeText=getFileTooLargeText;