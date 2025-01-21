---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsguestcallingconfiguration
applicable: Microsoft Teams
title: Set-CsTeamsGuestCallingConfiguration
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---
# Set-CsTeamsGuestCallingConfiguration

## SYNOPSIS
Allows admins to set values in the GuestCallingConfiguration, which specifies what options guest users have for calling within Teams.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsGuestCallingConfiguration [-Tenant <Guid>] [-AllowPrivateCalling <Boolean>]
 [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsGuestCallingConfiguration [-Tenant <Guid>] [-AllowPrivateCalling <Boolean>]
 [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Allows admins to set values in the GuestCallingConfiguration, which specifies what options guest users have for calling within Teams.  This policy primarily allows admins to disable calling for guest users within Teams.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsGuestCallingConfiguration -Identity Global -AllowPrivateCalling $false
```

In this example, the admin has disabled private calling for guests in his organization.

## PARAMETERS

### -AllowPrivateCalling
Designates whether guests who have been enabled for Teams can use calling functionality.  If $false, guests cannot call.

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

### -Force
Bypass confirmation

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The only option is Global

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

### -Instance
Internal Microsoft use

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use

```yaml
Type: Guid
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject
## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
