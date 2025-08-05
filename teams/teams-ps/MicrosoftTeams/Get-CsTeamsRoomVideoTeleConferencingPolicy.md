---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsroomvideoteleconferencingpolicy
schema: 2.0.0
title: Get-CsTeamsRoomVideoTeleConferencingPolicy
---

# Get-CsTeamsRoomVideoTeleConferencingPolicy

## SYNOPSIS

Use this cmdlet to retrieve the current Teams Room Video TeleConferencing policies.

## SYNTAX

### Identity (Default)

```
Get-CsTeamsRoomVideoTeleConferencingPolicy [[-Identity] <String>] [-MsftInternalProcessingMode <String>]
 [<CommonParameters>]
```

### Filter

```
Get-CsTeamsRoomVideoTeleConferencingPolicy [-MsftInternalProcessingMode <String>] [-Filter <String>]
 [<CommonParameters>]
```

## DESCRIPTION

The Teams Room Video Teleconferencing Policy enables administrators to configure and manage video teleconferencing behavior for Microsoft Teams Rooms (meeting room devices).

## EXAMPLES

## PARAMETERS

### -Filter

Enables you to use wildcard characters when indicating the policy (or policies) to be returned.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

The name the tenant admin gave to the Policy.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MsftInternalProcessingMode

For internal use only.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
