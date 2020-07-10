---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/new-csinboundblockednumberpattern
applicable: Skype for Business Online 
title: New-CsInboundBlockedNumberPattern 
author: tomkau
ms.author: tomkau
ms.reviewer:
manager: bulenteg
schema: 2.0.0 
---

# New-CsInboundBlockedNumberPattern

## SYNOPSIS
Adds a blocked number pattern to the tenant list.

## SYNTAX

### Identity (Default)
```
New-CsInboundBlockedNumberPattern [-Tenant <Guid>] [-Enabled <Boolean>] [-Description <String>]
 -Pattern <String> [-Identity] <XdsGlobalRelativeIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsInboundBlockedNumberPattern [-Tenant <Guid>] -Name <String> [-Enabled <Boolean>]
 [-Description <String>] -Pattern <String> [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet adds a blocked number pattern to the tenant list.

## EXAMPLES

### Example 1
```powershell
PS C:> New-CsInboundBlockedNumberPattern -Description "Avoid Unwanted Automatic Call" -Name "BlockAutomatic" -Pattern "^\+11234567890"
```

This example adds a blocked number pattern to block inbound calls from +11234567890 number.

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
A friendly description for the blocked number pattern to be created.

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
Default value: True
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
A unique identifier specifying the blocked number pattern to be created.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-.

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

### -Name
A displayable name describing the blocked number pattern to be created.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pattern
A regular expression that the calling number must match in order to be blocked.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
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

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Get-CsInboundBlockedNumberPattern](Get-CsInboundBlockedNumberPattern.md)

[Set-CsInboundBlockedNumberPattern](Set-CsInboundBlockedNumberPattern.md)

[Remove-CsInboundBlockedNumberPattern](Remove-CsInboundBlockedNumberPattern.md)
