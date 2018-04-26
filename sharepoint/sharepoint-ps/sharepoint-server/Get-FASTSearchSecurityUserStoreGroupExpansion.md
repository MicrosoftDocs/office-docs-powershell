---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchSecurityUserStoreGroupExpansion
---

# Get-FASTSearchSecurityUserStoreGroupExpansion

## SYNOPSIS
Gets all groups in a user store that the specified user is a member of.

## SYNTAX

```
Get-FASTSearchSecurityUserStoreGroupExpansion [-Identity] <String> [-User] <String>
 [[-Worker] <WorkerPoolNode>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet gets all the groups in a user store that the user is a member of, and all the groups that any owning group is a member of.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1-----------------
```
PS C:\>Get-FASTSearchSecurityUserStoreGroupExpansion -Identity ln1 -User user1
```

This example gets all the groups in the "ln1" user store that are parents, grand-parents, etc.
of the "user1" user.

### ---------------EXAMPLE 2-----------------
```
PS C:\>Get-FASTSearchSecurityWorkerNode workerserver | Get-FASTSearchSecurityUserStoreGroupExpansion -Identity ln2 -User user1
```

This example gets all the groups in the "ln2" user store from the worker with a server name of "workerserver" that are parents, grand-parents, etc.
of the "user1" user.

## PARAMETERS

### -Identity
The identity of the user store to look in.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -User
The user or group identifier to look up.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Worker
The optional Worker parameter specifies the WorkerPoolNode object for the security worker that is to handle the request.

```yaml
Type: WorkerPoolNode
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 9999
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

