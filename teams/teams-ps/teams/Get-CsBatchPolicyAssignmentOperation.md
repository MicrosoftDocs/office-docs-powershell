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

**Note:** This cmdlet is currently in public preview. 

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
Get-CsBatchPolicyAssignmentOperation

OperationId                          OperationName           OverallStatus CreatedTime          CreatedBy
-----------                          -------------           ------------- -----------          ---------
e640a5c9-c74f-4df7-b62e-4b01ae878bdc Assigning Kiosk mtg     Completed     1/30/2020 3:21:07 PM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
01b9b2b7-5dbb-487c-b4ea-887c7c66559c Assigning allow calling Completed     1/30/2020 3:55:16 PM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
47bbc636-365d-4441-af34-9e0eceb05ef1                         Completed     1/30/2020 4:14:22 PM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
```

### Example 2
In this example, the details of a specific operation are returned.

```
Get-CsBatchPolicyAssignmentOperation -OperationId 01b9b2b7-5dbb-487c-b4ea-887c7c66559c  | fl

OperationId     : 01b9b2b7-5dbb-487c-b4ea-887c7c66559c
OperationName   : Assigning allow calling
OverallStatus   : Completed
CreatedBy       : aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
CreatedTime     : 1/30/2020 3:55:16 PM
CompletedTime   : 1/30/2020 3:59:06 PM
CompletedCount  : 3
ErrorCount      : 1
InProgressCount : 0
NotStartedCount : 0
UserState       : {f0d9c148-27c1-46f5-9685-544d20170ea1, cc05e18d-5fc0-4096-8461-ded64d7356e0,
                  bcff5b7e-8d3c-4721-b34a-63552a6a53f9}
```

### Example 3
In this example, the UserState property is expanded to see the status of each user in the batch. In this example, one of the users was not found.

```
Get-CsBatchPolicyAssignmentOperation -OperationId 001141c3-1daa-4da1-88e9-66cc01c511e1 | Select -ExpandProperty UserState

Id                                    Result           State
--                                    ------           -----
f0d9c148-27c1-46f5-9685-544d20170ea1  Success          Completed
cc05e18d-5fc0-4096-8461-ded64d7356e0  Success          Completed
bcff5b7e-8d3c-4721-b34a-63552a6a53f9  User not found   Completed
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
