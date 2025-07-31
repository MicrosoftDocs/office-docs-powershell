---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/set-teamarchivedstate
schema: 2.0.0
title: Set-TeamArchivedState
---

# Set-TeamArchivedState

## SYNOPSIS
This cmdlet is used to freeze all of the team activity, but Teams Administrators and team owners will still be able to add or remove members and update roles. You can unarchive the team anytime.

## SYNTAX

```
Set-TeamArchivedState -GroupId <String> -Archived <Boolean> [-SetSpoSiteReadOnlyForMembers <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to freeze all of the team activity and also specify whether SharePoint site should be marked as Read-Only.
Teams administrators and team owners will still be able to add or remove members and update roles. You can unarchive the team anytime.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-TeamArchivedState -GroupId 105b16e2-dc55-4f37-a922-97551e9e862d -Archived:$true
```

This example sets the group with id 105b16e2-dc55-4f37-a922-97551e9e862d as archived

### Example 2
```powershell
PS C:\> Set-TeamArchivedState -GroupId 105b16e2-dc55-4f37-a922-97551e9e862d -Archived:$true -SetSpoSiteReadOnlyForMembers:$true
```

This example sets the group with id 105b16e2-dc55-4f37-a922-97551e9e862d as archived and makes the SharePoint site read-only for team members.

### Example 3
```powershell
PS C:\> Set-TeamArchivedState -GroupId 105b16e2-dc55-4f37-a922-97551e9e862d -Archived:$false
```

This example unarchives the group with id 105b16e2-dc55-4f37-a922-97551e9e862d.

## PARAMETERS

### -Archived
Boolean value that determines whether or not the Team is archived.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupId
GroupId of the team

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -SetSpoSiteReadOnlyForMembers
Use this parameter switch to make the SharePoint site read-only for team members.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
