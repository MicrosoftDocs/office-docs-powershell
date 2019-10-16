---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Remove-CsGroupPolicyAssignment

## SYNOPSIS
NOTE: This cmdlet is currently only available in limited preview in the pre-release Teams PowerShell module.

This cmdlet is used to remove a group policy assignment.

## SYNTAX

```
Remove-CsGroupPolicyAssignment -GroupId <String> -PolicyType <String>
```

## DESCRIPTION
This cmdlet removes the policy of a specific type from a group.  A group can only be assigned one policy of a given type, so the name of the pokicy tobe removed does not need to be specified.

When a policy assignment is removed from a group, any other group policy assignments of the same type that have lower priority will be updated.  For example, if the policy assignment with priority 2 is removed, then the priority 3 and 4 policy assignments will be updated to priority 2 and 3 respectively.

## EXAMPLES

### Example 1
In this example, the policy assignment with priority 2 is removed.  As a result, the policy assignment with priority 3 is updated to priority 2.

```
Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyName  PolicyType         Priority
-------                              ----------  ----------         --------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 Host:AllOn  TeamsMeetingPolicy 1
e050ce51-54bc-45b7-b3e6-c00343d31274 Host:AllOff TeamsMeetingPolicy 2
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 Host:Kiosk  TeamsMeetingPolicy 3

Remove-CsGroupPolicyAssignment -GroupId e050ce51-54bc-45b7-b3e6-c00343d31274 -PolicyType TeamsMeetingPolicy 

Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyName  PolicyType         Priority
-------                              ----------  ----------         --------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 Host:AllOn  TeamsMeetingPolicy 1
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 Host:Kiosk  TeamsMeetingPolicy 2
```

## PARAMETERS

### -GroupId
The ID of the group from which the assignment will be removed.

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
The policy type of the assignment to be removed from the group.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### OperationId
The ID of the operation that can be used with the Get-CsBatchPolicyAssignmentOperation cmdlet to get the status propagation of the policy removal to the members of the group.

## NOTES

## RELATED LINKS

[Get-CsGroupPolicyAssignment]()

[New-CsGroupPolicyAssignment]()

[Set-CsGroupPolicyAssignment]()

