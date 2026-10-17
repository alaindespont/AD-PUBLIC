# Service Desk Mail Merger v12

A historical service desk tool for preparing email reminders and applying shared email templates and workflows. The documentation was last updated on 7 March 2022.

## Context and approach

The tool uses an Excel macro-enabled workbook, Outlook and ServiceNow workflows. The original documentation explains that implementing the automation directly in the ticketing system was not an available option, so the tool was built around the tools available to technicians.

Its documented objectives include reducing repetitive email preparation, applying management-approved templates and keeping service desk processes consistent.

## Public archive status

This is a partial historical archive. Installation is not reproducible as documented: `INSTALL.bat` references `01_Single Mails Templates` and `04_RQTExtract`, which are not included in the public repository.

Do not treat this folder as a complete installation package. Environment-specific report references and configuration must be replaced before any reuse.

## Documentation

- [Original documentation](./DOCUMENTATION.pdf): context, installation, configuration, workflows and limitations.
- [Workbook](./installationfiles/MailMerger.xlsm): the Excel-based tool.

The PDF describes the original environment and workflow; it is historical documentation rather than a claim of compatibility with current product versions.
