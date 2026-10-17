# Listing des programmes installés

Historical Windows PowerShell inventory script, last updated on 6 February 2021.

## Purpose and output

The script reads the 32-bit and 64-bit uninstall registry locations under `HKLM`, exports software information and separates Microsoft and non-Microsoft entries into `ProgrammesWindows.csv` and `ProgrammesPasWindows.csv` beside the script. Temporary CSV files are removed at the end.

## Requirements and limits

- Windows with PowerShell and permission to read the registry locations and write beside the script.
- This is a registry-based inventory example, not an Intune or Microsoft Graph implementation.
- It does not establish a complete inventory of every application or Windows update. Results depend on the registry data available, including publisher and installation date fields.
- Review the script and validate the exported data before reuse.

[Script](./ListingProgrammesInstall%C3%A9s.ps1)
