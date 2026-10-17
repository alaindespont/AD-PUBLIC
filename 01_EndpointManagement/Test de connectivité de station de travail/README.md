# Test de connectivité de station de travail

Historical Windows network diagnostic script, last updated on 21 October 2022.

## Purpose and output

The script displays computer and domain/workgroup information, IP and MAC addresses, gateway information and connectivity checks in the console. It waits for user input before closing.

## Requirements and limits

- Windows PowerShell with `Get-WmiObject` and the Windows networking cmdlets used by the script. The existing WMI calls require review before use with PowerShell 7.
- Review the gateway fallback (`192.168.0.1`) and external test targets (`google.com` and `8.8.8.8`) for the intended environment.
- Treat this as a historical troubleshooting example; its console conclusions must be checked against the raw results and the environment.

[Script](./TestConnectivit%C3%A9.ps1)
