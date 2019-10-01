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
This cmdlet is used to assign a policy to a group.

## SYNTAX

```
New-CsGroupPolicyAssignment -GroupId -PolicyType -PolicyName -Priority
```

## DESCRIPTION
sss

## EXAMPLES

### Example 1
In this example, the status of all batch assignment operations is returned.

```
```

### Example 2
In this example, the status of a single batch is returned, including the assignment status for each user.  In this example, one of the users was not found.

```
```

## PARAMETERS

### -OperationId
The ID of a batch policy assignment operation.

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

[Set-CsBatchPolicyAssignment]()

[Remove-CsBatchPolicyAssignment]()
