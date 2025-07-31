---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/teams/get-csautoattendantstatus
schema: 2.0.0
title: Get-CsAutoAttendantStatus
---

# Get-CsAutoAttendantStatus

## SYNOPSIS
Use Get-CsAutoAttendantStatus cmdlet to get the status of an Auto Attendant (AA) provisioning.

## SYNTAX

```
Get-CsAutoAttendantStatus -Identity <String> [-IncludeResources <List>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet provides a way to return the provisioning status of an auto attendant configured for use in your organization.

## EXAMPLES

### Example 1
```
Get-CsAutoAttendantStatus -Identity "f7a821dc-2d69-5ae8-8525-bcb4a4556093"
```

In Example 1, the Get-CsAutoAttendantStatus cmdlet is used to get status records for all resources of an auto attendant with identity of f7a821dc-2d69-5ae8-8525-bcb4a4556093.

### Example 2
```
Get-CsAutoAttendantStatus -Identity "f7a821dc-2d69-5ae8-8525-bcb4a4556093" -IncludeResources @("AudioFile")
```

In Example 2, the Get-CsAutoAttendantStatus cmdlet is used to get status records pertaining to audio files only of an auto attendant with identity of f7a821dc-2d69-5ae8-8525-bcb4a4556093.

## PARAMETERS

### -Identity
Represents the identifier for the auto attendant whose provisioning status is to be retrieved.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeResources
The IncludeResources parameter identities the auto attendant resources whose status is to be retrieved. Available resources are:
- AudioFile: Indicates status for audio files used by AA.
- DialByNameVoiceResponses: Indicates status for speech recognition when using dial-by-name (directory lookup) feature with AA.
- SipProvisioning: Indicates status for calling AA through its SIP (Primary) URI.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: (All)
Aliases:
Accepted values: AudioFile, DialByNameVoiceResponses, SipProvisioning
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
The Get-CsAutoAttendantStatus cmdlet accepts a string as the Identity parameter.

## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.StatusRecord

## NOTES

## RELATED LINKS

[Get-CsAutoAttendant](https://learn.microsoft.com/powershell/module/teams/get-csautoattendant)
