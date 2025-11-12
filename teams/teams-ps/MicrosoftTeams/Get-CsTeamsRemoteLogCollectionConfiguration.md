---
applicable: Microsoft Teams
author: lakshmiroy
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: wayvad
Module Name: MicrosoftTeams
ms.author: lakshmiroy
online version: https://learn.microsoft.com/powershell/module/skype/get-csTeamsRemoteLogCollectionConfiguration
schema: 2.0.0
title: Get-CsTeamsRemoteLogCollectionConfiguration
---

# Get-CsTeamsRemoteLogCollectionConfiguration

## SYNOPSIS
Returns list of devices for which remote log collection has been initiated for.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsRemoteLogCollectionConfiguration [-Identity <Guid>]
[<CommonParameters>]

```

## DESCRIPTION

Remote log collection is a feature in Microsoft Teams that allows IT administrators to remotely trigger the collection of diagnostic logs from user devices through the Teams Admin Center (TAC). Instead of relying on manual user intervention, admins can initiate log collection for troubleshooting directly from the TAC portal. 

TeamsRemoteLogCollectionConfiguration is updated with a list of devices when an administrator wants to initiate a request for remote log collection for a user's device. Each device has a unique GUID identity, userId, deviceId and expiry date.

## EXAMPLES

### Example 1
```
PS C:\> Get-CsTeamsRemoteLogCollectionConfiguration
```

The above cmdlet lists the devices of TeamsRemoteLogCollectionConfiguration.

## PARAMETERS

### -Identity
{{Fill Identity Description}}

```yaml
Type: XdsIdentity
Parameter Sets: (All)
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

### None

## OUTPUTS

### System.Object

## RELATED LINKS

[Get-CsTeamsRemoteLogCollectionDevice](https://learn.microsoft.com/powershell/module/microsoftteams/get-csTeamsRemoteLogCollectionDevice)

[Set-CsTeamsRemoteLogCollectionDevice](https://learn.microsoft.com/powershell/module/microsoftteams/set-csTeamsRemoteLogCollectionDevice)

[New-CsTeamsRemoteLogCollectionDevice](https://learn.microsoft.com/powershell/module/microsoftteams/new-csTeamsRemoteLogCollectionDevice)

[Remove-CsTeamsRemoteLogCollectionDevice](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csTeamsRemoteLogCollectionDevice)
