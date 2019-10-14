---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsGroupPolicyAssignment

## SYNOPSIS
NOTE: This cmdlet is currently only available in limited preview in the pre-release Teams PowerShell module.

This cmdlet is used to assign a policy to a group.

## SYNTAX

```
New-CsGroupPolicyAssignment -GroupId <String> -PolicyType <String> -PolicyName <String> [-Priority <Int>]
```

## DESCRIPTION
This cmdlet will assign a policy to a group.  The group can be specified by object id or by email/SIP address.

The priority is used to determine which policy a user should inherit as their effective policy if they are a member of two or more groups that each have a policy of the same type assigned (and the user has not been directly assigned a policy of the same type).

It’s helpful to think of priority as determining the position of each policy assignment in an ordered list, from highest priority to lowest priority.  In fact, priority can be specified as any number, but these are converted into sequential values 1, 2, 3, etc. with 1 being the highest priority.  When assigning a policy to a group, set the priority to be the position in the list where you want the new group policy assignment to be.  If a priority is not specified, the policy assignment will be given the lowest priority.

## EXAMPLES

### Example 1
In this example, a policy is assigned to a group specified by object id.

```
New-CsGroupPolicyAssignment -GroupId d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 -PolicyType TeamsMeetingPolicy -PolicyName AllOn -Priority 1

Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyName PolicyType         Priority
-------                              ---------- ----------         --------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 Host:AllOn TeamsMeetingPolicy 1
```

### Example 2
In this example, a policy is assigned to a group specified by email/SIP address.  The priority is not specified so it will be set to the lowest priority for the given policy type.

```
New-CsGroupPolicyAssignment -GroupId salesdepartment@contoso.com -PolicyType TeamsMeetingPolicy -PolicyName Kiosk

Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyName PolicyType         Priority
-------                              ---------- ----------         --------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 Host:AllOn TeamsMeetingPolicy 1
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 Host:Kiosk TeamsMeetingPolicy 2
```

### Example 3
In this example, the policy assignment priority is set to 2.  The current priority 2 policy assignment of the same type will be updated to priority 3.

```
Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyName PolicyType         Priority
-------                              ---------- ----------         --------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 Host:AllOn TeamsMeetingPolicy 1
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 Host:Kiosk TeamsMeetingPolicy 2

New-CsGroupPolicyAssignment -GroupId e050ce51-54bc-45b7-b3e6-c00343d31274 -PolicyType TeamsMeetingpolicy -PolicyName AllOff -Priority 2

Get-CsGroupPolicyAssignment

GroupId                              PolicyName  PolicyType         Priority
-------                              ----------  ----------         --------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 Host:AllOn  TeamsMeetingPolicy 1
e050ce51-54bc-45b7-b3e6-c00343d31274 Host:AllOff TeamsMeetingPolicy 2
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 Host:Kiosk  TeamsMeetingPolicy 3
```

## PARAMETERS

### -GroupId
The ID of a batch policy assignment operation.

```yaml
Type: String
Parameter Sets:
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyType
The type of the policy to be assigned.

```yaml
Type: String
Parameter Sets:
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
The name of the policy to be assigned.

```yaml
Type: String
Parameter Sets:
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The priority of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: String
Parameter Sets:
Aliases:

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

## OUTPUTS

### OperationId
The ID of the operation that can be used with the Get-CsBatchPolicyAssignmentOperation cmdlet to get the status of the operation.

## NOTES

## RELATED LINKS

[Get-CsGroupPolicyAssignment]()

[Set-CsGroupPolicyAssignment]()

[Remove-CsGroupPolicyAssignment]()

