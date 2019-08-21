---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsBatchPolicyAssignmentOperation

## SYNOPSIS
This cmdlet is used to assign a policy to a batch of users.  A batch may contain up to 20,000 users.

Note: The Teams application may need to be open by an Owner for up to two hours before changes are reflected. 

## SYNTAX

```
New-CsBatchPolicyAssignmentOperation -PolicyType <String> -PolicyName <String> -Identity <Array> [-OperationName <String>]
```

## DESCRIPTION
When a policy is assigned to a batch of users, the assignments are performed as an asynchronous operation.  The cmdlet returns the operation id which can be used to track the progress and status of the assignments.

## EXAMPLES

### Example 1
In this example, the batch of users is specified as an array of user object ids.

```
$users_ids = @("5d2c995d-282d-45ba-940b-a2d4052019a0","41e36f51-5075-453e-89e3-4896b02cfefb","00a0f297-45bb-420a-bd6c-66070e6e9e35")
New-CsBatchPolicyAssignmentOperation -PolicyType TeamsMeetingPolicy -PolicyName Kiosk -Identity $users_ids -OperationName "Example 1 batch"
```

### Example 2
In this example, the batch of users is read from a text file containing user object ids.

```
$user_ids = Get-Content .\users_ids.txt
New-CsBatchPolicyAssignmentOperation -PolicyType TeamsMeetingPolicy -PolicyName Kiosk -Identity $users_ids -OperationName "Example 1 batch"
```

### Example 3
In this example, the batch of users is obtained by connecting to Azure AD and retrieving a collection of users

```
Connect-AzureAD
$users = Get-AzureADUser
New-CsBatchPolicyAssignmentOperation -PolicyType TeamsMeetingPolicy -PolicyName Kiosk -Identity $users.ObjectId -OperationName "Example 1 batch"
```

## PARAMETERS

### -Identity
An array of users, specified either as object ids or as UPN/SIP addresses.  There is a maximum of 20,000 users per batch.

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
The name of the policy to be assigned to the users.

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
The name of the policy to be assigned to the users.

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

### -OperationName
An optional name for the batch assignment operation.

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
The id of the operation that can be used with the Get-CsBatchPolicyAssignmentOperation cmdlet to get the status of the operation.

## NOTES

## RELATED LINKS

[Get-CsBatchPolicyAssignmentOperation]()
