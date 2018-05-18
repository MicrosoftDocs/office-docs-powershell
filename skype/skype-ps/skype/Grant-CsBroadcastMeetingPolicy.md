---
external help file: 
title: Grant-CsBroadcastMeetingPolicy
schema: 2.0.0
---

# Grant-CsBroadcastMeetingPolicy

## SYNOPSIS
Use the Grant-CsBroadcastMeetingPolicy cmdlet to assign a broadcast meeting policy to a user.

## SYNTAX

```
Grant-CsBroadcastMeetingPolicy [[-Identity] <Object>] [[-PolicyName] <Object>] [-Confirm]
 [-DomainController <Object>] [-PassThru] [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Broadcast meeting functionality is managed by broadcast meeting configurations at the tenant level, and broadcast meeting policies at the user level.
Broadcast meeting policies are predefined in Skype for Business.
The defined settings for each policy can be displayed by using the Get-CsBroadcastMeetingPolicy cmdlet with no parameters.
New policies can't be created, and existing policies can't be modified.
They can only be granted, or assigned to users.

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

Grant-CsBroadcastMeetingPolicy -Identity jphillips@contoso.com -PolicyName BroadcastMeetingPolicyAllEnabled
```

This example grants the BroadcastMeetingPolicyAllEnabled policy to a user identified by User Principal Name (UPN.)


## PARAMETERS

### -Identity
Specifies the identity of the target user.
Acceptable values include:

Example: jphillips@contoso.com

Example: sip:jphillips@contoso.com

Example: 98403f08-577c-46dd-851a-f0460a13b03d

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
Specifies the name of the policy to be assigned to a user.
A list of the policies for your organization can be retrieved using Get-CsBroadcastMeetingPolicy.
The PolicyName is the policy identity minus the policy scope (the "tag:" prefix).
For example, a policy with the identity "Tag:BroadcastMeetingPolicyDisabled" has a PolicyName equal to "BroadcastMeetingPolicyDisabled".
To unassign a previously assigned policy, set PolicyName to $Null.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user account being assigned the policy.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
PARAMVALUE: Guid

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None

## OUTPUTS

###  
None

## NOTES

## RELATED LINKS


