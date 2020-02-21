---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/get-csbatchpolicyassignmentoperation
schema: 2.0.0
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsBatchPolicyAssignmentOperation

## SYNOPSIS
NOTE: This cmdlet is currently only available in limited preview in the pre-release Teams PowerShell module.

This cmdlet is used to assign retrieve the status of batch policy assignment operations.

## SYNTAX

```
Get-CsBatchPolicyAssignmentOperation [-OperationId <UniqueIdentifier>]
```

## DESCRIPTION
This cmdlets returns the status of all batch policy assignment operations for the last 30 days.  If an operation ID is specified, the detailed status for that operation is returned including the status for each user in the batch.

## EXAMPLES

### Example 1
In this example, the status of all batch assignment operations is returned.

```
Get-CsBatchPolicyAssignmentOperation | ft OperationId, CreatedTime, CompletedTime, CompletedCount, ErrorCount

OperationId                          CreatedTime           CompletedTime         CompletedCount ErrorCount
-----------                          -----------           -------------         -------------- ----------
e640a5c9-c74f-4df7-b62e-4b01ae878bdc 7/19/2019 5:21:07 AM  7/19/2019 5:21:15 AM               8          0
01b9b2b7-5dbb-487c-b4ea-887c7c66559c 7/30/2019 7:55:16 PM  7/30/2019 7:55:21 PM               8          0
47bbc636-365d-4441-af34-9e0eceb05ef1 7/30/2019 8:14:22 PM  7/30/2019 8:14:33 PM               8          0
3964004e-caa8-4eb4-b0d2-7dd2c8173c8c 7/30/2019 8:17:37 PM  7/30/2019 8:17:49 PM               8          0
e70ef814-3289-4ee8-9402-5ec7ce1dde49 8/19/2019 8:16:25 PM  8/19/2019 8:16:34 PM               8          0
001141c3-1daa-4da1-88e9-66cc01c511e1 8/19/2019 8:17:41 PM  8/19/2019 8:17:51 PM               8          1
fd269d30-ae75-45b2-ad10-ec678940ef81 8/21/2019 11:28:01 PM 8/21/2019 11:28:07 PM              8          0
7040dcc2-30fa-4d19-a280-09e824c8b7aa 8/21/2019 11:37:00 PM 8/21/2019 11:37:12 PM              8          0
```

### Example 2
In this example, the status of a single batch is returned, including the assignment status for each user.  In this example, one of the users was not found.

```
Get-CsBatchPolicyAssignmentOperation -OperationId 001141c3-1daa-4da1-88e9-66cc01c511e1 | Select -ExpandProperty UserState

Id                                   Result                         State
--                                   ------                         -----
user01@fabrikam.com                  Success                        Completed
user02@fabrikam.com                  Success                        Completed
user03@fabrikam.com                  Success                        Completed
user04@fabrikam.com                  Success                        Completed
user05@fabkam.com                    Error: User not found.         Completed
user06@fabrikam.com                  Success                        Completed
user07@fabrikam.com                  Success                        Completed
user08@fabrikam.com                  Success                        Completed
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

### CompletedCount
The number of users in the batch for which the assignment has been completed (possibly with an error).

### CompletedTime
The date and time when the operation was completed.

### CreatedTime
The date and time when the operation was created.

### ErrorCount
The number of users in the batch for which the assignment failed.

### InProgressCount
The number of users in the batch for which the assignment is in progress.

### NotStartedCount
The number of users in the batch for which the assignment has not yet been performed.

### OperationId
The ID of the operation.

### OperationName
The name of the operation, if one was specific when the operation was created.

### OverallStatus
The overall status of the operations: NotStarted, InProgress, Complete

### UserState
Contains the status for each user in the batch.

**Id:** The ID of the user as specified when the batch was submitted.  Either the user object ID (guid) or UPN/SIP/email.

**result:** The result of the assignment operation for the user: Success or an error.

**state:** The status for the user: NotStarted, InProgress, Completed

## NOTES

## RELATED LINKS

[New-CsBatchPolicyAssignmentOperation]()
