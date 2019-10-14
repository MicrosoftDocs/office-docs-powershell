---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Remove-CsTeamsEmergencyCallingPolicy
author: danny-levin
ms.author: dannyle
manager: roykuntz
ms.reviewer: chenc, pthota
schema: 2.0.0
---

# Remove-CsTeamsEmergencyCallingPolicy

## SYNOPSIS

## SYNTAX

```
Remove-CsTeamsEmergencyCallingPolicy [-Tenant <System.Guid>] [-Identity] <XdsIdentity> [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
 This cmdlet removes an existing Teams Emergency Calling policy.

## EXAMPLES

### Example 1
```powershell
PS C:>  Remove-CsTeamsEmergencyCallingPolicy -Identity testECP
```

 This example removes an existing Teams Emergency Calling policy with identity testECRP

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

### -Force
 The Force parameter suppresses any confirmation prompts that are otherwise displayed before the changes are made.

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
 The Identity parameter is the unique identifier of the Teams Emergency Calling policy to remove.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Tenant
 Specifies the tenant id.

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

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
