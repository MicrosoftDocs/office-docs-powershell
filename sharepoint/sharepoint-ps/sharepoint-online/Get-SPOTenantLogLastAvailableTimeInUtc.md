---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Get-SPOTenantLogLastAvailableTimeInUtc
schema: 2.0.0
author: vesajuvonen
ms.author: vesaj
ms.reviewer:
---

# Get-SPOTenantLogLastAvailableTimeInUtc

## SYNOPSIS
Returns the most recent time when the SharePoint Online organization logs were collected.

## SYNTAX

```
Get-SPOTenantLogLastAvailableTimeInUtc [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves the time in Coordinated Universal Time (UTC) when the logs were last collected.
After you know the time, you can use the `Get-SPOTenantLogEntry` cmdlet to retrieve the logs.

You must be a SharePoint Online global administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Get-SPOTenantLogLastAvailableTimeInUtc
```

This example returns the time in UTC when the SharePoint Online organization logs were most recently collected.


## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Get-SPOTenantLogEntry](Get-SPOTenantLogEntry.md)
