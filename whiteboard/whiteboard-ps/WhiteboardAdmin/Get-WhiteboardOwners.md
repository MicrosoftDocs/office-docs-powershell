﻿---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/get-whiteboardowners
applicable: Microsoft Whiteboard
title: Get-WhiteboardOwners
schema: 2.0.0
author: shlevari
ms.author: shlevari
ms.reviewer:
---

# Get-WhiteboardOwners

## SYNOPSIS
Gets all the users in a tenant who own whiteboards in a specified geography.

## SYNTAX

```
Get-WhiteboardOwners [-Geography] <String> [[-ContinuationToken] <String>] [-ForceAuthPrompt]
 [<CommonParameters>]
```

## DESCRIPTION

Gets all the users in a tenant who own whiteboards in a specified geography. Returns them as an
object containing a list of user object, a tenantId and a continuation token. By calling repeatedly
passing in the new continuation tokens, all the owners for a tenant can be gathered. The data
returned is precalculated and therefore not realtime. Results are precalculated approximately every
two weeks.

## EXAMPLES

### EXAMPLE 1

Get the owners in the European geography.

```powershell
PS C:\>Get-WhiteboardOwners -Geography Europe
```

```Output
TenantId:                  tenantId
Geography:                 The geography queried for
Items:                     List of user ids
ContinuationToken:         continuation token
```

## PARAMETERS

### -ContinuationToken

(Optional) A continuation token based on the last time this function was called. Due to the large
volume of boards in a tenant, results are returned in chunks at a time, with a continuation token to
signify where to pick up from. To start from the beginning, pass in null.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceAuthPrompt

Optional. Always prompt for auth. Use to ignore cached credentials.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Geography

Required. The geography to look for board owners in. Accepted values are: Europe, Australia, or
Worldwide (all boards not in australia or europe).

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable,
-InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose,
-WarningAction, and -WarningVariable. For more information, see
[about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

For details on user IDs, see the [overview page](../../docs-conceptual/overview.md).

## RELATED LINKS
