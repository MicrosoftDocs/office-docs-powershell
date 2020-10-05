---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-spoapperrors
applicable: SharePoint Online
title: Get-SPOAppErrors
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Get-SPOAppErrors

## SYNOPSIS

Returns application errors.

## SYNTAX

```powershell
Get-SPOAppErrors [-EndTimeInUtc <DateTime>] -ProductId <Guid> [-StartTimeInUtc <DateTime>] [<CommonParameters>]
```

## DESCRIPTION

The `Get-SPOAppErrors` cmdlet returns application monitoring errors (if available) for the application that is specified by ProductId between StartTimeInUtc in Coordinated Universal Time (UTC) and EndTimeInUtc in UTC.

Based on server configuration, errors are available for a limited time.
The default is seven days.
Older errors are purged.
Date time values that are older than 50 years or later than 20 years from today are considered invalid

Each error includes the error message, time in UTC that error happened, the site where the error happened, and the error type.
Values for error type are as follows: 0 - None, 1 - Install Error, 2 - Upgrade Error, 3 - Runtime Error.

You must be a SharePoint Online administrator or Global Administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at [Intro to SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/introduction-sharepoint-online-management-shell?view=sharepoint-ps).

## EXAMPLES

### ------------ Example 1 --------------------

```powershell
Get-SPOAppErrors -ProductId ba51729b-e017-409d-681a-66f1dd18f0f4
```

This example returns a collection of monitoring error message(s) for application whose GUID is ba51729b-e017-409d-681a-66f1dd18f0f4.

### ------------ Example 2 --------------------

```powershell
Get-SPOAppErrors -ProductId ba51729b-e017-409d-681a-66f1dd18f0f4 -StartTimeInUtc (Get-Date).AddHours(-1).ToUniversalTime()
```

This example returns a collection of monitoring error message(s) for application whose GUID is ba51729b-e017-409d-681a-66f1dd18f0f4 in the last hour.

## PARAMETERS

### -EndTimeInUtc

Specifies the end time in UTC to search for monitoring errors. If no end time is given, the default value current time in UTC is used.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProductId

Specifies the application's GUID.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTimeInUtc

Specifies the start time in UTC to search for monitoring errors. If no start time is given, the default value 72 hours before the current time is used.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppInfo](Get-SPOAppInfo.md)
