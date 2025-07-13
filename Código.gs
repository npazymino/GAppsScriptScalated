/**
 * This function runs automatically when the spreadsheet is opened.
 * It initializes the custom Admin menu by calling the function from the linked library.
 */
function onOpen(e) {
  // PROSPR_Lib is the identifier you set when adding the library.
  // If you used a different identifier, change PROSPR_Lib here.
  PROSPR_Lib.initClientMenu();
}
