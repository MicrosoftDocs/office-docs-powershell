---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csvideointeropserviceprovider
schema: 2.0.0
title: Remove-CsVideoInteropServiceProvider
---

# Remove-CsVideoInteropServiceProvider

## SYNOPSIS
Use the Remove-CsVideoInteropServiceProvider to remove all provider information about a provider that your organization no longer uses.

## SYNTAX

```
Remove-CsVideoInteropServiceProvider [[-Identity] <Object>]
 [-Confirm]
 [-Force]
 [-Tenant <Object>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Cloud Video Interop for Teams enables 3rd party VTC devices to be able to join Teams meetings. The CsVideoInteropServiceProvider cmdlets allow you to designate provider/tenant specific information about the connection to the provider.

The only input is Identity - the provider you wish to remove.

## EXAMPLES

## PARAMETERS

### -Identity
Specify the VideoInteropServiceProvider to be removed.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsGlobalRelativeIdentity

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
