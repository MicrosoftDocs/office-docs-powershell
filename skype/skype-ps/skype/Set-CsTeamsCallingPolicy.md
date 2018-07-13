---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: Skype for Business Online
online version:
schema: 2.0.0
---

# Set-CsTeamsCallingPolicy

## SYNOPSIS

Use this cmdlet to update values in existing Teams Calling Policies.

## SYNTAX

```
Set-CsTeamsCallingPolicy [-WhatIf] [-AllowCalling <Boolean>] [-Confirm] [[-Identity] <Object>]
 [-Tenant <Object>] [-AllowPrivateCalling <Boolean>] [-Force] [-Instance <Object>] [-AsJob]
```

## DESCRIPTION
The Teams Calling Policies designate which users are able to use calling functionality within teams and determine the interopability state with Skype for Business.  This cmdlet allows admins to set values in a given calling policy

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsCallingPolicy -Identity Global -AllowPrivateCalling $true
```

Sets the value of the parameter AllowPrivateCalling, which controls whether or not users can leverage calling functionality in Microsoft Teams, in the global (default) tenant CallingPolicy 
## PARAMETERS

### -AllowCalling
Controls interop calling capabilities. Turning this on will allow Skype for Business users to have one-on-one calls with Teams users and vice-versa. 

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

### -AllowPrivateCalling
controls all calling capabilities in Teams. Turning this off will turn off all calling functionality in Teams. If you use Skype for Business for calling, this policy will not affect calling functionality in Skype for Business.

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
Suppresses all non-fatal errors

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
Name of the policy being modified.

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
