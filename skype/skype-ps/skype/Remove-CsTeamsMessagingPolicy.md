---
external help file: 
applicable: Skype for Business Online
schema: 2.0.0
---

# Remove-CsTeamsMessagingPolicy

## SYNOPSIS
Deletes a previously created TeamsMessagingPolicy.

Remove-CsTeamsMessagingPolicy \[-Identity\] \<XdsIdentity\> \[-Tenant \<guid\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

## SYNTAX

```
Remove-CsTeamsMessagingPolicy [-WhatIf] [-Confirm] [[-Identity] <Object>] [-Tenant <Object>] [-Force] [-AsJob]
```

## DESCRIPTION
Deletes a previously created TeamsMessagingPolicy.  Any users with no explicitly assigned policies will then fall back to the default policy in the organization.  You cannot delete the global policy from the organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsMessagingPolicy -Identity StudentMessagingPolicy
```

In the example shown above, the command will delete the student messaging policy from the organization's list of policies.

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
Unique identifier for the teams messaging policy to be removed. To remove the global policy, use this syntax: -Identity global. (Note that the global policy cannot actually be removed. Instead, all the policy properties will be reset to their default values.) To remove a custom policy, use this syntax: -Identity StudentMessagingPolicy .

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

### -Tenant

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

### Microsoft.Rtc.Management.Xds.XdsIdentity


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
