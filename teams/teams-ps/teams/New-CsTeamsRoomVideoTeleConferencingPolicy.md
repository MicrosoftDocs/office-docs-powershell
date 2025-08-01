---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsroomvideoteleconferencingpolicy
title: New-CsTeamsRoomVideoTeleConferencingPolicy
schema: 2.0.0
---

# New-CsTeamsRoomVideoTeleConferencingPolicy

## SYNOPSIS

Creates a new TeamsRoomVideoTeleConferencingPolicy.

## SYNTAX

```powershell
New-CsTeamsRoomVideoTeleConferencingPolicy [-Identity] <String> [-AreaCode <String>] [-Description <String>]
 [-Enabled <Boolean>] [-PlaceExternalCalls <String>] [-PlaceInternalCalls <String>]
 [-ReceiveExternalCalls <String>] [-ReceiveInternalCalls <String>] [-MsftInternalProcessingMode <String>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The Teams Room Video Teleconferencing Policy enables administrators to configure and manage video teleconferencing behavior for Microsoft Teams Rooms (meeting room devices).

## PARAMETERS

### -AreaCode

GUID provided by the CVI partner that the customer signed the agreement with.

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

### -Description

Enables administrators to provide additional text to accompany the policy. For example, the Description might include information about the users the policy should be assigned to.

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

### -Enabled

The policy can exist for the tenant but it can be enabled or disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

Unique identifier for the policy to be modified.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
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

### -PlaceExternalCalls

The IT admin can configure that their Teams rooms are enabled to place external calls or not, meaning calls from the Microsoft Teams Rooms to Video teleconferencing devices that are outside their own tenant.
Value: Enabled, Disabled

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

### -PlaceInternalCalls

The IT admin can configure that their Teams rooms are enabled to place internal calls or not. Meaning calls from the Microsoft Teams Rooms to Video teleconferencing devices that are within their own tenant.
Value: Enabled, Disabled

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

### -ReceiveExternalCalls

The IT admin can configure that their Teams rooms are enabled to receive external calls or not, meaning calls from Video teleconferencing devices that are outside their own tenant.
Value: Enabled, Disabled

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

### -ReceiveInternalCalls

The IT admin can configure that their Teams rooms are enabled to receive external calls or not. Meaning calls from Video Teleconferencing devices from their own tenant.
Value: Enabled, Disabled

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
