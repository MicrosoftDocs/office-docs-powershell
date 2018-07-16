---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: Skype for Business Online
online version:
applicable: Skype for Business Online
title: Set-CsTeamsGuestCallingConfiguration
schema: 2.0.0
---
# Set-CsTeamsGuestCallingConfiguration

## SYNOPSIS
Allows admins to set values in the GuestCallingConfiguration, which specifies what options guest users have for calling within Teams.


## SYNTAX

```
Set-CsTeamsGuestCallingConfiguration [-WhatIf] [-Confirm] [[-Identity] <Object>] [-Tenant <Object>]
 [-AllowPrivateCalling <Boolean>] [-Force] [-Instance <Object>] [-AsJob]
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
Type: Object
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
Type: Object
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
Type: Object
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

### -AsJob
Internal Microsoft use

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

## INPUTS

### System.Management.Automation.PSObject


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
