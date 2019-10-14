---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Remove-CsTeamsMeetingBroadcastPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---


# Remove-CsTeamsMeetingBroadcastPolicy

## SYNOPSIS
Remove-CsTeamsMeetingBroadcastPolicy \[-Identity\] \<XdsIdentity\> \[-Tenant \<guid\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

## SYNTAX

```
Remove-CsTeamsMeetingBroadcastPolicy [-Tenant <Guid>] [-Identity] <XdsIdentity> [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
User-level policy for tenant admin to configure meeting broadcast behavior for the broadcast event organizer.  Use this cmdlet to delete an existing policy.

## EXAMPLES


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
Suppress all non-fatal errors when running this command.

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
Unique identifier for the policy to be removed. Policies can be configured at the global or per-user scopes. To remove the global policy, use this syntax: -Identity global. (Note that the global policy cannot actually be removed. Instead, all the policy properties will be reset to their default values.) 

To remove a per-user policy, use syntax similar to this: -Identity SalesPolicy.

Wildcards are not allowed when specifying an Identity.

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

### -Tenant
Not applicable to online service.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsIdentity
## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
