---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: https://go.microsoft.com/fwlink/?linkid=2258959
schema: 1.0.0
---

# Stop-Scan

## SYNOPSIS

Instructs the Microsoft Purview Information Protection scanner to stop the currently running scan cycle.

## SYNTAX
```
Stop-Scan
```

## DESCRIPTION
The **Stop-Scan** cmdlet stops an active scan for the current profile.

Stopping an active scan does not pause the scan cycle. Instead, it completely stops and cancels the scan, and shifts all scanners to idle mode until a new scan is requested.

When the new scan starts, it does not continue from the previous scan state, although the new scan does skip all files already scanned.

> [!NOTE]
> It may take up to five minutes until all scanners receive the stop command.

> [!TIP]
> If you want to pause a scan and have it start again from the same point, stop the Microsoft Purview Information Protection Scanner service on the scanner machine instead.
> 
## EXAMPLES

### Example 1: Stop the currently running scan cycle
```powershell
PS C:\> Stop-Scan
```

## INPUTS

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Start-Scan](Start-Scan.md)