---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsUserPolicyAssignment

## SYNOPSIS
NOTE: This cmdlet is currently only available in limited preview in the pre-release Teams PowerShell module.

This cmdlet is used to return the policy assignments for a user, both directly assigned and inherited from a group.

## SYNTAX

```
Get-CsUserPolicyAssignment [-Identity <String>]
```

## DESCRIPTION
This cmdlets returns the effective policies for a user, based on either direct policy assignment or inheritance from a group policy assignment.  For a given policy type, if an effective policy is not returned, this indicates that the effective policy for the user  

This cmdlet does not currently support returning policies for multiple users.

## EXAMPLES

### Example 1
This examples returns the policies for a user and indicates whether the policy is directly assigned to the user or was inherited from a group.

```
Get-CsUserPolicyAssignment -Identity 1471bd98-0a32-4426-930d-d790de8a0a70

PolicyType            PolicyName             PolicySource
-------               ----------             ----------  
TeamsMeetingPolicy    Host:AllOn             Group
TeamsMessagingPolicy  Tenant:SalesMessaging  Direct

## PARAMETERS

### -Identity
The identify of the user whose policy assignments will be returned.

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

## NOTES

## RELATED LINKS

[New-CsGroupPolicyAssignment]()

[Set-CsGroupPolicyAssignment]()

[Remove-CsGroupPolicyAssignment]()
