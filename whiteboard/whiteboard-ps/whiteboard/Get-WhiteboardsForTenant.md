---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/get-whiteboardsfortenant
applicable: Microsoft Whiteboard
title: Get-WhiteboardsForTenant
schema: 2.0.0
author: srajabi
ms.author: shlevari
ms.reviewer:
---

# Get-WhiteboardsForTenant

## SYNOPSIS

Gets all the whiteboards associated with a tenant in a specified geography.

## SYNTAX

```powershell
Get-WhiteboardsForTenant [-Geography] <String>
  [-IncrementalRunName] <String>
  [-ForceAuthPrompt]
  [<CommonParameters>]
```

## DESCRIPTION

Gets all the whiteboards in a tenant in a specified geography. Returns a list of whiteboard objects. The data returned is precalculated and therefore not realtime. Results are precalculated approximately every two weeks.

## EXAMPLES

### EXAMPLE 1

```powershell
PS C:\> Get-WhiteboardsForTenant -Geography Europe
```
Gets all the whiteboards associated with the caller's tenant in Europe.

## PARAMETERS

### -Geography

Required. The geography to look for board owners in. Accepted values are: Europe, Australia, or Worldwide (all boards not in Australia or Europe).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### -IncrementalRunName

Optional. Saves incremental progess as the cmdlet runs. Use to resume a partially completed run. Use the same RunName on later calls to continue a previously cancelled/failed run. Writes progress and results to .txt files in the current directory:
 - "Whiteboards-*.txt" contains the incremental results containing whiteboard objects for the tenant where * is the provided RunName. 
 - "WhiteboardAdminRun-*.txt" contains the state of the current where * is the provided RunName. This file should not be modified manually

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### -ForceAuthPrompt

Optional. Always prompt for auth. Use to ignore cached credentials.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Microsoft Whiteboard
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS
###  
The cmdlet returns a list of whiteboard metadata objects.

```yaml
baseApi:                   baseApi-value
id:                        whiteboardId-value
userId:                    userId-value
folioId:                   folioId-value
title:                     title-value
createdBy:                 createdBy-value
ownerId:                   ownerId-value
ownerTenantId:             ownerTenantId-value
isShared:                  isShared-value
createdTime:               createdTime-value
invitedTime:               invitedTime-value
personalLastModifiedTime:  personalLastModifiedTime-value
lastModifiedTime:          lastModifiedTime-value
globalLastViewedTime:      globalLastViewedTime-value
lastViewedTime:            lastViewedTime-value
meetingId:                 meetingId-value
eTag:                      eTag-value
```

## NOTES

For details on user IDs, see the [overview page](../../docs-conceptual/overview.md).

## RELATED LINKS
