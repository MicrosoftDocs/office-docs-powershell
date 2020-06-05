---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/set-csinboundblockednumberpattern
applicable: Skype for Business Online 
title: Set-CsInboundBlockedNumberPattern 
author: tomkau
ms.author: tomkau
ms.reviewer:
manager: bulenteg
schema: 2.0.0 
---

# Set-CsInboundBlockedNumberPattern

## SYNOPSIS
Modifies one or more parameters of a blocked number pattern in the tenant list.

## SYNTAX

### Identity (Default)
```
Set-CsInboundBlockedNumberPattern [-Tenant <Guid>] [-Enabled <Boolean>] [-Description <String>]
 [-Pattern <String>] [[-Identity] <XdsGlobalRelativeIdentity>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Set-CsInboundBlockedNumberPattern [-Tenant <Guid>] [-Enabled <Boolean>] [-Description <String>]
 [-Pattern <String>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] 
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet modifies one or more parameters of a blocked number pattern in the tenant list.

## EXAMPLES

### Example 1
```powershell
PS C:> Set-CsInboundBlockedNumberPattern -Identity "BlockAutomatic" -Pattern "^\+11234567890"
```

This example modifies a blocked number pattern to block inbound calls from +11234567890 number.

## PARAMETERS

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
A friendly description for the blocked number pattern to be modified.

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
If this parameter is set to True, the inbound calls matching the pattern will be blocked.

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

### -Force
The *Force* switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the *Force* switch isn't provided in the command, you're prompted for administrative input if required.

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
A unique identifier specifying the blocked number pattern to be modified.

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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Pattern
A regular expression that the calling number must match in order to be blocked.

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

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: System.Guid
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[New-CsInboundBlockedNumberPattern](New-CsInboundBlockedNumberPattern.md)

[Get-CsInboundBlockedNumberPattern](Get-CsInboundBlockedNumberPattern.md)

[Remove-CsInboundBlockedNumberPattern](Remove-CsInboundBlockedNumberPattern.md)
