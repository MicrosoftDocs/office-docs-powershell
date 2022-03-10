---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/new-csinboundexemptnumberpattern
applicable: Skype for Business Online and Teams
author: jenstrier
ms.author: jenstr
ms.reviewer: 
manager:
schema: 2.0.0
---

# New-CsInboundExemptNumberPattern

## SYNOPSIS

This cmdlet lets you configure a new number pattern that is exempt from tenant call blocking.

## SYNTAX

### Identity (Default)

```powershell
New-CsInboundExemptNumberPattern -Identity <String> -Pattern <String>
 [-Description <String>] [-Enabled <Boolean>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsInboundExemptNumberPattern [-Tenant <Guid>] -Name <String> [-Enabled <Boolean>]
 [-Description <String>] -Pattern <String> [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## EXAMPLES

### EXAMPLE 1

```powershell
PS C:> New-CsInboundExemptNumberPattern -Identity "AllowContoso1" -Pattern "^\+?1312555888[2|3]$" -Description "Allow Contoso helpdesk" -Enabled $True
```

Creates a new inbound exempt number pattern for the numbers 1 (312) 555-88882 and 1 (312) 555-88883 and enables it

## PARAMETERS

### -Confirm

Prompts you for confirmation before running the cmdlet.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

Sets the description of the number pattern.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
This parameter determines whether the number pattern is enabled for exemption or not.

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
Unique identifier for the exempt number pattern to be created.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
A displayable name describing the exempt number pattern to be created.

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

A regular expression that the calling number must match in order to be exempt from blocking. It is best pratice to start the regular expression with the hat character and end it with the dollar character. You can use various regular expression test sites on the Internet to validate the expression.

```yaml
Type: System.String
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
Type: System.Management.Automation.SwitchParameter
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

You can use Test-CsInboundBlockedNumberPattern to test your block and exempt phone number ranges.


## RELATED LINKS

[Get-CsInboundExemptNumberPattern](Get-CsInboundExemptNumberPattern.md)

[Set-CsInboundExemptNumberPattern](Set-CsInboundExemptNumberPattern.md)

[Remove-CsInboundExemptNumberPattern](Remove-CsInboundExemptNumberPattern.md)

[Test-CsInboundBlockedNumberPattern](Test-CsInboundBlockedNumberPattern.md)

[Get-CsTenantBlockedCallingNumbers](Get-CsTenantBlockedCallingNumbers.md)
