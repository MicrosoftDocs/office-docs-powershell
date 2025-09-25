---
applicable: Microsoft Teams
author: lakshmiroy
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: wayvad
Module Name: MicrosoftTeams
ms.author: lakshmiroy
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csTeamsRemoteLogCollectionDevice
schema: 2.0.0
title: New-CsTeamsRemoteLogCollectionDevice

---

# New-CsTeamsRemoteLogCollectionDevice

## SYNOPSIS

This cmdlet allows you to create a new TeamsRemoteLogCollectionDevice instance and set it's properties.

## SYNTAX

```powershell
New-CsTeamsRemoteLogCollectionDevice [-Identity <Guid>] [-UserId <String>]
 [-DeviceId <String>] [-ExpireAfter <String>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to create a TeamsRemoteLogCollectionDevice instance. 

Remote log collection is a feature in Microsoft Teams that allows IT administrators to remotely trigger the collection of diagnostic logs from user devices through the Teams Admin Center (TAC). Instead of relying on manual user intervention, admins can initiate log collection for troubleshooting directly from the TAC portal. 

TeamsRemoteLogCollectionConfiguration is updated with a list of devices when an administrator wants to initiate a request for remote log collection for a user's device. Each device has a unique GUID identity, userId, deviceId and expiry date.

## EXAMPLES

Each Identity, userId and deviceId must be a valid GUID
### Example 1
```powershell
PS C:\> New-CsTeamsRemoteLogCollectionDevice -UserId "765267a2-aa73-4984-a37e-43470f5e21a7" -DeviceId "765267a2-aa73-4984-a37e-43470f5e21a7" -ExpireAfter "06/07/2025 15:30:45"
```

Creates a new instance of TeamsRemoteLogCollectionDevice.

## PARAMETERS

### -UserId

> Applicable: Microsoft Teams

Indicates the userId of the user for which an admin is requesting logs for. This userId must be a valid GUID.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeviceId

> Applicable: Microsoft Teams

Indicates the deviceId of the device for which an admin is requesting logs for. This deviceId must be a valid GUID.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpireAfter

> Applicable: Microsoft Teams

Indicates the expiry date after which the remote log collection request will expire. This expire after date should be set to now() + 3 days. This expiry date should be in ISO 8601 UTC format.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Microsoft Teams

Policy instance name.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
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

## NOTES

## RELATED LINKS

[Get-CsTeamsRemoteLogCollectionConfiguration](https://learn.microsoft.com/powershell/module/microsoftteams/get-csTeamsRemoteLogCollectionConfiguration)

[Get-CsTeamsRemoteLogCollectionDevice](https://learn.microsoft.com/powershell/module/microsoftteams/get-csTeamsRemoteLogCollectionDevice)

[Set-CsTeamsRemoteLogCollectionDevice](https://learn.microsoft.com/powershell/module/microsoftteams/set-csTeamsRemoteLogCollectionDevice)

[Remove-CsTeamsRemoteLogCollectionDevice](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csTeamsRemoteLogCollectionDevice)
