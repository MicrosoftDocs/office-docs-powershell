---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Remove-CsTeamsMeetingPolicy
schema: 2.0.0
---

# Remove-CsTeamsMeetingPolicy

## SYNOPSIS
Remove-CsTeamsMeetingPolicy \[-Identity\] \<XdsIdentity\> \[-Tenant \<guid\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

## SYNTAX

```
Remove-CsTeamsMeetingPolicy [-WhatIf] [-Confirm] [[-Identity] <Object>] [-Tenant <Object>] [-Force] [-AsJob]
```

## DESCRIPTION
Deletes a previously created TeamsMeetingPolicy.  Any users with no explicitly assigned policies will then fall back to the default policy in the organization.  You cannot delete the global policy from the organization. 

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsMeetingPolicy -Identity StudentMeetingPolicy
```

In the example shown above, the command will delete the student meeting policy from the organization's list of policies and remove all assignments of this policy from users who have had the policy assigned.

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
Unique identifier for the teams meeting policy to be removed. To remove the global policy, use this syntax: -Identity global. (Note that the global policy cannot actually be removed. Instead, all the policy properties will be reset to their default values.) To remove a custom policy, use this syntax: -Identity StudentMeetingPolicy .

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

